import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleToc } from '@/components/editorial/ArticleToc';
import { headingId } from '@/components/editorial/headingId';
import { ResearchSidebar } from '@/components/ResearchSidebar';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';
import styles from '@/app/blog/editorial.module.css';
import TocSync from '@/components/TocSync';

const origin = `https://${site.domain}`;
const formatPublishedDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

function serviceForCluster(cluster: string) {
  const normalized = cluster.toLowerCase();
  if (normalized.includes('borrower')) return { href: '/services/borrower-follow-up', label: 'borrower follow up support' };
  if (normalized.includes('closing')) return { href: '/services/closing-preparation', label: 'closing preparation support' };
  if (normalized.includes('pipeline') || normalized.includes('access')) return { href: '/services/pipeline-records', label: 'pipeline record support' };
  if (normalized.includes('role')) return { href: '/services', label: 'specialist mortgage support roles' };
  return { href: '/services/loan-file-indexing', label: 'loan file indexing support' };
}

export function generateStaticParams() {
  return researchPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const coverImage = post.thumbnail ?? `/visual/research-${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: `${site.name} Editorial Team` }],
    alternates: { canonical: `/research/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url: `/research/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [{ url: coverImage, alt: `Research workflow illustration for “${post.title}”` }],
    },
  };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  const coverImage = post.thumbnail ?? `/visual/research-${post.slug}`;

  const sameCluster = researchPosts.filter((item) => item.slug !== post.slug && item.cluster === post.cluster);
  const related = (sameCluster.length > 0
    ? sameCluster
    : researchPosts.filter((item) => item.slug !== post.slug)
  ).slice(0, 3);
  const service = serviceForCluster(post.cluster);
  const findingHeading = 'Protocol definition';
  const reviewHeading = 'Put the brief to work';
  const sourcesHeading = 'Sources and further reading';
  const ctaHeading = 'Review the workflow behind the evidence';
  const tocItems = [
    { label: findingHeading },
    ...(post.sections ?? []).map((section) => ({ label: section.heading })),
    { label: reviewHeading },
    { label: sourcesHeading },
    { label: ctaHeading },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    mainEntityOfPage: `${origin}/research/${post.slug}`,
    author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name },
    citation: post.sources.map((source) => source.url),
    image: `${origin}${coverImage}`,
  };

  return (
    <main className={styles.page} id="article-top"><TocSync />
      <div className={styles.progress} aria-hidden="true" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}><Link href="/research">Evidence desk</Link> / {post.cluster}</p>
          <h1>{post.title}</h1>
          <p className={styles.deck}>{post.summary}</p>
          <p className={styles.byline}>
            <span>By {site.name} Editorial Team</span>
            <span>Published <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time></span>
          </p>
        </div>
      </header>

      <div className={styles.articleShell}>
        <ArticleToc items={tocItems} />

        <article className={styles.article}>
          <Image
            className={styles.cover}
            src={coverImage}
            alt={`Research workflow illustration for “${post.title}”`}
            width={1200}
            height={630}
            priority
            unoptimized
          />

          <section className={styles.articleSection} id={headingId(findingHeading)}>
            <h2>{findingHeading}</h2>
            <p className={styles.finding}>{post.finding}</p>
          </section>

          {(post.sections ?? []).map((section) => (
            <section className={styles.articleSection} key={section.heading} id={headingId(section.heading)}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}

          <section className={styles.articleSection} id={headingId(reviewHeading)}>
            <h2>{reviewHeading}</h2>
            <p>Use the protocol definition as a review prompt, not as a substitute for measured results, policy, or accountable judgment. Compare the cited source material with your current record, decision owner, and escalation path.</p>
            <p className={styles.contextNote}>
              For implementation context, review the scope and handoffs in <Link className={styles.inlineLink} href={service.href}>{service.label}</Link>.
            </p>
            {related[0] && (
              <p className={styles.contextNote}>
                Compare this evidence with <Link className={styles.inlineLink} href={`/research/${related[0].slug}`}>{related[0].title}</Link> to test a related workflow boundary.
              </p>
            )}
          </section>

          <section className={styles.articleSection} id={headingId(sourcesHeading)}>
            <h2>{sourcesHeading}</h2>
            <p>These are the public sources associated with this brief. Open each source to review its scope and current guidance directly.</p>
            <ol className={styles.sourceList}>
              {post.sources.map((source) => (
                <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>
              ))}
            </ol>
          </section>

          <section className={styles.finalCta} id={headingId(ctaHeading)}>
            <p className={styles.railLabel}>Evidence into operations</p>
            <h2>{ctaHeading}</h2>
            <p>Bring one recurring mortgage workflow and its current handoff. We will help identify the preparation, review, and escalation boundaries.</p>
            <Link id="cta-research-final-bookcall" className={styles.button} href="/contact-us">Discuss the workflow</Link>
          </section>
        </article>

        <ResearchSidebar posts={related} />
      </div>
    </main>
  );
}
