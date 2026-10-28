import type { Metadata, Viewport } from 'next';
import { connection } from 'next/server';
import { Syne, Inter, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { PERSON } from '@/content/profile';
import { BASE_OPEN_GRAPH } from '@/lib/metadata';
import './globals.css';

const display = Syne({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-display' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(PERSON.siteUrl),
  title: { default: 'Jack Shields — Engineer & Penetration Tester', template: '%s — Jack Shields' },
  description:
    'Senior full-stack engineer and eWPT/eJPT-certified penetration tester. I build the web, and I break it.',
  openGraph: BASE_OPEN_GRAPH,
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eceae4' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Per-request CSP nonces need every page rendered per request, not prerendered at build time.
  await connection();
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        {children}
        {/* The analytics endpoint only exists on Vercel; skip it locally and in CI. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
