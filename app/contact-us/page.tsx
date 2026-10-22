import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/lib/site';
import stealthAgentsReviews from '@/lib/stealthAgentsReviews.json';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Mortgage Operations Staffing Consultation',
  description: 'Talk with Home Loan Processors about remote administrative support for borrower documents, loan file indexing, pipeline records, and closing preparation.',
  alternates: { canonical: '/contact-us' },
};

const steps = [
  ['Workflow discovery', 'Map the recurring mortgage operations work, current owner, systems, and escalation points.'],
  ['Role design', 'Define a focused support role with clear inputs, outputs, access, and review boundaries.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit the approved workflow and communication needs.'],
  ['Controlled launch', 'Start with documented tasks, measured handoffs, and accountable oversight from your team.'],
];

const faqs = [
  ['What can a mortgage assistant support?', 'A remote assistant can help coordinate document requests, maintain approved pipeline records, send approved follow ups, prepare status summaries, and organize closing milestones.'],
  ['Can an assistant make lending or underwriting decisions?', 'No. Loan qualification, underwriting, disclosures, pricing, compliance interpretation, approvals, and other regulated decisions stay with authorized mortgage professionals.'],
  ['Can we begin with one recurring workflow?', 'Yes. A narrow first workflow makes ownership, access, review, and escalation easier to test before the role expands.'],
  ['How do you approach borrower information?', 'The consultation covers least privilege access, approved systems, documented handling rules, and escalation paths. Your organization remains responsible for its privacy, security, retention, and regulatory obligations.'],
];

function ReviewCards({ duplicate = false }: { duplicate?: boolean }) {
  return stealthAgentsReviews.map((review) => (
    <article className="review-card" key={`${duplicate ? 'duplicate-' : ''}${review.evidenceId}`} aria-hidden={duplicate || undefined}>
      <div className="review-stars" aria-label="5 out of 5 stars">{'★'.repeat(5)}</div>
      <blockquote>“{review.quote}”</blockquote>
      <p><strong>{review.name}</strong><span>{review.role}</span></p>
    </article>
  ));
}

function ReviewMarquee() {
  return (
    <section className="review-panel" aria-labelledby="reviews-heading">
      <div className="review-heading">
        <p id="reviews-heading">StealthAgents reviews</p>
        <a href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">Source: StealthAgents</a>
      </div>
      <div className="review-marquee" tabIndex={0} aria-label="StealthAgents client reviews. Animation pauses while focused.">
        <div className="review-track"><ReviewCards /><ReviewCards duplicate /></div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `https://${site.domain}/contact-us`,
    description: 'Mortgage operations staffing consultation.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `https://${site.domain}/contact-us` },
      ],
    },
  };

  return <main className="contact-page">
    <section className="contact-first-fold">
      <div className="contact-container first-fold-grid">
        <div className="contact-intro">
          <p className="eyebrow">Mortgage operations consultation</p>
          <h1>Turn a pressured workflow into a clear support role.</h1>
          <p className="contact-lede">Tell us where recurring coordination pulls your licensed team away from borrower relationships and accountable decisions. We will help shape a focused support role with clear boundaries.</p>
          <ul className="reassurance-list" aria-label="Consultation reassurance">
            <li>No borrower financial details needed</li>
            <li>Clear role and access boundaries</li>
            <li>Scheduling follows submission</li>
          </ul>
        </div>
        <div id="consultation-form" className="contact-form-card">
          <h2>Start Your Consultation</h2>
          <p>Share enough context for a useful conversation.</p>
          <LeadForm />
        </div>
        <ReviewMarquee />
      </div>
    </section>

    <section className="contact-section parent-team">
      <div className="contact-container parent-team-grid">
        <div className="team-image">
          <Image src="/brand/stealth-agents-team.webp" alt="Stealth Agents managed service team in Bacolod" fill sizes="(max-width: 900px) 100vw, 52vw" />
          <span>Official team, Bacolod</span>
        </div>
        <div className="team-copy">
          <div className="official-logo-plate"><Image src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={240} height={66} /></div>
          <p className="eyebrow">Managed service support</p>
          <h2>Mortgage workflow focus, backed by a real team.</h2>
          <p>Stealth Agents helps businesses build remote support roles around documented workflows, selective candidate matching, and accountable handoffs. This managed service approach creates durable administrative capacity while your licensed professionals retain oversight and every lending decision.</p>
          <p>We use the consultation to understand the workflow, define the role, and identify where review and escalation must remain clear.</p>
          <Link className="button primary" href="#consultation-form">Send your staffing brief</Link>
        </div>
      </div>
    </section>

    <section className="contact-section"><div className="contact-container"><p className="eyebrow">A controlled path forward</p><h2>After you reach out</h2><div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="contact-section prep"><div className="contact-container"><p className="eyebrow">Make the conversation specific</p><h2>Prepare for a useful call</h2><div className="prep-grid"><article><h3>Recurring work</h3><p>Identify the tasks that recur across intake, document collection, pipeline updates, and closing coordination.</p></article><article><h3>Current ownership</h3><p>Note who completes, reviews, approves, and escalates each part of the workflow today.</p></article><article><h3>Systems and access</h3><p>List the approved systems involved and the minimum access a support role would need.</p></article><article><h3>Service standard</h3><p>Define what timely, accurate, documented completion looks like for your team and borrowers.</p></article></div></div></section>

    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Responsibility and boundaries</h2><p>Remote assistants can prepare, coordinate, update approved records, send approved communications, and flag exceptions. They do not originate or approve loans, make credit or underwriting decisions, set rates or terms, interpret regulations, give legal or financial advice, approve disclosures, move funds, verify wire changes, or replace licensed and authorized personnel.</p><p>Your mortgage business retains responsibility for supervision, borrower privacy, information security, fair lending, required disclosures, record retention, vendor management, and every regulated decision. Sensitive borrower data should only be handled inside approved systems with least privilege access and documented review.</p></div></section>

    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Explore focused roles</p><h2>Common starting points</h2><div className="path-grid"><Link href="/services/borrower-document-support"><h3>Borrower document support</h3><p>Keep approved document requests and response status organized.</p></Link><Link href="/services/borrower-follow-up"><h3>Borrower follow up</h3><p>Keep approved reminders, response status, and question routing clear.</p></Link><Link href="/services/pipeline-records"><h3>Pipeline record support</h3><p>Maintain approved fields, ownership, and pipeline visibility.</p></Link><Link href="/services/closing-preparation"><h3>Closing preparation support</h3><p>Track milestones, checklists, reminders, and schedule exceptions.</p></Link></div><Link className="text-link all-services" href="/services">View the full services collection</Link></div></section>

    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Mortgage staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
