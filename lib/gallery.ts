// Auto-mapped gallery from /public/images/gallery/project-NN.jpg
// All 56 photos are real project work — kept intentionally generic-labelled.

export type GalleryItem = {
  src: string;
  alt: string;
  span?: 'tall' | 'wide';
};

const TOTAL = 56;

// A small repeating set of generic descriptors so each photo has a unique,
// SEO-friendly alt tag without claiming a specific city/style for each shot.
const generics = [
  'Custom railing project by All Kinds Railings',
  'Hand-built railing installation in BC',
  'Wood, glass, and metal railing craftsmanship',
  'Lower Mainland custom railing project',
  'Sarb Sian custom railing build',
  'All Kinds Railings completed install',
  'Custom deck railing project',
  'Custom staircase railing project'
];

// Visually varied layout — every 5th tile is "tall", every 7th is "wide".
// Keeps the masonry feeling balanced without manual tagging.
function spanFor(i: number): GalleryItem['span'] | undefined {
  if (i % 11 === 4) return 'wide';
  if (i % 7 === 2) return 'tall';
  return undefined;
}

export const gallery: GalleryItem[] = Array.from({ length: TOTAL }, (_, idx) => {
  const i = idx + 1;
  const num = String(i).padStart(2, '0');
  return {
    src: `/images/gallery/project-${num}.jpg`,
    alt: `${generics[idx % generics.length]} #${num}`,
    span: spanFor(i)
  };
});

/** Returns a deterministic but shuffled subset — useful for per-page variety. */
export function getGallerySubset(count: number, seed = 0): GalleryItem[] {
  if (count >= gallery.length) return gallery;
  const offset = seed % gallery.length;
  const out: GalleryItem[] = [];
  for (let i = 0; i < count; i++) {
    out.push(gallery[(offset + i * 3) % gallery.length]);
  }
  return out;
}
