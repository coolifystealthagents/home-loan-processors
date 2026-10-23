'use client';

import { useEffect, useRef, useState } from 'react';
import { headingId } from './headingId';
import styles from '@/app/blog/editorial.module.css';

type TocItem = {
  label: string;
  id?: string;
};

export function ArticleToc({ items }: { items: TocItem[] }) {
  const resolved = items.map((item) => ({ ...item, id: item.id ?? headingId(item.label) }));
  const idKey = resolved.map((item) => item.id).join('|');
  const [active, setActive] = useState(resolved[0]?.id ?? '');
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const headings = resolved
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = 150;
      let current = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top - offset <= 0) current = heading.id;
        else break;
      }
      setActive((previous) => (previous === current ? previous : current));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [idKey]);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLAnchorElement>('[aria-current="location"]');
    if (activeLink && navRef.current) {
      const linkTop = activeLink.offsetTop;
      const linkBottom = linkTop + activeLink.offsetHeight;
      if (linkTop < navRef.current.scrollTop || linkBottom > navRef.current.scrollTop + navRef.current.clientHeight) {
        navRef.current.scrollTo({ top: Math.max(0, linkTop - 24), behavior: 'smooth' });
      }
    }
  }, [active]);

  const list = (
    <ol>
      {resolved.map((item, index) => (
        <li key={`${item.id}-${index}`}>
          <a
            href={`#${item.id}`}
            aria-current={active === item.id ? 'location' : undefined}
            className={active === item.id ? styles.tocActive : undefined}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <nav className={styles.toc} aria-label="Table of contents" ref={navRef}>
        <p className={styles.railLabel}>Table of contents</p>
        {list}
        <a className={styles.backToTop} href="#article-top">Back to top</a>
      </nav>
      <details className={styles.mobileToc}>
        <summary>Contents <span>{resolved.length} sections</span></summary>
        <nav aria-label="Table of contents mobile">{list}</nav>
      </details>
    </>
  );
}
