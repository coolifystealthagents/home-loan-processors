'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from './Icons';
import { site } from '@/lib/site';

const parentLogo = '/brand/stealth-agents-logo-black.png';

function isCurrent(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const nav = mobileNavRef.current;
    const focusable = nav?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();

    function containMobileFocus(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', containMobileFocus);
    return () => document.removeEventListener('keydown', containMobileFocus);
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="utility-strip">
        <span>Specialist support for mortgage operations</span>
        <a className="powered-by" href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">
          <Image src={parentLogo} alt="Stealth Agents" width={104} height={28} />
          <span>Powered by StealthAgents</span>
        </a>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <Image src="/logo.svg" alt="" width={42} height={42} priority />
          <span>{site.name}</span>
        </Link>
        <button
          ref={mobileToggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true" className="nav-toggle-lines"><i /><i /><i /></span>
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
        </button>
        <nav ref={mobileNavRef} id="primary-navigation" className={mobileOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          <Link className={isCurrent(pathname, '/') ? 'is-current' : undefined} aria-current={isCurrent(pathname, '/') ? 'page' : undefined} href="/">Home</Link>
          <Link className={isCurrent(pathname, '/services') ? 'is-current' : undefined} aria-current={isCurrent(pathname, '/services') ? 'page' : undefined} href="/services">Services</Link>
          <Link id="cta-global-header-contact" className={`button primary nav-cta${isCurrent(pathname, '/contact-us') ? ' is-current' : ''}`} aria-current={isCurrent(pathname, '/contact-us') ? 'page' : undefined} href="/contact-us">Contact Us <ArrowIcon /></Link>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
          <p>Specialist remote staff for {site.audience}.</p>
          <a className="parent-mark" href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">
            <Image src={parentLogo} alt="Stealth Agents" width={132} height={36} />
            <span>Powered by StealthAgents</span>
          </a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <div><strong>Explore</strong><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/contact-us">Contact Us</Link></div>
          <div><strong>Company</strong><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link></div>
          <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </nav>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {site.name}. Mortgage decisions remain with licensed and authorized professionals.</p>
    </footer>
  );
}
