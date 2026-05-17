'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/siteConfig';

const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-brand-ink text-white text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <span className="hidden sm:inline">
            Family-owned in Surrey since 1993 · 5,000+ projects across the Lower Mainland
          </span>
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-1.5 hover:text-brand-red-soft">
            <Phone className="h-3.5 w-3.5" /> {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav className="hidden md:flex items-center gap-7">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink hover:text-brand-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={siteConfig.phoneHref} className="btn-ghost text-sm">
            <Phone className="h-4 w-4" /> Call
          </a>
          <Link href="/quote" className="btn-primary text-sm">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2 text-brand-ink"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-wide py-4 flex flex-col gap-1">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-brand-ink hover:text-brand-red border-b border-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a href={siteConfig.phoneHref} className="btn-secondary w-full">
                <Phone className="h-4 w-4" /> Call {siteConfig.phone}
              </a>
              <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
