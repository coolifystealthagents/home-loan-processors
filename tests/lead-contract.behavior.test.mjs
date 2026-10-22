import assert from 'node:assert/strict';
import test from 'node:test';
import { MAX_REQUEST_BYTES, parseLeadForm, readLimitedBody, trustedFormOrigin } from '../lib/lead-contract.ts';
import { deliverLead, formatMattermostLead } from '../lib/lead-delivery.ts';
import { createRateLimiter, trustedClientKey } from '../lib/rate-limit.ts';

function consultation(overrides = {}) {
  const values = {
    source: 'contact-page-consultation', request_type: 'consultation', first_name: 'Avery', last_name: 'Broker',
    email: 'avery@example.com', company: 'Example Mortgage', company_size: '11 to 50',
    positions_to_fill: '1', referral_source: 'Search engine', phone_country: '+44',
    phone: '020 1234 5678', company_website: 'https://example.com',
    message: 'Pipeline support request', _page_url: 'https://themortgageassistant.com/contact-us',
    ...overrides,
  };
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) form.set(key, String(value));
  return form;
}

test('consultation schema cannot be weakened by a forged source value', () => {
  assert.equal(parseLeadForm(consultation({ source: 'forged', company: '' })).ok, false);
});

test('accepted payload is bounded, allowlisted, and preserves the country code', () => {
  const form = consultation();
  form.set('unexpected_admin_field', 'must not forward');
  const result = parseLeadForm(form);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.lead.phone, '+44 020 1234 5678');
  assert.equal('unexpected_admin_field' in result.forwardPayload, false);
});

test('field-length bounds reject oversized public input', () => {
  assert.equal(parseLeadForm(consultation({ message: 'x'.repeat(3001) })).ok, false);
});

test('limited body reader rejects a stream beyond the request ceiling', async () => {
  const request = new Request('https://example.test/api/submit-lead', { method: 'POST', body: new Uint8Array(MAX_REQUEST_BYTES + 1) });
  await assert.rejects(() => readLimitedBody(request), /too large/i);
});

test('lead endpoint origin guard is fail-closed in production and narrowly supports local development', () => {
  const request = (url, origin) => new Request(url, { headers: origin ? { origin } : {} });
  assert.equal(trustedFormOrigin(request('https://homeloanprocessors.com/api/submit-lead'), 'production'), false);
  assert.equal(trustedFormOrigin(request('https://homeloanprocessors.com/api/submit-lead', 'https://homeloanprocessors.com'), 'production'), true);
  assert.equal(trustedFormOrigin(request('https://homeloanprocessors.com/api/submit-lead', 'https://www.homeloanprocessors.com'), 'production'), true);
  assert.equal(trustedFormOrigin(request('https://homeloanprocessors.com/api/submit-lead', 'https://attacker.invalid'), 'production'), false);
  assert.equal(trustedFormOrigin(request('https://homeloanprocessors.com/api/submit-lead', 'not a URL'), 'production'), false);
  assert.equal(trustedFormOrigin(request('http://localhost:3000/api/submit-lead', 'http://localhost:3000'), 'development'), true);
  assert.equal(trustedFormOrigin(request('https://preview.invalid/api/submit-lead', 'https://preview.invalid'), 'test'), false);
  assert.equal(trustedFormOrigin(request('https://preview.invalid/api/submit-lead', 'https://preview.invalid'), undefined), false);
});

const lead = { name: 'Avery Broker', email: 'avery@example.com', phone: '+44 020 1234 5678', business: 'Example Mortgage', message: '', companySize: '11 to 50', positions: '1', referral: 'Search engine', pageUrl: 'https://themortgageassistant.com/contact-us' };

test('delivery succeeds only after the primary sink confirms the allowlisted payload', async () => {
  const calls = [];
  const primaryPayload = { source: 'contact-page-consultation', first_name: 'Avery', email: 'avery@example.com' };
  const delivered = await deliverLead(lead, { endpoint: 'https://primary.test/leads', fallbackWebhook: 'https://fallback.test/hook', primaryPayload, fetcher: async (url, init) => { calls.push({ url: String(url), body: JSON.parse(String(init?.body)) }); return new Response('', { status: 200 }); } });
  assert.equal(delivered, true);
  assert.deepEqual(calls, [{ url: 'https://primary.test/leads', body: primaryPayload }]);
});

test('delivery awaits fallback when the primary sink fails', async () => {
  const calls = [];
  const delivered = await deliverLead(lead, { endpoint: 'https://primary.test/leads', fallbackWebhook: 'https://fallback.test/hook', fetcher: async (url) => { calls.push(String(url)); return new Response('', { status: calls.length === 1 ? 503 : 200 }); } });
  assert.equal(delivered, true);
  assert.deepEqual(calls, ['https://primary.test/leads', 'https://fallback.test/hook']);
});

test('delivery fails when no server-side sink confirms receipt', async () => {
  const delivered = await deliverLead(lead, { endpoint: '', fallbackWebhook: '', fetcher: async () => new Response('', { status: 200 }) });
  assert.equal(delivered, false);
});

test('privacy requests do not require fabricated company data', () => {
  assert.equal(parseLeadForm(consultation({ request_type: 'privacy', referral_source: '', company: '', company_size: '', positions_to_fill: '' })).ok, true);
  assert.equal(parseLeadForm(consultation({ request_type: 'privacy', referral_source: '', company: '', company_size: '', positions_to_fill: '', message: '' })).ok, false);
  assert.equal(parseLeadForm(consultation({ request_type: 'consultation', company: '' })).ok, false);
});

test('Mattermost formatting labels request type and neutralizes every mention plus line injection', () => {
  const message = formatMattermostLead({ ...lead, requestType: 'privacy', name: '@channel\r\nInjected', message: '@here @all @alice @developers prefix,@comma /@slash "@quoted" :@colon' });
  assert.match(message, /Request type: Privacy/);
  assert.match(message.replaceAll('\u200b', ''), /avery@example\.com/);
  assert.doesNotMatch(message, /@(channel|here|all|alice|developers|comma|slash|quoted|colon)\b/i);
  assert.doesNotMatch(message, /\r/);
});

test('rate limiter ignores spoofable forwarding chains, resets windows, and keeps bounded state', () => {
  assert.equal(trustedClientKey(new Headers({ 'x-forwarded-for': 'spoofed', 'x-real-ip': '203.0.113.8' })), 'unidentified');
  assert.equal(trustedClientKey(new Headers({ 'cf-connecting-ip': 'not-an-ip' })), 'unidentified');
  assert.equal(trustedClientKey(new Headers({ 'cf-connecting-ip': '203.0.113.9', 'x-forwarded-for': 'spoofed' })), '203.0.113.9');
  const limiter = createRateLimiter({ limit: 1, windowMs: 10, maxKeys: 2 });
  assert.equal(limiter.allow('one', 1), true);
  assert.equal(limiter.allow('one', 2), false);
  assert.equal(limiter.allow('one', 12), true);
  limiter.allow('two', 13);
  limiter.allow('three', 14);
  assert.ok(limiter.size() <= 2);
});
