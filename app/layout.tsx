import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Wellbeing Guard — Reclaim Your Focus',
  description:
    'Build healthier phone habits with smart limits, focus modes, and beautiful insights. The #1 digital wellness app for Android.',
  keywords: 'digital wellbeing,screen time,focus mode,android app,phone addiction,app limits',
  openGraph: {
    title: 'Digital Wellbeing Guard — Reclaim Your Focus',
    description:
      'Build healthier phone habits with smart limits, focus modes, and beautiful insights.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Digital Wellbeing Guard — Reclaim Your Focus',
    description:
      'Build healthier phone habits with smart limits, focus modes, and beautiful insights.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
