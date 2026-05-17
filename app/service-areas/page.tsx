import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { cities } from '@/lib/cities';
import { buildMetadata } from '@/lib/seo';
import { CTABanner } from '@/components/CTABanner';

export const metadata = buildMetadata({
  title: 'Service Areas — Custom Railings Across the Lower Mainland',
  description:
    'All Kinds Railings serves Surrey, Langley, Coquitlam, Burnaby, Aldergrove, Abbotsford, Maple Ridge, Delta, White Rock, Richmond, and beyond — custom wood, glass and metal railings.',
  path: '/service-areas',
  keywords: ['railing contractor Lower Mainland', 'custom railings BC', 'Surrey Langley Coquitlam railings']
});

export default function ServiceAreasIndex() {
  return (
    <>
      <section className="section bg-subtle-red">
        <div className="container-wide">
          <span className="eyebrow">Service areas</span>
          <h1 className="heading-xl text-brand-ink mt-3 max-w-3xl">
            Custom railings across the entire Lower Mainland.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            We service every major city from Surrey to Vancouver, plus select projects in Kelowna and
            Washington State. Tap your city for project examples, popular styles, and a free quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map(c => (
            <Link
              key={c.slug}
              href={`/service-areas/${c.slug}`}
              className="card-classy p-6 hover:border-brand-red flex flex-col"
            >
              <div className="flex items-center gap-2 text-brand-red">
                <MapPin className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">{c.region}</span>
              </div>
              <h2 className="font-display text-xl text-brand-ink mt-2">{c.name}, {c.province}</h2>
              <p className="mt-3 text-sm text-gray-600 line-clamp-3 flex-1">{c.intro}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">{c.driveTime}</span>
                <span className="inline-flex items-center gap-1 text-brand-red font-semibold">
                  Quote {c.name} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
