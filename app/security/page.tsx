import type { Metadata, Viewport } from 'next';
import { TRACKS } from '@/content/profile';
import { BASE_OPEN_GRAPH } from '@/lib/metadata';
import { TrackPage } from '../components/TrackPage/TrackPage';

const t = TRACKS.security;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: t.path },
  openGraph: { ...BASE_OPEN_GRAPH, title: t.metaTitle, description: t.metaDescription, url: t.path },
};

export const viewport: Viewport = { themeColor: '#0b0b0c' };

export default function Page() {
  return <TrackPage track="security" />;
}
