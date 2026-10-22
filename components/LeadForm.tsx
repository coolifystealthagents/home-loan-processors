'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SOURCE = 'contact-page-consultation';

export function LeadForm() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [requestType, setRequestType] = useState<'consultation' | 'privacy'>('consultation');
  const privacyRequest = requestType === 'privacy';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setError('');
    const data = new FormData(event.currentTarget);
    data.set('_page_url', window.location.href);
    try {
      const response = await fetch('/api/submit-lead', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.ok) { setError(result.message || 'Please check your details and try again.'); setBusy(false); return; }
      const payload = Object.fromEntries(data.entries()); delete payload.website_url;
      window.acrTracker?.trackLead({ ...payload, source: SOURCE });
      router.push('/thank-you');
    } catch { setError('We could not send your request. Please try again.'); setBusy(false); }
  }

  return <form className="lead-form" onSubmit={submit}>
    <label className="form-wide">Request type <span aria-hidden="true">*</span><select name="request_type" value={requestType} onChange={(event) => setRequestType(event.target.value as 'consultation' | 'privacy')} required><option value="consultation">Mortgage workflow consultation</option><option value="privacy">Privacy request</option></select></label>
    {privacyRequest && <p className="form-help form-wide">For access, correction, or deletion requests, only your name, email address, and a description of the request are required.</p>}
    <label>First Name <span aria-hidden="true">*</span><input name="first_name" autoComplete="given-name" maxLength={80} required /></label>
    <label>Last Name <span aria-hidden="true">*</span><input name="last_name" autoComplete="family-name" maxLength={80} required /></label>
    <label className="form-wide">Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
    <p className="form-help form-wide">Work or personal email addresses are welcome.</p>
    <label>Country code<select name="phone_country" defaultValue="+1" aria-label="Phone country code"><option value="+1">US/CA +1</option><option value="+44">UK +44</option><option value="+61">AU +61</option><option value="+63">PH +63</option><option value="other">Other</option></select></label>
    <label>Phone Number<input name="phone" type="tel" autoComplete="tel-national" inputMode="tel" maxLength={40} /></label>
    {!privacyRequest && <>
      <label className="form-wide">Company Name <span aria-hidden="true">*</span><input name="company" autoComplete="organization" maxLength={160} required={!privacyRequest} /></label>
      <label className="form-wide">Website / URL<input name="company_website" type="url" autoComplete="url" placeholder="https://" maxLength={300} /></label>
      <label className="form-wide">Company Size <span aria-hidden="true">*</span><select name="company_size" defaultValue="" required={!privacyRequest}><option value="" disabled>Select company size</option><option>1 to 10</option><option>11 to 50</option><option>51 to 200</option><option>201 to 500</option><option>501+</option></select></label>
      <label className="form-wide">How Many Positions to Fill <span aria-hidden="true">*</span><select name="positions_to_fill" defaultValue="" required={!privacyRequest}><option value="" disabled>Select positions</option><option>1</option><option>2 to 3</option><option>4 to 10</option><option>11+</option><option>Not sure yet</option></select></label>
      <label className="form-wide">How Did You Hear About Us? <span aria-hidden="true">*</span><select name="referral_source" defaultValue="" required={!privacyRequest}><option value="" disabled>Select a source</option><option>Search engine</option><option>Referral</option><option>Professional group</option><option>Social media</option><option>Stealth Agents</option><option>Other</option></select></label>
    </>}
    <label className="form-wide">{privacyRequest ? 'Describe your privacy request' : 'Message'}<textarea name="message" rows={5} maxLength={3000} required={privacyRequest} placeholder={privacyRequest ? 'Tell us whether you are requesting access, correction, or deletion, and identify the inquiry involved.' : 'Describe the mortgage workflow, current owner, and support you need.'} /></label>
    <input type="hidden" name="source" value={SOURCE} />
    <label className="honeypot" aria-hidden="true">Website<input name="website_url" tabIndex={-1} autoComplete="off" /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button primary form-wide" type="submit" disabled={busy}>{busy ? 'Sending request' : 'Continue to scheduling'}</button>
  </form>;
}
