import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.url;

  const core = [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/quote`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${base}/services`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/gallery`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.6, changeFrequency: 'yearly' as const },
    { url: `${base}/contact`, priority: 0.6, changeFrequency: 'yearly' as const },
    { url: `${base}/service-areas`, priority: 0.8, changeFrequency: 'monthly' as const }
  ];

  const cityPages = cities.map(c => ({
    url: `${base}/service-areas/${c.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
    lastModified
  }));

  return [...core.map(c => ({ ...c, lastModified })), ...cityPages];
}
