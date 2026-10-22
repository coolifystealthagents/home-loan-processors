export const MAX_REQUEST_BYTES = 32_768;

const LIMITS = { requestType: 20, firstName: 80, lastName: 80, email: 254, company: 160, companyWebsite: 300, companySize: 80, positions: 80, referral: 80, phone: 40, phoneCountry: 12, message: 3_000, pageUrl: 500, source: 64 } as const;
const SOURCE = 'contact-page-consultation';
const COMPANY_SIZES = new Set(['1 to 10', '11 to 50', '51 to 200', '201 to 500', '501+', 'Not applicable — privacy request']);
const POSITION_COUNTS = new Set(['1', '2 to 3', '4 to 10', '11+', 'Not sure yet', 'Not applicable — privacy request']);
const REFERRALS = new Set(['Search engine', 'Referral', 'Professional group', 'Social media', 'Stealth Agents', 'Other', 'Privacy request']);
const COUNTRY_CODES = new Set(['+1', '+44', '+61', '+63', 'other']);
const TRUSTED_FORM_ORIGINS = new Set(['https://homeloanprocessors.com', 'https://www.homeloanprocessors.com']);

export type LeadPayload = { requestType?: string; name: string; email: string; phone: string; business: string; message: string; companySize: string; positions: string; referral: string; pageUrl: string; userAgent?: string };
type ParsedLead = { ok: true; lead: LeadPayload; forwardPayload: Record<string, string> };
type InvalidLead = { ok: false; message: string };

export function trustedFormOrigin(request: Request, environment = process.env.NODE_ENV): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  try {
    const normalized = new URL(origin).origin;
    if (TRUSTED_FORM_ORIGINS.has(normalized)) return true;
    return environment === 'development' && normalized === new URL(request.url).origin;
  } catch { return false; }
}

function text(form: FormData, name: string, limit: number): string | null {
  const entry = form.get(name);
  if (entry === null) return '';
  if (typeof entry !== 'string') return null;
  const value = entry.trim();
  return value.length <= limit ? value : null;
}

export function parseLeadForm(form: FormData): ParsedLead | InvalidLead {
  const source = text(form, 'source', LIMITS.source);
  const requestType = text(form, 'request_type', LIMITS.requestType);
  const firstName = text(form, 'first_name', LIMITS.firstName);
  const lastName = text(form, 'last_name', LIMITS.lastName);
  const email = text(form, 'email', LIMITS.email)?.toLowerCase() ?? null;
  const company = text(form, 'company', LIMITS.company);
  const companyWebsite = text(form, 'company_website', LIMITS.companyWebsite);
  const companySize = text(form, 'company_size', LIMITS.companySize);
  const positions = text(form, 'positions_to_fill', LIMITS.positions);
  const referral = text(form, 'referral_source', LIMITS.referral);
  const phoneCountry = text(form, 'phone_country', LIMITS.phoneCountry);
  const phone = text(form, 'phone', LIMITS.phone);
  const message = text(form, 'message', LIMITS.message);
  const pageUrl = text(form, '_page_url', LIMITS.pageUrl);
  const values = [source, requestType, firstName, lastName, email, company, companyWebsite, companySize, positions, referral, phoneCountry, phone, message, pageUrl];
  if (values.some((value) => value === null)) return { ok: false, message: 'One or more fields are too long.' };
  if (source !== SOURCE) return { ok: false, message: 'This form could not be verified.' };
  if (requestType !== 'consultation' && requestType !== 'privacy') return { ok: false, message: 'Please choose a request type.' };
  const privacyRequest = requestType === 'privacy';
  if (!firstName || !lastName || !email || !/^\S+@\S+\.\S+$/.test(email) || (privacyRequest && !message) || (!privacyRequest && (!company || !companySize || !positions || !referral))) return { ok: false, message: 'Please complete every required field.' };
  if ((companySize && !COMPANY_SIZES.has(companySize)) || (positions && !POSITION_COUNTS.has(positions)) || (referral && !REFERRALS.has(referral))) return { ok: false, message: 'Please choose a listed option.' };
  if (phoneCountry && !COUNTRY_CODES.has(phoneCountry)) return { ok: false, message: 'Please choose a listed country code.' };
  for (const [value, label] of [[companyWebsite, 'company website'], [pageUrl, 'source page']] as const) {
    if (!value) continue;
    try {
      const url = new URL(value);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('protocol');
    } catch { return { ok: false, message: `Please enter a valid ${label}.` }; }
  }
  const forwardPayload: Record<string, string> = { source, request_type: requestType, first_name: firstName, last_name: lastName, email };
  if (company) forwardPayload.company = company;
  if (companySize) forwardPayload.company_size = companySize;
  if (positions) forwardPayload.positions_to_fill = positions;
  if (referral) forwardPayload.referral_source = referral;
  if (companyWebsite) forwardPayload.company_website = companyWebsite;
  if (phoneCountry) forwardPayload.phone_country = phoneCountry;
  if (phone) forwardPayload.phone = phone;
  if (message) forwardPayload.message = message;
  if (pageUrl) forwardPayload._page_url = pageUrl;
  return { ok: true, forwardPayload, lead: { requestType, name: `${firstName} ${lastName}`, email, phone: [phoneCountry, phone].filter(Boolean).join(' '), business: company || 'Not provided', message: message || '', companySize: companySize || 'Not provided', positions: positions || 'Not provided', referral: referral || 'Not provided', pageUrl: pageUrl || '' } };
}

export async function readLimitedBody(request: Request): Promise<Uint8Array> {
  const declared = Number(request.headers.get('content-length') || 0);
  if (Number.isFinite(declared) && declared > MAX_REQUEST_BYTES) throw new Error('Request body is too large.');
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_REQUEST_BYTES) { await reader.cancel(); throw new Error('Request body is too large.'); }
    chunks.push(value);
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  return body;
}
