import type { Metadata, Viewport } from 'next';
import { Fraunces } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digital Wellbeing Guard — your phone, your time',
  description:
    'A quiet Android app for taking your screen time back: gentle app limits, focus modes, and honest weekly reports. Free to download, no account required.',
  keywords: [
    'digital wellbeing',
    'screen time',
    'focus mode',
    'android app',
    'app limits',
    'phone addiction',
  ],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: 'Digital Wellbeing Guard — your phone, your time',
    description:
      'Gentle app limits, focus modes, and honest weekly reports. Free to download, no account required.',
    type: 'website',
    siteName: 'Digital Wellbeing Guard',
  },
  twitter: {
    card: 'summary',
    title: 'Digital Wellbeing Guard — your phone, your time',
    description:
      'Gentle app limits, focus modes, and honest weekly reports. Free to download, no account required.',
  },
};

export const viewport: Viewport = {
  themeColor: '#f4f1e8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
