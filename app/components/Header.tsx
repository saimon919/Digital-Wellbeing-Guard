'use client';

import { motion, useScroll } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './Button';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
];

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(scrollY.get() > 8);
    const unsubscribe = scrollY.on('change', (v) => setScrolled(v > 8));
    update();
    return unsubscribe;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? 'pt-2' : 'pt-4'
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'bg-paper/85 backdrop-blur-md border border-line shadow-lift'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-accent text-white shadow-pop transition-transform group-hover:-translate-y-0.5">
              <Shield className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="text-sm sm:text-[15px] font-semibold tracking-tight">
              Digital Wellbeing Guard
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-muted hover:text-ink transition-colors rounded-xl hover:bg-card"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#download" size="sm">
            Get the app
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
