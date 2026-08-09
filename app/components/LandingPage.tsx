import { DownloadSection } from './DownloadSection';
import { Features } from './Features';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Reviews } from './Reviews';

export function LandingPage() {
  return (
    <div className="gradient-bg min-h-screen">
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
  );
}
