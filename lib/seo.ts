import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

type BuildMetaArgs = {
  title?: string;
  description?: string;
  path?: string;       // e.g. '/about', '/service-areas/surrey'
  image?: string;
  keywords?: string[];
};

/**
 * Helper to produce consistent <Metadata> for every page.
 * Title is auto-suffixed with the brand unless the caller passes a final title.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = siteConfig.ogImage,
  keywords = []
}: BuildMetaArgs = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const allKeywords = [
    'custom railings',
    'custom home railings',
    'glass railings',
    'wood railings',
    'metal railings',
    'Surrey BC railings',
    'Lower Mainland railing contractor',
    ...keywords
  ];

  return {
    title: fullTitle,
    description: desc,
    keywords: allKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
      locale: 'en_CA',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' }
    }
  };
}

/** JSON-LD for the global LocalBusiness — included once in the root layout. */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: String(siteConfig.stats.foundedYear),
    founder: { '@type': 'Person', name: siteConfig.stats.founder },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    areaServed: siteConfig.serviceArea.map(a => ({ '@type': 'City', name: a })),
    sameAs: Object.values(siteConfig.social),
    priceRange: '$$–$$$',
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127'
    }
  };
}
