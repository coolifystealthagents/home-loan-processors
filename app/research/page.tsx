import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`)
  );

const readMinutes = (post: (typeof researchPosts)[number]) => {
  const words = (post.sections ?? []).reduce(
    (sum, section) => sum + section.paragraphs.reduce((n, paragraph) => n + paragraph.split(/\s+/).length, 0),
    0
  );
  return `${Math.max(6, Math.ceil(words / 220))} min read`;
};

export const metadata: Metadata = {
  title: 'Research',
  description: 'Source-led operational research for leaders designing specialist support roles.',
  alternates: { canonical: '/research' },
};

export default function ResearchPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="eyebrow">Research library</p>
        <h1>Evidence for better operating decisions.</h1>
        <p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p>
      </header>
      <section className="content-wrap content-grid">
        {researchPosts.map((post) => (
          <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>
            {post.thumbnail && (
              <img className="card-thumbnail" src={post.thumbnail} alt="" width={1200} height={630} loading="lazy" />
            )}
            <span className="pill">{post.cluster}</span>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <p className="card-meta">
              <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
              <span aria-hidden="true"> · </span>
              <span>{readMinutes(post)}</span>
            </p>
            <span className="text-link">Review the brief</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
