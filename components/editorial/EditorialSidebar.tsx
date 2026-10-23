import Link from 'next/link';
import { ArticleToc, type TocItem } from '@/components/editorial/ArticleToc';
import styles from '@/app/blog/editorial.module.css';

type RelatedItem = {
  href: string;
  label: string;
  kicker?: string;
};

type EditorialSidebarProps = {
  tocItems: TocItem[];
  related: RelatedItem[];
  relatedLabel: string;
  ctaTitle: string;
  ctaBody: string;
  ctaId: string;
  publisher: string;
  publishedAt: string;
  readingTime?: string;
};

export function EditorialSidebar({
  tocItems,
  related,
  relatedLabel,
  ctaTitle,
  ctaBody,
  ctaId,
  publisher,
  publishedAt,
  readingTime,
}: EditorialSidebarProps) {
  return (
    <aside className={styles.sidebar} aria-label="Article navigation and supporting resources">
      <ArticleToc items={tocItems} />
      <div className={styles.articleMeta}>
        <p className={styles.railLabel}>Article details</p>
        <dl>
          <div><dt>Publisher</dt><dd>{publisher}</dd></div>
          <div><dt>Published</dt><dd><time dateTime={publishedAt}>{publishedAt}</time></dd></div>
          {readingTime && <div><dt>Reading time</dt><dd>{readingTime}</dd></div>}
        </dl>
      </div>
      <div className={styles.sidebarSection}>
        <p className={styles.railLabel}>{relatedLabel}</p>
        <ul className={styles.relatedList}>
          {related.map((item) => (
            <li key={item.href}>
              {item.kicker && <span>{item.kicker}</span>}
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.proofBlock}>
        <p className={styles.railLabel}>Review lens</p>
        <p>Source remains visible</p>
        <p>Handoff has an owner</p>
        <p>Decisions stay accountable</p>
      </div>
      <div className={styles.sidebarCta}>
        <p className={styles.railLabel}>Working session</p>
        <h2>{ctaTitle}</h2>
        <p>{ctaBody}</p>
        <Link id={ctaId} className={styles.button} href="/contact-us">
          Request a consultation
        </Link>
      </div>
    </aside>
  );
}
