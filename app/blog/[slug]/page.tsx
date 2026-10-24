import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleToc } from '@/components/editorial/ArticleToc';
import { EditorialSidebar } from '@/components/editorial/EditorialSidebar';
import { headingId } from '@/components/editorial/headingId';
import { blogPosts, blogBySlug } from '@/lib/content';
import { site } from '@/lib/site';
import styles from '../editorial.module.css';
import TocSync from '@/components/TocSync';

const origin = `https://${site.domain}`;
const formatPublishedDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  const coverImage = post.thumbnail ?? `/visual/blog-${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: `${site.name} Editorial Team` }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [{ url: coverImage, alt: `Workflow illustration for “${post.title}”` }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();
  const coverImage = post.thumbnail ?? `/visual/blog-${post.slug}`;

  const sameCategory = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category);
  const related = (sameCategory.length > 0
    ? sameCategory
    : blogPosts.filter((item) => item.slug !== post.slug)
  ).slice(0, 3);
  const faqHeading = 'Common questions answered';
  const ctaHeading = 'Turn the workflow into a clear role brief';
  const tocItems = [
    ...post.sections.map((section) => ({ label: section.heading })),
    ...(post.faq.length ? [{ label: faqHeading }] : []),
    { label: ctaHeading },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    mainEntityOfPage: `${origin}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name },
    image: `${origin}${coverImage}`,
  };
  const faqSchema = post.faq.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <main className={styles.page} id="article-top"><TocSync />
      <div className={styles.progress} aria-hidden="true" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />}

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}><Link href="/blog">Field notes</Link> / {post.category}</p>
          <h1>{post.title}</h1>
          <p className={styles.deck}>{post.description}</p>
          <p className={styles.byline}>
            <span>By {site.name} Editorial Team</span>
            <span>Published <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time></span>
            <span>{post.readTime}</span>
          </p>
        </div>
      </header>

      <div className={styles.articleShell}>
        <ArticleToc items={tocItems} />

        <article className={styles.article}>
          <Image
            className={styles.cover}
            src={coverImage}
            alt={`Workflow illustration for “${post.title}”`}
            width={1200}
            height={630}
            priority
            unoptimized
          />
          {post.sections.map((section, index) => (
            <section className={styles.articleSection} key={section.heading} id={headingId(section.heading)}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 1 && (
                <p className={styles.contextNote}>
                  To translate this boundary into a scoped position, review our <Link className={styles.inlineLink} href={post.internalService}>specialist service responsibilities and workflow examples</Link>.
                </p>
              )}
              {index === Math.min(3, post.sections.length - 1) && (
                <p className={styles.contextNote}>
                  Source check: <a className={styles.inlineLink} href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides the public guidance used to test the assumptions in this workflow.
                </p>
              )}
              {index === Math.min(5, post.sections.length - 1) && (
                <p className={styles.contextNote}>
                  Continue with <Link className={styles.inlineLink} href={post.internalSibling}>our related guide to the next mortgage workflow</Link> and compare its handoff points with this one.
                </p>
              )}
            </section>
          ))}

          {post.faq.length > 0 && (
            <section className={styles.articleSection} id={headingId(faqHeading)}>
              <h2>{faqHeading}</h2>
              {post.faq.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </section>
          )}

          <section className={styles.finalCta} id={headingId(ctaHeading)}>
            <p className={styles.railLabel}>From field note to operating brief</p>
            <h2>{ctaHeading}</h2>
            <p>Bring the recurring work that consumes the most attention. We will help define its scope, evidence, handoff, and review points.</p>
            <Link id="cta-blog-final-bookcall" className={styles.button} href="/contact-us">Request a consultation</Link>
          </section>
        </article>

        <EditorialSidebar
          relatedLabel="Continue reading"
          related={related.map((item) => ({ href: `/blog/${item.slug}`, label: item.title, kicker: item.category }))}
          ctaTitle="Make one recurring workflow reviewable."
          ctaBody="Start with the queue, source material, expected output, and accountable reviewer."
          ctaId="cta-blog-sidebar-schedulecall"
        />
      </div>
    </main>
  );
}
