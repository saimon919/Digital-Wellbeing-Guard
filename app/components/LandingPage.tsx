'use client';

import { MotionConfig } from 'framer-motion';
import { DownloadSection } from './DownloadSection';
import { Features } from './Features';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Reviews } from './Reviews';

export function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper text-ink">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Reviews />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
