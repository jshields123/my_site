import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jack Shields — Senior Software Engineer',
  description:
    'Senior full-stack software engineer building with security in mind. Comfortable owning the full product lifecycle — infrastructure, DevOps, API design, and front-end delivery.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Jack Shields — Senior Software Engineer',
    description:
      'Senior full-stack software engineer building with security in mind. Comfortable owning the full product lifecycle — infrastructure, DevOps, API design, and front-end delivery.',
    siteName: 'Jack Shields',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Shields — Senior Software Engineer',
    description:
      'Senior full-stack software engineer building with security in mind. Comfortable owning the full product lifecycle — infrastructure, DevOps, API design, and front-end delivery.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
