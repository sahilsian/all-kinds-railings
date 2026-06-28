export type Service = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  highlights: string[];
  bestFor: string;
  image: string; // /public/images/services/<file>
};

export const services: Service[] = [
  {
    slug: 'glass-railings',
    name: 'Custom Glass Railings',
    shortName: 'Glass',
    blurb:
      'Frameless and semi-frameless tempered glass railings that preserve every inch of your view. Marine-grade hardware, code-compliant installs, and a finish that reads luxury.',
    highlights: [
      'Frameless, semi-frameless, and floating glass systems',
      'Tempered safety glass to BC building code',
      'Stainless or matte-black hardware',
      'Ideal for ocean and mountain view decks'
    ],
    bestFor: 'Modern homes, view decks, rooftop patios, commercial entries.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80'
  },
  {
    slug: 'wood-railings',
    name: 'Custom Wood Railings & Spindles',
    shortName: 'Wood',
    blurb:
      'Hand-built wood railings and elegant spindles matched to the architecture of your home. Stains, paints, and species selected for the long haul in BC weather.',
    highlights: [
      'Custom wood spindles, posts, and newels',
      'Cedar, fir, oak, mahogany — your choice of species',
      'Hand-sanded, stained, and sealed on-site',
      'Heritage and classic-home matching'
    ],
    bestFor: 'Custom homes, character renovations, interior staircases, covered decks.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80'
  },
  {
    slug: 'metal-railings',
    name: 'Custom Metal Railings',
    shortName: 'Metal',
    blurb:
      'Powder-coated aluminum, wrought iron, and stainless steel railings built to outlast everything BC weather throws at them. Modern picket, cable, and ornamental designs.',
    highlights: [
      'Aluminum, wrought iron, and stainless options',
      'Powder-coated for decades of outdoor durability',
      'Cable railings, pickets, and ornamental scrollwork',
      'Welded on-site for perfect fit'
    ],
    bestFor: 'Acreages, commercial sites, modern picket designs, classic ornamental work.',
    image: 'https://images.unsplash.com/photo-1547226706-8bbf33d12520?w=800&auto=format&fit=crop&q=80'
  },
  {
    slug: 'floating-glass',
    name: 'Floating Glass Structures',
    shortName: 'Floating Glass',
    blurb:
      'Architectural glass installations that appear to float — no top rail, hidden hardware, panoramic sightlines. Our most-requested signature build.',
    highlights: [
      'No-top-rail floating frameless glass',
      'Hidden channel and post systems',
      'Engineered to BC wind load and seismic standards',
      'Edge polishing for a finished, premium look'
    ],
    bestFor: 'Luxury homes, view-preserving decks, modern architectural projects.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80'
  },
  {
    slug: 'commercial-railings',
    name: 'Commercial & Multi-Family Railings',
    shortName: 'Commercial',
    blurb:
      'Townhouse complexes, retail, restaurants, and offices. We work with general contractors and developers on schedule, with all hardware and engineering ready for inspection.',
    highlights: [
      'Townhouse and condo complex work',
      'Restaurant, retail, and office installations',
      'Engineered stamps available on request',
      'Strict scheduling for general contractors'
    ],
    bestFor: 'GCs, developers, strata renovations, commercial tenant improvements.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80'
  },
  {
    slug: 'staircase-railings',
    name: 'Interior Staircase Railings',
    shortName: 'Staircases',
    blurb:
      'Interior staircases are the centerpiece of any home. We design custom railings — wood, glass, iron, or mixed — to set the tone the moment guests walk in.',
    highlights: [
      'Open-riser glass staircases',
      'Wood newels with iron balusters',
      'Curved and floating staircase railings',
      'On-site fitting for perfect geometry'
    ],
    bestFor: 'Custom home staircases, renovations, statement entries.',
    image: 'https://images.unsplash.com/photo-1562184552-997c461bedd3?w=800&auto=format&fit=crop&q=80'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
