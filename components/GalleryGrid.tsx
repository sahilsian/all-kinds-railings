import Image from 'next/image';

type Item = {
  src: string;
  alt: string;
  span?: 'tall' | 'wide';
};

/**
 * Renders a gallery of railing project images.
 * Until you upload real images to /public/images/gallery/, this falls back
 * to elegant red/brown gradient tiles labelled with the alt text.
 *
 * USAGE (after uploading photos):
 *   <GalleryGrid items={[
 *     { src: '/images/gallery/glass-deck-01.jpg', alt: 'Frameless glass deck — South Surrey' },
 *     ...
 *   ]} />
 */
export function GalleryGrid({ items, limit }: { items?: Item[]; limit?: number }) {
  const placeholders: Item[] = [
    { src: '', alt: 'Frameless glass deck — South Surrey', span: 'tall' },
    { src: '', alt: 'Wood spindle staircase — Langley custom home' },
    { src: '', alt: 'Black metal balcony — Coquitlam' },
    { src: '', alt: 'Floating glass railing — White Rock', span: 'wide' },
    { src: '', alt: 'Cedar deck rail — Maple Ridge' },
    { src: '', alt: 'Cable rail rooftop — Burnaby' },
    { src: '', alt: 'Wrought iron staircase — Abbotsford' },
    { src: '', alt: 'Glass + cedar deck — Tsawwassen', span: 'tall' }
  ];
  const data = (items ?? placeholders).slice(0, limit ?? 8);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
      {data.map((item, i) => {
        const spanClass =
          item.span === 'tall'
            ? 'row-span-2'
            : item.span === 'wide'
            ? 'col-span-2'
            : '';
        return (
          <div
            key={i}
            className={`relative overflow-hidden rounded-lg group bg-gradient-to-br from-brand-brown-soft via-brand-red-soft to-brand-brown-light ${spanClass}`}
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width:1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-end p-3">
                <span className="text-xs font-medium text-brand-ink/70">{item.alt}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        );
      })}
    </div>
  );
}
