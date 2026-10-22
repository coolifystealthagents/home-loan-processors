import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import { site } from '@/lib/site';
import '@/components/marketing/marketing.css';

export const metadata: Metadata = {
  title: 'About our mortgage operations support',
  description: `How ${site.name} designs responsible remote support for mortgage brokers, lenders, and loan teams.`,
  alternates: { canonical: '/about' },
  openGraph: { images: [{ url: '/visual/about', alt: 'Responsible mortgage role design workflow with visible authority boundaries' }] },
};

const values = [
  ['The source stays visible', 'A useful record shows where information came from, when it was received, and what still needs review.'],
  ['Escalation is part of the work', 'An assistant should pause and route an exception rather than fill a gap with an assumption.'],
  ['The client owns the decision', 'Licensed, regulated, compliance, credit, and management decisions remain with accountable client personnel.'],
];

const workflow = [
  ['Queue', 'Name where recurring work enters and which system owns the record.'],
  ['Standard', 'Define inputs, permitted actions, completion evidence, and approved language.'],
  ['Review', 'Give a named client owner a practical sample and exception review rhythm.'],
  ['Improve', 'Use recurring errors and exceptions to strengthen the process before scope expands.'],
];

export default function AboutPage() {
  return <main className="mortgage-page">
    <header className="mortgage-page-hero">
      <div className="mortgage-page-hero-copy">
        <p className="mortgage-folio">Our operating position</p>
        <h1>Capacity should make mortgage work easier to govern.</h1>
        <p className="mortgage-deck">We help mortgage brokers, lenders, and loan teams shape specialist remote support around the real file: its records, communication, handoffs, exceptions, and accountable decisions.</p>
        <div className="mortgage-page-actions">
          <Link id="cta-about-hero-consultation" className="mortgage-button" href="/contact-us">Discuss your workflow <ArrowIcon /></Link>
          <Link className="mortgage-button mortgage-button-secondary" href="/services">Review specialist roles <ArrowIcon /></Link>
        </div>
      </div>
      <figure className="mortgage-route-visual"><Image src="/visual/about" alt="Responsible role design workflow from documented work through authority boundaries and evidence review" width={1200} height={675} priority unoptimized /></figure>
    </header>

    <section className="mortgage-about-story" aria-labelledby="about-story-title">
      <div><p className="mortgage-folio">Why we exist</p><p className="mortgage-margin-note">Delegation works when the next person can see both the task and its boundary.</p></div>
      <div className="mortgage-story-copy">
        <h2 id="about-story-title">We design roles from the workflow outward.</h2>
        <p>Mortgage operations are full of necessary work that surrounds, but should never replace, professional judgment. Documents arrive through different channels. Dates change. Borrowers ask questions. Referral partners need updates. The next decision becomes slower when that context is fragmented.</p>
        <p>Our approach begins with one recurring queue and the evidence your team needs to act. We define what a remote assistant may prepare, record, and coordinate, then identify where the work must return to a licensed or accountable owner. That creates a role a capable person can perform and a manager can inspect.</p>
        <div className="mortgage-values">{values.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="mortgage-about-expertise" aria-labelledby="expertise-title">
      <header><p className="mortgage-folio">Mortgage-specific role design</p><h2 id="expertise-title">Context is not a substitute for control. It makes control usable.</h2><p className="mortgage-deck">We look for the practical details a generic task list misses: system ownership, borrower privacy, communication permissions, source evidence, milestone authority, and the point where administrative support becomes regulated judgment.</p></header>
      <div className="mortgage-workflow-map">{workflow.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="mortgage-about-expectations" aria-labelledby="company-relationship-title">
      <div><p className="mortgage-folio">Our company relationship</p><h2 id="company-relationship-title">Mortgage focus, backed by Stealth Agents.</h2></div>
      <div><p>{site.name} is a Stealth Agents company focused on mortgage operations support. That relationship connects a mortgage-specific role-design approach with Stealth Agents&apos; broader remote staffing experience.</p><p>The same accountability boundary applies: we help define and staff administrative workflows, while your organization retains supervision, system access decisions, privacy and compliance obligations, and every licensed or regulated decision.</p><a className="mortgage-text-link" href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">Learn about Stealth Agents <ArrowIcon /></a></div>
    </section>

    <section id="expectations" className="mortgage-about-expectations" aria-labelledby="expectations-title">
      <div><p className="mortgage-folio">Working expectations</p><h2 id="expectations-title">A shared operating responsibility.</h2></div>
      <div>
        <ul className="mortgage-expectation-list">
          <li><strong>We help frame</strong><span>A focused role, explicit workflow, useful outputs, and observable quality checks.</span></li>
          <li><strong>You provide</strong><span>Approved access, policies, source systems, communication rules, training materials, and an available review owner.</span></li>
          <li><strong>The assistant supports</strong><span>Administrative preparation, factual recordkeeping, approved follow-through, and prompt escalation.</span></li>
          <li><strong>Your team retains</strong><span>Supervision, data governance, compliance, licensing obligations, advice, approvals, and all credit or eligibility decisions.</span></li>
        </ul>
        <div className="mortgage-page-actions"><Link id="cta-about-expectations-consultation" className="mortgage-button" href="/contact-us">Map a responsible first scope <ArrowIcon /></Link></div>
      </div>
    </section>
  </main>;
}
