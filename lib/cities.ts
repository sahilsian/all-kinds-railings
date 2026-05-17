// City data drives the dynamic /service-areas/[city] pages.
// Each city becomes its own SEO landing page indexed by Google for
// queries like "custom railings <city>" and "glass railings <city>".

export type City = {
  slug: string;
  name: string;
  province: 'BC' | 'WA';
  region: string;
  population?: string;
  driveTime: string; // approx from Surrey HQ
  intro: string;     // 1-2 sentence neighbourhood blurb
  neighbourhoods: string[]; // helps long-tail SEO
  popularStyle: string;     // most common project request
  metaDescription: string;  // 150-160 chars, used in <meta>
  keywords: string[];
};

export const cities: City[] = [
  {
    slug: 'surrey',
    name: 'Surrey',
    province: 'BC',
    region: 'Lower Mainland',
    population: '~570,000',
    driveTime: 'HQ — same day service',
    intro:
      'Surrey is our home. All Kinds Railings has been crafting custom wood, glass, and metal railings for Surrey homeowners and builders since 1993.',
    neighbourhoods: ['South Surrey', 'Cloverdale', 'Fleetwood', 'Newton', 'Guildford', 'Panorama Ridge', 'Morgan Creek'],
    popularStyle: 'Frameless glass deck railings and custom interior wood spindles for new builds.',
    metaDescription:
      'Custom railings in Surrey BC — wood, glass and metal. 30+ years of craftsmanship by Sarb Sian and team. Free quotes on residential and commercial projects.',
    keywords: ['custom railings Surrey', 'glass railings Surrey BC', 'wood railings Surrey', 'deck railing contractor Surrey']
  },
  {
    slug: 'langley',
    name: 'Langley',
    province: 'BC',
    region: 'Lower Mainland',
    population: '~150,000',
    driveTime: '~20 min from Surrey HQ',
    intro:
      'Langley is one of our most active service areas. From Walnut Grove acreages to Willoughby townhomes, our team installs custom railings across the Township and City of Langley every week.',
    neighbourhoods: ['Walnut Grove', 'Willoughby', 'Murrayville', 'Brookswood', 'Fort Langley', 'Aldergrove'],
    popularStyle: 'Mixed metal-and-wood staircase railings for custom homes and acreage decks.',
    metaDescription:
      'Custom wood, glass & metal railings in Langley BC. Family-owned since 1993. Free in-home quotes for decks, staircases, and commercial projects.',
    keywords: ['custom railings Langley', 'glass deck railings Langley', 'staircase railings Langley BC']
  },
  {
    slug: 'coquitlam',
    name: 'Coquitlam',
    province: 'BC',
    region: 'Tri-Cities',
    population: '~150,000',
    driveTime: '~35 min from Surrey HQ',
    intro:
      'From Burke Mountain new builds to renovations in Westwood Plateau, Coquitlam homeowners trust All Kinds Railings for clean, modern installations that pass inspection the first time.',
    neighbourhoods: ['Burke Mountain', 'Westwood Plateau', 'Maillardville', 'Eagle Ridge', 'Coquitlam Centre'],
    popularStyle: 'Modern frameless glass railings for sloped lot decks and mountain-view homes.',
    metaDescription:
      'Custom railings in Coquitlam — glass, wood, and metal. 30+ years experience. Same-week site visits. Free quotes for homes and commercial spaces.',
    keywords: ['custom railings Coquitlam', 'glass railings Coquitlam', 'deck railing contractor Coquitlam BC']
  },
  {
    slug: 'burnaby',
    name: 'Burnaby',
    province: 'BC',
    region: 'Metro Vancouver',
    population: '~250,000',
    driveTime: '~40 min from Surrey HQ',
    intro:
      'Burnaby is a mix of mid-century homes, infill custom builds, and new commercial work. We tailor every railing to the architecture — clean glass for moderns, warm wood for classics.',
    neighbourhoods: ['Burnaby Heights', 'Brentwood', 'Metrotown', 'Edmonds', 'Capitol Hill'],
    popularStyle: 'Stainless cable railings on rooftop patios and frameless interior staircase glass.',
    metaDescription:
      'Custom wood, glass & metal railings in Burnaby BC. Family-run since 1993. Free quotes for custom homes, decks, and commercial spaces.',
    keywords: ['custom railings Burnaby', 'glass staircase railings Burnaby', 'cable railings Burnaby BC']
  },
  {
    slug: 'aldergrove',
    name: 'Aldergrove',
    province: 'BC',
    region: 'Fraser Valley',
    population: '~13,000',
    driveTime: '~30 min from Surrey HQ',
    intro:
      'Aldergrove acreages and rural homes call for railings that handle real weather. We use marine-grade hardware and powder-coated metal so your installation looks new for decades.',
    neighbourhoods: ['Otter District', 'Bell', '264th corridor', 'Jackman Wetlands area'],
    popularStyle: 'Heavy-duty metal picket railings for long covered decks and barn-style staircases.',
    metaDescription:
      'Custom railings in Aldergrove BC — wood, glass, and metal built for Fraser Valley weather. Free quotes from Sarb Sian and the All Kinds Railings team.',
    keywords: ['custom railings Aldergrove', 'metal deck railings Aldergrove', 'glass railings Aldergrove BC']
  },
  {
    slug: 'abbotsford',
    name: 'Abbotsford',
    province: 'BC',
    region: 'Fraser Valley',
    population: '~155,000',
    driveTime: '~45 min from Surrey HQ',
    intro:
      'Abbotsford is one of our largest custom-home markets. We work directly with several local builders and offer fast turnaround on glass and metal railings for spec homes.',
    neighbourhoods: ['McMillan', 'Sumas Mountain', 'Auguston', 'East Abbotsford', 'Clearbrook'],
    popularStyle: 'Spec-home staircase wood spindles with iron balusters and view-facing glass decks.',
    metaDescription:
      'Abbotsford custom railing contractor — glass, wood, and metal. Trusted by Fraser Valley builders since 1993. Free quotes within 48 hours.',
    keywords: ['custom railings Abbotsford', 'glass railings Abbotsford', 'staircase spindles Abbotsford BC']
  },
  {
    slug: 'maple-ridge',
    name: 'Maple Ridge',
    province: 'BC',
    region: 'Lower Mainland',
    population: '~90,000',
    driveTime: '~45 min from Surrey HQ',
    intro:
      'From Silver Valley walkouts to Hammond renovations, Maple Ridge homes deserve railings that frame the view rather than fight it. Frameless glass is our most-requested upgrade here.',
    neighbourhoods: ['Silver Valley', 'Albion', 'Hammond', 'Cottonwood', 'West Maple Ridge'],
    popularStyle: 'Frameless glass deck railings to preserve Fraser River and mountain sightlines.',
    metaDescription:
      'Custom glass, wood, and metal railings in Maple Ridge BC. 30+ years experience, free quotes, same-week site visits.',
    keywords: ['custom railings Maple Ridge', 'frameless glass railings Maple Ridge', 'deck railings Maple Ridge BC']
  },
  {
    slug: 'delta',
    name: 'Delta',
    province: 'BC',
    region: 'Lower Mainland',
    population: '~110,000',
    driveTime: '~25 min from Surrey HQ',
    intro:
      'Tsawwassen ocean homes and Ladner heritage properties have different needs — we customize each install to match the architecture, neighbourhood feel, and exposure.',
    neighbourhoods: ['Tsawwassen', 'Ladner', 'North Delta', 'Boundary Bay'],
    popularStyle: 'Marine-grade glass and stainless rail for ocean-facing decks.',
    metaDescription:
      'Custom railings in Delta BC — Tsawwassen, Ladner, North Delta. Marine-grade glass and stainless. Free quotes from a family-owned contractor.',
    keywords: ['custom railings Delta BC', 'glass railings Tsawwassen', 'deck railings Ladner']
  },
  {
    slug: 'white-rock',
    name: 'White Rock',
    province: 'BC',
    region: 'Lower Mainland',
    population: '~21,000',
    driveTime: '~15 min from Surrey HQ',
    intro:
      'White Rock’s ocean-view homes are perfect candidates for floating frameless glass railings. We have over 200 White Rock installations in our portfolio.',
    neighbourhoods: ['West Beach', 'East Beach', 'Five Corners', 'Bayview'],
    popularStyle: 'Floating frameless glass with no top rail to preserve panoramic views.',
    metaDescription:
      'White Rock custom railings — frameless glass deck railings and ocean-view installations. Trusted local contractor with 30+ years experience.',
    keywords: ['custom railings White Rock', 'frameless glass railings White Rock', 'ocean view deck railings BC']
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    province: 'BC',
    region: 'Metro Vancouver',
    population: '~210,000',
    driveTime: '~40 min from Surrey HQ',
    intro:
      'Richmond custom homes and townhouse developments often request modern metal and glass combinations. We deliver clean, code-compliant work that passes inspection first try.',
    neighbourhoods: ['Steveston', 'Terra Nova', 'Hamilton', 'Broadmoor', 'Saunders'],
    popularStyle: 'Modern matte-black metal posts with frameless glass infill.',
    metaDescription:
      'Custom railings in Richmond BC — modern glass and metal designs for custom homes and commercial. 30+ years of craftsmanship.',
    keywords: ['custom railings Richmond BC', 'modern glass railings Richmond', 'metal deck railings Richmond']
  },
  {
    slug: 'port-coquitlam',
    name: 'Port Coquitlam',
    province: 'BC',
    region: 'Tri-Cities',
    population: '~62,000',
    driveTime: '~40 min from Surrey HQ',
    intro:
      'Port Coquitlam is a strong market for renovations — replacing old aluminum or pressure-treated railings with modern glass or composite-and-metal upgrades.',
    neighbourhoods: ['Citadel Heights', 'Birchland Manor', 'Riverwood', 'Mary Hill'],
    popularStyle: 'Glass deck replacement and modern metal staircase upgrades.',
    metaDescription:
      'Port Coquitlam custom railing contractor. Wood, glass, and metal railings for homes and commercial properties. Free quotes within 48 hours.',
    keywords: ['custom railings Port Coquitlam', 'deck railing replacement PoCo', 'glass railings Port Coquitlam']
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getCitySlugs(): string[] {
  return cities.map(c => c.slug);
}
