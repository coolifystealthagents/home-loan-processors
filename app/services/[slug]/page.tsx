import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import '@/components/marketing/marketing.css';

export function generateStaticParams() {
  return site.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [{ url: `/visual/service-${service.slug}`, alt: `${service.name} workflow from client inputs to accountable review` }] },
  } : {};
}

const sectionLinks = [
  ['fit', 'Ideal use cases'],
  ['responsibilities', 'Responsibilities'],
  ['inputs-outputs', 'Inputs and outputs'],
  ['quality', 'Quality controls'],
  ['boundaries', 'Decision boundaries'],
  ['launch', 'Launch workflow'],
  ['faq', 'Questions'],
  ['related', 'Related roles'],
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const relatedRoles = service.relatedRoles
    .map((relatedSlug) => serviceBySlug(relatedSlug))
    .filter((role): role is NonNullable<typeof role> => Boolean(role));
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return <main className="mortgage-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <header className="mortgage-service-hero">
      <div className="mortgage-service-hero-inner">
        <div className="mortgage-service-hero-copy">
          <p className="mortgage-folio">Mortgage operations service brief</p>
          <h1>{service.name}</h1>
          <p className="mortgage-deck">{service.short}</p>
          <p className="mortgage-outcome-slip"><strong>Designed outcome:</strong> {service.outcome}</p>
          <div className="mortgage-page-actions"><Link id={`cta-services-${service.slug}-hero`} className="mortgage-button" href="/contact-us">Discuss this role <ArrowIcon /></Link><Link className="mortgage-button mortgage-button-secondary" href="/services">Compare all roles <ArrowIcon /></Link></div>
        </div>
        <figure className="mortgage-route-visual"><Image src={`/visual/service-${service.slug}`} alt={`${service.name} workflow from client inputs through supported preparation to a review-ready output`} width={1200} height={675} priority unoptimized /></figure>
      </div>
    </header>

    <div className="mortgage-service-layout">
      <nav className="mortgage-service-nav" aria-label="On this role brief">{sectionLinks.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
      <div className="mortgage-service-body">
        <section id="fit" className="mortgage-service-section">
          <p className="mortgage-folio">Ideal use cases</p><h2>Where this role fits.</h2>
          <p>This role is designed for a defined operational queue, not unrestricted access to every file or function. It may be useful for:</p>
          <ul className="mortgage-list-grid">{service.idealFor.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section id="responsibilities" className="mortgage-service-section">
          <p className="mortgage-folio">Responsibilities</p><h2>Work the assistant can support.</h2>
          <p>Final permissions depend on your policies, systems, jurisdiction, and supervision model. A practical scope may include:</p>
          <ul className="mortgage-list-grid">{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>

        <section id="inputs-outputs" className="mortgage-service-section">
          <p className="mortgage-folio">Handoff contract</p><h2>Inputs and outputs.</h2>
          <p>The role becomes reviewable when the assistant knows what arrives, where it came from, and what complete work should leave behind.</p>
          <div className="mortgage-input-output">
            <div><h3>Your team provides</h3><ul>{service.clientInputs.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>The workflow produces</h3><ul>{service.outputs.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>

        <section id="quality" className="mortgage-service-section">
          <p className="mortgage-folio">Quality controls</p><h2>Review evidence, not activity alone.</h2>
          <p>Your client owner sets acceptance criteria and reviews an appropriate sample. These controls provide a starting frame:</p>
          <div className="mortgage-quality-grid">{service.qualityControls.map((control) => <article key={control}><h3>{control}</h3><p>Record the result, return incomplete work, and update the operating guidance when a pattern repeats.</p></article>)}</div>
        </section>

        <section id="boundaries" className="mortgage-service-section">
          <p className="mortgage-folio">Decision boundaries</p><h2>What remains with your team.</h2>
          <p>The boundary is part of the role specification, not fine print. Client leadership remains responsible for supervision, access, policy, compliance, and licensed decisions.</p>
          <ul className="mortgage-boundary-list">{service.boundaries.map((boundary) => <li key={boundary}>{boundary}</li>)}</ul>
        </section>

        <section id="launch" className="mortgage-service-section">
          <p className="mortgage-folio">Launch workflow</p><h2>Start narrow. Learn from the queue.</h2>
          <ol className="mortgage-launch-list">{service.launchSteps.map((step) => <li key={step.title}><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}</ol>
        </section>

        <section id="faq" className="mortgage-service-section mortgage-faq">
          <p className="mortgage-folio">Frequently asked questions</p><h2>Questions before launch.</h2>
          {service.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
        </section>

        <section id="related" className="mortgage-service-section">
          <p className="mortgage-folio">Continue the role map</p><h2>Related roles and field notes.</h2>
          <div className="mortgage-related">
            <div><h3>Adjacent support roles</h3><ul className="mortgage-related-links">{relatedRoles.map((role) => <li key={role.slug}><Link href={`/services/${role.slug}`}>{role.name}</Link></li>)}</ul></div>
            <div><h3>Related content</h3><ul className="mortgage-related-links">{service.relatedContent.map((item) => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul></div>
          </div>
        </section>

        <section className="mortgage-service-cta" aria-labelledby="service-cta-title">
          <p className="mortgage-folio">Build the first scope</p><h2 id="service-cta-title">Bring the queue. We will help frame the handoff.</h2><p>A first conversation can identify the source, output, accountable reviewer, decision boundary, and exceptions that matter for this role.</p><Link id={`cta-services-${service.slug}-consultation`} className="mortgage-button" href="/contact-us">Plan a workflow consultation <ArrowIcon /></Link>
        </section>
      </div>
    </div>
  </main>;
}
