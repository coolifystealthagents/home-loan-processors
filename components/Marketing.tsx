import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, CheckIcon } from './Icons';
import './marketing/marketing.css';

const CTA = ({ id, children, secondary = false }: { id: string; children: React.ReactNode; secondary?: boolean }) => (
  <Link id={id} className={`mortgage-button${secondary ? ' mortgage-button-secondary' : ''}`} href={secondary ? '/services' : '/contact-us'}>
    {children} <ArrowIcon />
  </Link>
);

const outcomes = [
  ['A queue people can read', 'Open items, source notes, and next owners live in the agreed system rather than scattered inboxes.'],
  ['More consistent handoffs', 'Each recurring workflow has a defined input, completion standard, review point, and return path.'],
  ['Judgment stays in the right seat', 'Assistants prepare and coordinate. Your authorized team reviews, decides, approves, and advises.'],
];

const method = [
  ['Trace the work', 'We start with the real queue: where it enters, what evidence travels with it, who decides, and where it stalls.'],
  ['Frame the role', 'We separate repeatable support from licensed, regulated, compliance, and management responsibilities.'],
  ['Launch one workflow', 'Your assistant begins with a controlled scope, approved access, examples, and a named reviewer.'],
  ['Review and refine', 'You inspect outputs, capture exceptions, and improve the checklist before adding adjacent work.'],
];

function ServiceDesk() {
  return <div className="mortgage-service-grid">{site.services.map((service) => (
    <article className="mortgage-service-card" key={service.slug}>
      <p className="mortgage-kicker">Specialist support role</p>
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      <div className="mortgage-card-output"><span>Designed outcome</span>{service.outcome}</div>
      <Link className="mortgage-text-link" href={`/services/${service.slug}`}>Open the role brief <ArrowIcon /></Link>
    </article>
  ))}</div>;
}

function FieldNotes() {
  return <div className="mortgage-notes-grid">{blogPosts.slice(0, 3).map((post) => (
    <article key={post.slug}>
      <p className="mortgage-kicker">{post.category}</p>
      <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.description}</p>
      <Link className="mortgage-text-link" href={`/blog/${post.slug}`}>Read the field note <ArrowIcon /></Link>
    </article>
  ))}</div>;
}

export function HomePage() {
  return <main className="mortgage-home">
    <section className="mortgage-hero" aria-labelledby="home-title">
      <div className="mortgage-hero-copy">
        <p className="mortgage-folio">Mortgage operations / remote staffing</p>
        <h1 id="home-title">{site.hero} <em>{site.heroAccent}</em></h1>
        <p className="mortgage-hero-body">{site.heroBody}</p>
        <div className="mortgage-actions">
          <CTA id="cta-home-hero-consultation">Discuss your workflow</CTA>
          <CTA id="cta-home-hero-services" secondary>Review all six roles</CTA>
        </div>
        <dl className="mortgage-trust-register" aria-label="How the service is structured">
          <div><dt>Built for</dt><dd>Brokers, lenders, and loan teams</dd></div>
          <div><dt>Support layer</dt><dd>Preparation, records, follow-through</dd></div>
          <div><dt>Client authority</dt><dd>Credit judgment, approval, compliance</dd></div>
        </dl>
      </div>
      <figure className="mortgage-hero-art">
        <Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        <figcaption><span>Operations plate A</span>{site.manifesto}</figcaption>
      </figure>
    </section>

    <aside className="mortgage-proof-band" aria-label="Working principles">
      <p>Not a generic task desk.</p>
      {site.principles.map((principle) => <span key={principle}><CheckIcon />{principle}</span>)}
    </aside>

    <section className="mortgage-section mortgage-intro" aria-labelledby="intro-title">
      <div><p className="mortgage-folio">The assignment</p><p className="mortgage-margin-note">Capacity should make the file easier to understand, not harder to govern.</p></div>
      <div><h2 id="intro-title">The work around the loan deserves its own operating discipline.</h2><p className="mortgage-lead">A mortgage file moves through documents, questions, statuses, dates, and handoffs before an accountable professional can make the next decision. We help teams place structured remote support around that flow, with the source and decision boundary kept visible.</p></div>
    </section>

    <section className="mortgage-section mortgage-services" aria-labelledby="services-title">
      <header className="mortgage-section-heading"><p className="mortgage-folio">Role files</p><h2 id="services-title">Start with the queue that costs your team attention.</h2><p>Each role can stand alone or connect to an adjacent handoff. The scope is configured around your systems, policies, permissions, and review owner.</p></header>
      <ServiceDesk />
      <Link className="mortgage-text-link mortgage-all-link" href="/services">Compare service scopes <ArrowIcon /></Link>
    </section>

    <section className="mortgage-outcomes" aria-labelledby="outcomes-title">
      <header><p className="mortgage-folio">Operational result</p><h2 id="outcomes-title">Less reconstruction. Better review.</h2></header>
      <div>{outcomes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="mortgage-section mortgage-method" aria-labelledby="method-title">
      <header><p className="mortgage-folio">Four-part desk method</p><h2 id="method-title">A measured handoff, not a task dump.</h2><p>The launch is intentionally narrow. Reliable support grows from evidence and review, not assumptions about what can be delegated.</p></header>
      <ol>{method.map(([title, detail]) => <li key={title}><span aria-hidden="true" /><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol>
    </section>

    <section className="mortgage-boundary" aria-labelledby="boundary-title">
      <div className="mortgage-boundary-mark" aria-hidden="true">Scope<br />control</div>
      <div><p className="mortgage-folio">Responsible by design</p><h2 id="boundary-title">Support the process. Never blur the decision.</h2><p>Remote staff can organize records, prepare factual summaries, send approved routine communication, and surface exceptions. They do not make underwriting, credit, eligibility, pricing, disclosure, or approval decisions. They do not provide legal, tax, financial, or lending advice.</p><p>Client leadership remains responsible for permissions, supervision, policies, regulatory obligations, and every licensed or accountable decision.</p><Link className="mortgage-text-link" href="/about#expectations">Read our working expectations <ArrowIcon /></Link></div>
    </section>

    <section className="mortgage-section mortgage-field-notes" aria-labelledby="notes-title">
      <header className="mortgage-section-heading"><p className="mortgage-folio">From the file room</p><h2 id="notes-title">Practical notes for mortgage operators.</h2></header>
      <FieldNotes />
    </section>

    <section className="mortgage-closing" aria-labelledby="closing-title">
      <p className="mortgage-folio">Open a role file</p>
      <h2 id="closing-title">Bring us the workflow that keeps returning to your desk.</h2>
      <p>We will help you identify the queue, the boundary, and a useful first scope for specialist support.</p>
      <CTA id="cta-home-closing-consultation">Plan the first workflow</CTA>
    </section>
  </main>;
}
