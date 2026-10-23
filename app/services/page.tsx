import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';
import '@/components/marketing/marketing.css';

export const metadata: Metadata = {
  title: 'Mortgage operations support services',
  description: 'Compare six specialist remote support roles for mortgage documents, file indexing, pipeline records, borrower follow up, condition tracking, and closing preparation.',
  alternates: { canonical: '/services' },
  openGraph: { title: 'Mortgage operations support services', description: 'Compare six specialist remote support roles for mortgage operations teams.', url: '/services', images: [{ url: '/hero.png', alt: 'Mortgage operations support services from Home Loan Processors' }] },
  twitter: { card: 'summary_large_image', title: 'Mortgage operations support services', description: 'Compare six specialist remote support roles for mortgage operations teams.', images: ['/hero.png'] },
};

const startingPoints = [
  {
    signal: 'Borrowers need repeated document reminders',
    start: 'Borrower document support',
    href: '/services/borrower-document-support',
    reason: 'Build a visible request, receipt, version, and exception record before adding a broader communication scope.',
  },
  {
    signal: 'Reviewers cannot quickly find the current file',
    start: 'Loan file indexing',
    href: '/services/loan-file-indexing',
    reason: 'Stabilize naming, source notes, version history, and evidence location so reviewers can work from the same record.',
  },
  {
    signal: 'Status is rebuilt from inboxes and meetings',
    start: 'Pipeline record support',
    href: '/services/pipeline-records',
    reason: 'Define the system of record, approved fields, milestone rules, and next owner before expanding into follow up.',
  },
  {
    signal: 'Conditions or closing milestones are hard to reconcile',
    start: 'Condition or closing support',
    href: '/services/condition-tracking-support',
    reason: 'Separate administrative status from professional judgment and route every conflict to the accountable team.',
  },
];

const serviceFaqs = [
  ['Which service should we start with?', 'Start with the recurring queue that has the clearest source, output, reviewer, and escalation path. A narrow queue is easier to document, train, inspect, and improve.'],
  ['Can one role support more than one workflow?', 'Yes, after the first workflow is stable. Adjacent work should be added only when permissions, completion evidence, review ownership, and decision boundaries remain clear.'],
  ['What information is needed for a useful consultation?', 'Bring the name of the queue, its current owner, the approved systems involved, the expected output, and examples of exceptions that require licensed or management attention. Do not send borrower financial documents through the contact form.'],
  ['What decisions remain with our mortgage team?', 'Your authorized team retains supervision, borrower privacy and security obligations, underwriting, credit, eligibility, pricing, disclosures, compliance interpretation, approvals, and every other licensed or regulated decision.'],
];

export default function ServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFaqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return <main className="mortgage-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
    <header className="mortgage-page-hero">
      <div className="mortgage-page-hero-copy">
        <p className="mortgage-folio">Six specialist role briefs</p>
        <h1>Specialist support for the work around the loan.</h1>
        <p className="mortgage-deck">Choose the operational queue that needs a clearer owner. Every role brief defines useful responsibilities, required inputs, expected outputs, quality controls, decision boundaries, and a controlled launch path.</p>
        <div className="mortgage-page-actions"><Link id="cta-services-hero-consultation" className="mortgage-button" href="/contact-us">Discuss the right starting role <ArrowIcon /></Link></div>
      </div>
      <figure className="mortgage-route-visual"><Image src="/visual/services" alt="Mortgage operations workflow from source queue through prepared record to accountable review" width={1200} height={675} priority unoptimized /></figure>
    </header>

    <section className="mortgage-index-intro" aria-labelledby="service-index-title">
      <p className="mortgage-folio">Choose by bottleneck</p>
      <div><h2 id="service-index-title">Do not delegate a department. Stabilize one handoff.</h2><p>Begin where repeatable preparation is consuming licensed or borrower-facing time. The most useful first scope has a known source, a concrete output, an available reviewer, and an unambiguous route for exceptions.</p></div>
    </section>

    <section className="mortgage-index-grid" aria-label="Mortgage support roles">
      {site.services.map((service) => <article className="mortgage-index-card" key={service.slug}>
        <p className="mortgage-kicker">Mortgage operations role</p>
        <h2>{service.name}</h2>
        <p>{service.short}</p>
        <dl>
          <div><dt>Useful when</dt><dd>{service.idealFor[0]}</dd></div>
          <div><dt>Designed outcome</dt><dd>{service.outcome}</dd></div>
        </dl>
        <Link className="mortgage-text-link" href={`/services/${service.slug}`}>Read the complete role brief <ArrowIcon /></Link>
      </article>)}
    </section>

    <section className="mortgage-service-guide" aria-labelledby="starting-point-title">
      <header><p className="mortgage-folio">Decision guide</p><h2 id="starting-point-title">Match the first role to the evidence gap.</h2><p>Choose the service that makes the current handoff easier to see and review. The role can expand after your team has a dependable operating record.</p></header>
      <div className="mortgage-guide-rows">
        {startingPoints.map((item) => <article key={item.signal}>
          <div><p className="mortgage-kicker">When this is happening</p><h3>{item.signal}</h3></div>
          <div><p className="mortgage-kicker">Consider starting with</p><h3><Link href={item.href}>{item.start}</Link></h3><p>{item.reason}</p></div>
        </article>)}
      </div>
    </section>

    <section className="mortgage-engagement-map" aria-labelledby="engagement-title">
      <div><p className="mortgage-folio">From queue to role</p><h2 id="engagement-title">What a controlled launch needs.</h2></div>
      <dl>
        <div><dt>Source</dt><dd>Name where the work enters and which system is authoritative when records disagree.</dd></div>
        <div><dt>Completion</dt><dd>Define the record, checklist, communication, or packet that proves the administrative task is complete.</dd></div>
        <div><dt>Review</dt><dd>Assign a client owner who can inspect samples, answer questions, and return incomplete work.</dd></div>
        <div><dt>Escalation</dt><dd>List the conflicts, sensitive messages, decisions, and unusual events that must leave the assistant queue.</dd></div>
        <div><dt>Access</dt><dd>Provide only the approved systems and permissions required for the defined scope.</dd></div>
      </dl>
    </section>

    <section className="mortgage-scope-note" aria-labelledby="scope-note-title">
      <div><p className="mortgage-folio">Scope before staffing</p><h2 id="scope-note-title">The assistant adds capacity. The client keeps authority.</h2></div>
      <div><p>These roles support administrative preparation, records, approved communication, and coordination. They do not make underwriting, credit, eligibility, pricing, disclosure, or approval decisions, and they do not provide legal, tax, financial, or lending advice.</p><p>Your organization remains responsible for access, supervision, policies, compliance, required licenses, and every accountable decision. We use the first workflow discussion to make that division visible.</p><Link id="cta-services-scope-consultation" className="mortgage-button" href="/contact-us">Map your first workflow <ArrowIcon /></Link></div>
    </section>

    <section className="mortgage-service-faq" aria-labelledby="service-faq-title">
      <div><p className="mortgage-folio">Service questions</p><h2 id="service-faq-title">Plan the first conversation.</h2></div>
      <div>{serviceFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="mortgage-index-cta" aria-labelledby="services-final-title">
      <p className="mortgage-folio">A practical next step</p>
      <h2 id="services-final-title">Bring one queue that needs a clearer owner.</h2>
      <p>We will help identify the permitted work, required inputs, review evidence, decision boundary, and escalation path for a focused support role.</p>
      <Link id="cta-services-final-consultation" className="mortgage-button" href="/contact-us">Start a workflow consultation <ArrowIcon /></Link>
    </section>
  </main>;
}
