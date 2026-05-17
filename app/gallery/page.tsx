import { CTABanner } from '@/components/CTABanner';
import { GalleryGrid } from '@/components/GalleryGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Railing Project Gallery — 5,000+ Custom Installs',
  description:
    'Browse a selection from over 5,000 completed custom railing projects across the Lower Mainland — glass, wood, and metal in homes and commercial spaces.',
  path: '/gallery',
  keywords: ['railing gallery', 'custom railing examples Surrey', 'glass railings photos BC']
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-subtle-red section">
        <div className="container-wide">
          <span className="eyebrow">Gallery</span>
          <h1 className="heading-xl text-brand-ink mt-3">5,000+ projects. A selection of our favorites.</h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            From floating glass decks in White Rock to hand-built wood staircases in Langley acreages —
            every project here was custom-designed, hand-built, and installed by our team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <CategoryNote
            title="Glass Railings"
            note="Frameless, semi-frameless, and floating glass — view-preserving installations across the Lower Mainland."
          />
          <GalleryGrid limit={8} />

          <div className="mt-16">
            <CategoryNote
              title="Wood Railings & Spindles"
              note="Cedar, fir, oak, and mahogany — hand-finished to match the architecture of each home."
            />
            <GalleryGrid limit={8} />
          </div>

          <div className="mt-16">
            <CategoryNote
              title="Metal & Custom"
              note="Powder-coated aluminum, wrought iron, cable rail, and custom mixed-material designs."
            />
            <GalleryGrid limit={8} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Like what you see? Let’s build yours next."
        subtitle="Free quote within 24 hours. Site visits booked within the week."
      />
    </>
  );
}

function CategoryNote({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-6 max-w-2xl">
      <h2 className="heading-md text-brand-ink">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{note}</p>
    </div>
  );
}
