// Single source of truth for business info.
// Replace the placeholders marked with TODO before launching.

export const siteConfig = {
  name: 'All Kinds Railings',
  legalName: 'All Kinds Railings Ltd.',
  tagline: 'Custom Wood, Glass & Metal Railings — Built by Hand in Surrey, BC',
  shortTagline: 'Surrey’s trusted custom railing experts since 1993.',
  description:
    'All Kinds Railings is a family-owned Surrey, BC contractor specializing in custom residential and commercial railings in wood, glass, and metal. Over 30 years of craftsmanship and 5,000+ completed projects across the Lower Mainland.',
  // TODO: replace with the real production domain before deploying
  url: 'https://www.allkindsrailings.com',
  ogImage: '/images/og-default.jpg',

  // ---- CONTACT ----
  phone: '(604) 725-3132',
  phoneHref: 'tel:+16047253132',
  email: 'quotes@allkindsrailings.com', // TODO: confirm real inbox before launch
  emailHref: 'mailto:quotes@allkindsrailings.com',

  address: {
    street: 'Surrey, British Columbia',
    locality: 'Surrey',
    region: 'BC',
    postalCode: 'V3S',
    country: 'CA'
  },

  hours: {
    monFri: '7:00 AM – 6:00 PM',
    sat: '8:00 AM – 4:00 PM',
    sun: 'By appointment'
  },

  // Service area summary used in metadata + JSON-LD
  serviceArea: [
    'Surrey',
    'Langley',
    'Coquitlam',
    'Burnaby',
    'Aldergrove',
    'Abbotsford',
    'Maple Ridge',
    'Delta',
    'White Rock',
    'Richmond',
    'Port Coquitlam',
    'Vancouver',
    'New Westminster',
    'Mission',
    'Chilliwack',
    'Kelowna',
    'Bellingham WA'
  ],

  // ---- SOCIAL ----
  social: {
    instagram: 'https://www.instagram.com/allkindsrailings', // TODO confirm
    facebook: 'https://www.facebook.com/allkindsrailings',   // TODO confirm
    google: 'https://g.page/allkindsrailings'                // TODO confirm
  },

  // ---- ANALYTICS ----
  // Replace with real IDs when ready. Empty strings will skip script injection.
  analytics: {
    googleAdsId: '',          // e.g. 'AW-1234567890'
    googleAnalyticsId: '',    // e.g. 'G-XXXXXXXXXX'
    googleConversionLabel: '',// e.g. 'abcDEF-GHi123' for the lead conversion
    metaPixelId: ''           // e.g. '1234567890123456'
  },

  // Stats for trust bar
  stats: {
    yearsInBusiness: 30,
    projectsCompleted: '5,000+',
    foundedYear: 1993,
    founder: 'Sarb Sian'
  }
} as const;

export type SiteConfig = typeof siteConfig;
