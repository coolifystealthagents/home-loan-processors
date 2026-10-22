import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Privacy policy', alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return <main>
    <header className="page-hero"><p className="eyebrow">Privacy</p><h1>Privacy policy</h1><p>Last updated October 19, 2026</p></header>
    <section className="content-wrap"><div className="prose">
      <h2>Information we collect</h2>
      <p>When you use our contact form, we collect the information you provide: first and last name, email address, phone number and country code, company name, company website, company size, hiring quantity, referral source, message, and the page URL where you submitted the form.</p>
      <p>We may also receive limited technical information needed to operate and protect the site, including your IP address, user agent, browser and device information, and basic site usage and performance events.</p>

      <h2>How we use information</h2>
      <p>We use submitted information to respond to your request, coordinate a consultation, understand the workflow you want to staff, prevent abuse, maintain service reliability, and improve the site.</p>

      <h2>Service providers and disclosures</h2>
      <p>We use service providers to operate this site and respond to requests. ACR receives lead and site-event information for attribution and request handling. Mattermost may receive a lead notification when used as a delivery fallback. OnceHub receives information you choose to provide when scheduling after a successful form submission. Our hosting and infrastructure providers process technical data required to deliver and secure the site.</p>
      <p>We do not state that these providers are part of your mortgage transaction. Please do not submit borrower documents, Social Security numbers, bank information, or other sensitive loan-file data through this website form.</p>

      <h2>Retention and choices</h2>
      <p>We retain information only as long as reasonably necessary for the purposes described above, legal obligations, security, and dispute resolution. Retention periods can vary by system and the nature of the request.</p>
      <p>You may request access, correction, or deletion of information associated with your inquiry, subject to applicable law and legitimate retention needs. Use the <Link href="/contact-us">contact form</Link>, choose “Privacy request” as the request type, and describe your request. Company and staffing information is not required for a privacy request.</p>

      <h2>Contact</h2>
      <p>A verified public email address is not currently configured. Please use the <Link href="/contact-us">contact form</Link> for privacy questions and requests.</p>
    </div></section>
  </main>;
}
