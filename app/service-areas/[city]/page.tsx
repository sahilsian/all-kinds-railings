import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Hammer } from 'lucide-react';
import { cities, getCityBySlug, getCitySlugs } from '@/lib/cities';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { QuoteForm } from '@/components/QuoteForm';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Testimonials } from '@/components/Testimonials';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CTABanner } from '@/components/CTABanner';

type Params = { city: string };

export function generateStaticParams(): Params[] {
  return getCitySlugs().map(city => ({ city }));
}

export function generateMetadata({ params }: { params: Params }) {
  const c = getCityBySlug(params.city);
  if (!c) return buildMetadata({ title: 'Service Area' });
  return buildMetadata({
    title: `Custom Railings in ${c.name}, ${c.province}`,
    description: c.metaDescription,
    path: `/service-areas/${c.slug}`,
    keywords: c.keywords
  });
}

export default function CityPage({ params }: { params: Params }) {
  const c = getCityBySlug(params.city);
  if (!c) return notFound();

  // Other cities to cross-link for internal SEO juice
  const otherCities = cities.filter(o => o.slug !== c.slug).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-ink relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 0% 0%, #B0182B 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, #6B4226 0%, transparent 55%)'
          }}
        />
        <div className="relative container-wide py-16 md:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 text-brand-red-soft text-xs uppercase tracking-wider">
              <MapPin className="h-4 w-4" /> {c.region}
            </div>
            <h1 className="heading-xl mt-3">
              Custom Railings in <span className="text-brand-red-soft">{c.name}</span>, {c.province}.
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">{c.intro}</p>
            <p className="mt-4 text-sm text-white/60">{c.driveTime}</p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-primary btn-lg">
                Get a Free {c.name} Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={siteConfig.phoneHref} className="btn-secondary btn-lg bg-white/5 text-white border-white hover:bg-white hover:text-brand-red">
                <Phone className="h-5 w-5" /> Call now
              </a>
            </div>
          </div>

          <div className="lg:pl-4">
            <QuoteForm variant="embedded" />
          </div>
        </div>
      </section>

      {/* Why us in this city */}
      <section className="section">
        <div className="container-wide grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <span className="eyebrow">Why {c.name} chooses us</span>
            <h2 className="heading-lg text-brand-ink mt-3">
              Local craftsmanship from the Lower Mainland’s most trusted railing team.
            </h2>
            <div className="accent-rule mt-5" />
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                All Kinds Railings has been building custom wood, glass, and metal railings for {c.name} homeowners,
                builders, and developers for over 30 years. Founded by Sarb Sian in 1993 and headquartered in nearby Surrey,
                we know the city, the neighbourhoods, and the styles that work here.
              </p>
              <p>
                <strong className="text-brand-ink">Most popular style in {c.name}:</strong>{' '}
                {c.popularStyle}
              </p>
              <p>
                Whether it’s a custom home in {c.neighbourhoods[0]} or a renovation in {c.neighbourhoods[1]},
                we design, fabricate, and install every railing on-site for a perfect, code-compliant fit.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {c.neighbourhoods.map(n => (
                <div key={n} className="card p-3 text-center text-sm text-brand-ink font-medium">
                  {n}
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="card-classy p-6 bg-brand-cream">
              <div className="flex items-center gap-3 mb-3">
                <Hammer className="h-5 w-5 text-brand-red" />
                <span className="font-display text-lg text-brand-ink">Popular {c.name} services</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                {services.slice(0, 4).map(s => (
                  <li key={s.slug}>
                    · <Link href={`/services#${s.slug}`} className="text-brand-red hover:underline">{s.name}</Link>
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="btn-primary w-full mt-6 justify-center">
                Quote My {c.name} Project
              </Link>
            </div>

            <div className="card p-5">
              <h3 className="font-semibold text-brand-ink mb-2">Service area details</h3>
              <dl className="text-sm space-y-2">
                <div className="flex justify-between"><dt className="text-gray-500">City</dt><dd>{c.name}, {c.province}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Region</dt><dd>{c.region}</dd></div>
                <div className="flex justify-between"><dt className="text-gray-500">Drive time</dt><dd className="text-right">{c.driveTime}</dd></div>
                {c.population && <div className="flex justify-between"><dt className="text-gray-500">Population</dt><dd>{c.population}</dd></div>}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-subtle-red">
        <div className="container-wide">
          <h2 className="heading-md text-brand-ink mb-6">Recent work near {c.name}</h2>
          <GalleryGrid limit={8} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-wide">
          <h2 className="heading-md text-brand-ink mb-8">Trusted by {c.name} homeowners & builders</h2>
          <Testimonials />
        </div>
      </section>

      {/* Cross-link other cities */}
      <section className="section bg-brand-cream">
        <div className="container-wide">
          <h2 className="heading-md text-brand-ink mb-6">Also serving nearby cities</h2>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {otherCities.map(o => (
              <Link key={o.slug} href={`/service-areas/${o.slug}`} className="card p-4 text-center hover:border-brand-red">
                <span className="font-medium text-brand-ink">{o.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="heading-md text-brand-ink mb-6">Frequently asked — {c.name}</h2>
          <FaqAccordion />
        </div>
      </section>

      <CTABanner
        title={`Ready to build something beautiful in ${c.name}?`}
        subtitle="Free quote within 24 hours. Site visits booked the same week."
      />
    </>
  );
}
