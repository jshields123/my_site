import type { MetadataRoute } from 'next';
import { PERSON } from '@/content/profile';

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${PERSON.siteUrl}/sitemap.xml` };
}
