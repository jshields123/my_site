import type { Metadata } from 'next';
import { PERSON } from '@/content/profile';

// Next.js merges metadata shallowly: a page's `openGraph` replaces the layout's wholesale.
// Pages spread this base so every share card keeps type, site name and locale.
export const BASE_OPEN_GRAPH = {
  type: 'website',
  siteName: PERSON.name,
  locale: 'en_GB',
} satisfies Metadata['openGraph'];
