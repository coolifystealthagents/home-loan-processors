import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';
import '@/components/marketing/marketing.css';

export const metadata: Metadata = {
  title: 'Mortgage operations support services',
  description: 'Compare six specialist remote support roles for mortgage file, borrower, pipeline, closing, partner, and marketing workflows.',
  alternates: { canonical: '/services' },
  openGraph: { images: [{ url: '/visual/services', alt: 'Mortgage operations workflow from source queue through accountable review' }] },
};

export default function ServicesPage() {
  return <main className="mortgage-page">
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

    <section className="mortgage-scope-note" aria-labelledby="scope-note-title">
      <div><p className="mortgage-folio">Scope before staffing</p><h2 id="scope-note-title">The assistant adds capacity. The client keeps authority.</h2></div>
      <div><p>These roles support administrative preparation, records, approved communication, and coordination. They do not make underwriting, credit, eligibility, pricing, disclosure, or approval decisions, and they do not provide legal, tax, financial, or lending advice.</p><p>Your organization remains responsible for access, supervision, policies, compliance, required licenses, and every accountable decision. We use the first workflow discussion to make that division visible.</p><Link id="cta-services-scope-consultation" className="mortgage-button" href="/contact-us">Map your first workflow <ArrowIcon /></Link></div>
    </section>
  </main>;
}
