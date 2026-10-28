import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { Syne, Inter, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { PERSON } from '@/content/profile';
import './globals.css';

const display = Syne({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-display' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(PERSON.siteUrl),
  title: { default: 'Jack Shields — Engineer & Penetration Tester', template: '%s' },
  description:
    'Senior full-stack engineer and eWPT/eJPT-certified penetration tester. I build the web, and I break it.',
  openGraph: { type: 'website', siteName: PERSON.name, locale: 'en_GB' },
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
  // Reading request headers opts every page into dynamic rendering, which per-request CSP nonces require.
  await headers();
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
