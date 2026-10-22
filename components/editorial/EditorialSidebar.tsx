import Link from 'next/link';
import styles from '@/app/blog/editorial.module.css';

type RelatedItem = {
  href: string;
  label: string;
  kicker?: string;
};

type EditorialSidebarProps = {
  related: RelatedItem[];
  relatedLabel: string;
  ctaTitle: string;
  ctaBody: string;
  ctaId: string;
};

export function EditorialSidebar({
  related,
  relatedLabel,
  ctaTitle,
  ctaBody,
  ctaId,
}: EditorialSidebarProps) {
  return (
    <aside className={styles.sidebar} aria-label="Related resources">
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
        <p className={styles.railLabel}>Built for review</p>
        <p>Clear scope</p>
        <p>Visible handoffs</p>
        <p>Accountable decisions</p>
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
