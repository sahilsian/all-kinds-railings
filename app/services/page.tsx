import { CTABanner } from '@/components/CTABanner';
import { ServicesGrid } from '@/components/ServicesGrid';
import { buildMetadata } from '@/lib/seo';
import { services } from '@/lib/services';

export const metadata = buildMetadata({
  title: 'Custom Railing Services — Wood, Glass & Metal',
  description:
    'Custom railing services from All Kinds Railings — frameless glass, hand-built wood spindles, powder-coated metal, floating glass structures, and commercial work.',
  path: '/services',
  keywords: ['glass railings', 'wood railings', 'metal railings', 'floating glass railings', 'staircase railings BC']
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-subtle-red section">
        <div className="container-wide">
          <span className="eyebrow">Services</span>
          <h1 className="heading-xl text-brand-ink mt-3 max-w-3xl">
            Custom railings — built for your space, by hand.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            Every project at All Kinds Railings is custom-designed and custom-built.
            Below are the services and styles we’re most often asked to deliver.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <ServicesGrid />
        </div>
      </section>

      <section className="section bg-brand-cream">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">In-depth</span>
            <h2 className="heading-lg text-brand-ink mt-3">Specifications & highlights</h2>
            <div className="accent-rule mt-5" />
            <p className="mt-5 text-gray-700">
              Each service below details the materials, build methods, and ideal use cases we’ve perfected over 30+ years.
            </p>
          </div>
          <div className="space-y-8">
            {services.map(s => (
              <div key={s.slug} id={s.slug} className="card-classy p-6">
                <h3 className="font-display text-xl text-brand-ink">{s.name}</h3>
                <p className="mt-2 text-gray-700">{s.blurb}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-y-1.5 text-sm text-gray-700">
                  {s.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm"><strong className="text-brand-ink">Best for:</strong> <span className="text-gray-600">{s.bestFor}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
