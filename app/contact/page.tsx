import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact All Kinds Railings — Surrey BC',
  description:
    'Contact All Kinds Railings for custom wood, glass, and metal railing projects in Surrey and across the Lower Mainland. Free quotes in 24 hours.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <span className="eyebrow">Contact us</span>
        <h1 className="heading-xl text-brand-ink mt-3 max-w-2xl">
          Let’s talk about your project.
        </h1>
        <p className="mt-5 text-lg text-gray-700 max-w-2xl">
          The fastest path to a custom quote is our online form — but you’re welcome to call or email if you’d rather speak directly.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <ContactCard icon={<Phone className="h-5 w-5" />} label="Call us" value={siteConfig.phone} href={siteConfig.phoneHref} cta="Tap to call" />
          <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value={siteConfig.email} href={siteConfig.emailHref} cta="Open email" />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="Based in" value={siteConfig.address.street} cta="Lower Mainland service area" />
          <ContactCard
            icon={<Clock className="h-5 w-5" />}
            label="Hours"
            value={`Mon–Fri ${siteConfig.hours.monFri}`}
            cta={`Sat ${siteConfig.hours.sat} · Sun ${siteConfig.hours.sun}`}
          />
        </div>

        <div className="mt-10 card-classy p-8 bg-brand-cream flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-brand-ink">Prefer the online form?</h2>
            <p className="text-sm text-gray-700 mt-1">It’s 5 quick steps and you’ll hear back within 24 hours.</p>
          </div>
          <Link href="/quote" className="btn-primary btn-lg">Start Quote</Link>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon, label, value, cta, href
}: { icon: React.ReactNode; label: string; value: string; cta: string; href?: string }) {
  const inner = (
    <>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red text-white">{icon}</span>
      <div className="ml-3">
        <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
        <div className="font-medium text-brand-ink">{value}</div>
        <div className="text-xs text-brand-red mt-0.5">{cta}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="card-classy p-5 flex items-center hover:border-brand-red">{inner}</a>
  ) : (
    <div className="card-classy p-5 flex items-center">{inner}</div>
  );
}
