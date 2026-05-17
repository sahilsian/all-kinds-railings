import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/siteConfig';
import { services } from '@/lib/services';
import { cities } from '@/lib/cities';

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Custom wood, glass and metal railings handcrafted in Surrey, BC since 1993. Family-owned by Sarb Sian and team.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="p-2 rounded-md bg-white/5 hover:bg-brand-red transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="p-2 rounded-md bg-white/5 hover:bg-brand-red transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {services.map(s => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-brand-red-soft">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm text-white/70 grid grid-cols-2 gap-x-4">
            {cities.map(c => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="hover:text-brand-red-soft">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand-red-soft" />
              <a href={siteConfig.phoneHref} className="hover:text-brand-red-soft">{siteConfig.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand-red-soft" />
              <a href={siteConfig.emailHref} className="hover:text-brand-red-soft">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-red-soft" />
              <span>{siteConfig.address.street}</span>
            </li>
          </ul>
          <Link href="/quote" className="btn-primary mt-6 w-full justify-center">
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
          <span>Mon–Fri {siteConfig.hours.monFri} · Sat {siteConfig.hours.sat}</span>
        </div>
      </div>
    </footer>
  );
}
