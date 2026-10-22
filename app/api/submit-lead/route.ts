import { NextResponse } from 'next/server';
import { parseLeadForm, readLimitedBody, trustedFormOrigin } from '../../../lib/lead-contract';
import { deliverLead } from '../../../lib/lead-delivery';
import { createRateLimiter, trustedClientKey } from '../../../lib/rate-limit';

const WINDOW_MS = 10 * 60 * 1_000;
const LIMIT = 8;
const limiter = createRateLimiter({ limit: LIMIT, windowMs: WINDOW_MS, maxKeys: 10_000 });

export async function POST(request: Request) {
  if (!trustedFormOrigin(request)) return NextResponse.json({ ok: false, message: 'Request origin is not allowed.' }, { status: 403 });
  if (!limiter.allow(trustedClientKey(request.headers))) return NextResponse.json({ ok: false, message: 'Please wait before trying again.' }, { status: 429 });
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('multipart/form-data') && !contentType.includes('application/x-www-form-urlencoded')) return NextResponse.json({ ok: false, message: 'Unsupported request format.' }, { status: 415 });
  let body: Uint8Array;
  try { body = await readLimitedBody(request); }
  catch { return NextResponse.json({ ok: false, message: 'The request is too large.' }, { status: 413 }); }
  let form: FormData;
  try {
    form = await new Response(body.buffer as ArrayBuffer, { headers: { 'content-type': contentType } }).formData();
  } catch { return NextResponse.json({ ok: false, message: 'The form could not be read.' }, { status: 400 }); }
  if (form.get('website_url')) return NextResponse.json({ ok: true });
  const parsed = parseLeadForm(form);
  if (!parsed.ok) return NextResponse.json(parsed, { status: 400 });
  const lead = { ...parsed.lead, userAgent: request.headers.get('user-agent') || '' };
  const delivered = await deliverLead(lead, { primaryPayload: parsed.forwardPayload });
  if (!delivered) return NextResponse.json({ ok: false, message: 'We could not send your request. Please try again.' }, { status: 503 });
  return NextResponse.json({ ok: true });
}
