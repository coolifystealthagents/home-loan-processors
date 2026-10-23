'use client';

import { useEffect, useMemo, useState } from 'react';
import { headingId } from './headingId';
import styles from '@/app/blog/editorial.module.css';

export type TocItem = {
  label: string;
  id?: string;
};

export function ArticleToc({ items }: { items: TocItem[] }) {
  const resolvedItems = useMemo(
    () => items.map((item) => ({ ...item, id: item.id ?? headingId(item.label) })),
    [items],
  );
  const [activeId, setActiveId] = useState(resolvedItems[0]?.id ?? '');

  useEffect(() => {
    const headings = resolvedItems
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));

    if (!headings.length) return;

    const updateActiveHeading = () => {
      const headerOffset = 132;
      const current = [...headings]
        .reverse()
        .find((heading) => heading.getBoundingClientRect().top <= headerOffset);
      setActiveId((current ?? headings[0]).id);
    };

    updateActiveHeading();
    window.addEventListener('scroll', updateActiveHeading, { passive: true });
    window.addEventListener('resize', updateActiveHeading);
    return () => {
      window.removeEventListener('scroll', updateActiveHeading);
      window.removeEventListener('resize', updateActiveHeading);
    };
  }, [resolvedItems]);

  return (
    <nav className={styles.toc} aria-label="On this page">
      <p className={styles.railLabel}>On this page</p>
      <ol>
        {resolvedItems.map((item) => (
          <li key={item.id} className={activeId === item.id ? styles.activeTocItem : undefined}>
            <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>{item.label}</a>
          </li>
        ))}
      </ol>
      <a className={styles.backToTop} href="#article-top">Back to top</a>
    </nav>
  );
}
