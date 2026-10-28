import type { MetadataRoute } from 'next';
import { PERSON } from '@/content/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/engineer', '/security', '/how-its-built'].map((path) => ({
    url: `${PERSON.siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
