import { CTABanner } from '@/components/CTABanner';
import { GalleryGrid } from '@/components/GalleryGrid';
import { buildMetadata } from '@/lib/seo';
import { gallery } from '@/lib/gallery';

export const metadata = buildMetadata({
  title: 'Railing Project Gallery — 5,000+ Custom Installs',
  description:
    'Browse real photos from custom railing projects across the Lower Mainland — glass, wood, and metal installations in homes and commercial spaces.',
  path: '/gallery',
  keywords: ['railing gallery', 'custom railing examples Surrey', 'glass railings photos BC']
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-subtle-red section">
        <div className="container-wide">
          <span className="eyebrow">Gallery</span>
          <h1 className="heading-xl text-brand-ink mt-3">5,000+ projects. A selection of our work.</h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            Glass, wood, and metal — residential decks, staircases, balconies, and commercial installs.
            Every project here was custom-designed, hand-built, and installed by our team.
          </p>
          <p className="mt-2 text-sm text-gray-500">{gallery.length} project photos shown below.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          {/* All 56 real photos */}
          <GalleryGrid />
        </div>
      </section>

      <CTABanner
        title="Like what you see? Let’s build yours next."
        subtitle="Free quote within 24 hours. Site visits booked within the week."
      />
    </>
  );
}
