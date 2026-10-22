import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const chrome = read('components/SiteChrome.tsx');
const layout = read('app/layout.tsx');
const css = read('app/globals.css');
const contact = read('app/contact-us/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const form = read('components/LeadForm.tsx');
const route = read('app/api/submit-lead/route.ts');
const contract = read('lib/lead-contract.ts');

test('shared chrome has exactly three sticky primary navigation choices', () => {
  const primaryNav = chrome.match(/<nav[^>]*id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? '';
  assert.ok(primaryNav);
  assert.equal((primaryNav.match(/<Link\b/g) ?? []).length, 3);
  assert.match(primaryNav, /href="\/"[^>]*>Home<\/Link>/);
  assert.match(primaryNav, /href="\/services"[^>]*>Services<\/Link>/);
  assert.match(primaryNav, /href="\/contact-us"[^>]*>Contact Us/);
  assert.doesNotMatch(primaryNav, />About<|>Blog<|>Research<|Insights/);
  assert.match(chrome, /aria-expanded=\{mobileOpen\}/);
  assert.match(chrome, /aria-controls="primary-navigation"/);
  assert.match(css, /\.site-header\{position:sticky/);
  assert.match(css, /@media\(max-width:900px\)[\s\S]*?\.nav-toggle\{display:flex/);
});

test('skip link and mobile navigation keyboard handling are present', () => {
  assert.match(chrome, /className="skip-link" href="#main-content"/);
  assert.match(layout, /id="main-content"/);
  assert.match(chrome, /event\.key === 'Escape'/);
  assert.match(chrome, /event\.key === 'Tab'/);
  assert.match(chrome, /mobileToggleRef\.current\?\.focus\(\)/);
});

test('official parent identity is visible in header and footer', () => {
  assert.equal((chrome.match(/Powered by StealthAgents/g) ?? []).length, 2);
  assert.match(chrome, /\/brand\/stealth-agents-logo-black\.png/);
  assert.equal(existsSync(new URL('../public/brand/stealth-agents-logo-black.png', import.meta.url)), true);
  assert.equal(existsSync(new URL('../public/brand/stealth-agents-team.webp', import.meta.url)), true);
});

test('approved reviews power an accessible motion-aware contact marquee', () => {
  const reviews = JSON.parse(read('lib/stealthAgentsReviews.json'));
  assert.equal(reviews.length, 14);
  assert.equal(new Set(reviews.map((review) => review.evidenceId)).size, 14);
  assert.match(contact, /StealthAgents reviews/);
  assert.match(contact, /review-marquee/);
  assert.match(contact, /'★'\.repeat\(5\)/);
  assert.match(contact, /stealthAgentsReviews\.map/);
  assert.match(read('app/contact-us/contact.css'), /\.review-marquee:hover[\s\S]*animation-play-state:paused/);
  assert.match(read('app/contact-us/contact.css'), /prefers-reduced-motion:reduce[\s\S]*\.review-track/);
  assert.doesNotMatch(layout, /TimedLeadModal/);
});

test('contact submission precedes scheduling, which exists only on thank-you', () => {
  assert.match(contact, /<LeadForm \/>/);
  assert.doesNotMatch(contact, /oncehub|booking-frame|iframe/);
  assert.match(thankYou, /<iframe[^>]*className="booking-frame"/);
  assert.match(thankYou, /go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(form, /router\.push\('\/thank-you'\)/);
});

test('personal email is accepted while required fields, tracking, honeypot, and fallback remain', () => {
  assert.doesNotMatch(form + route, /personalDomains|business email address|personal email providers are not accepted/i);
  assert.match(form, /Work or personal email addresses are welcome/);
  for (const field of ['first_name', 'last_name', 'email', 'company', 'company_size', 'positions_to_fill', 'referral_source']) {
    assert.match(form, new RegExp(`name="${field}"[^>]*required|required[^>]*name="${field}"`));
  }
  assert.match(form, /<label className="honeypot" aria-hidden="true">/);
  assert.match(form, /name="website_url" tabIndex=\{-1\} autoComplete="off"/);
  assert.match(form, /window\.acrTracker\?\.trackLead/);
  assert.match(form, /data\.set\('_page_url', window\.location\.href\)/);
  assert.match(route, /if \(form\.get\('website_url'\)\)/);
  assert.match(route, /deliverLead/);
  assert.match(route, /if \(!trustedFormOrigin\(request\)\)/);
  assert.match(contract, /\/\^\\S\+@\\S\+\\\.\\S\+\$\//);
  assert.match(contract, /MAX_REQUEST_BYTES/);
  assert.match(route, /await deliverLead/);
  assert.doesNotMatch(route, /void deliverLead/);
});
