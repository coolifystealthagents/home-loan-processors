import { headingId } from './headingId';
import styles from '@/app/blog/editorial.module.css';

type TocItem = {
  label: string;
  id?: string;
};

export function ArticleToc({ items }: { items: TocItem[] }) {
  return (
    <nav className={styles.toc} aria-label="On this page">
      <p className={styles.railLabel}>On this page</p>
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <a href={`#${item.id ?? headingId(item.label)}`}>{item.label}</a>
          </li>
        ))}
      </ol>
      <a className={styles.backToTop} href="#article-top">Back to top</a>
    </nav>
  );
}
