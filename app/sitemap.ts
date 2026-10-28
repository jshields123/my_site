import type { MetadataRoute } from 'next';
import { PERSON } from '@/content/profile';
import { ROUTES } from '@/content/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${PERSON.siteUrl}${path === '/' ? '' : path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
