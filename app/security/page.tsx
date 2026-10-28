import type { Metadata } from 'next';
import { TRACKS } from '@/content/profile';
import { TrackPage } from '../components/TrackPage/TrackPage';

const t = TRACKS.security;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: { canonical: t.path },
  openGraph: { title: t.metaTitle, description: t.metaDescription, url: t.path },
};

export default function Page() {
  return <TrackPage track="security" />;
}
