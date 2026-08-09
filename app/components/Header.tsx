'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { ClayButton } from './ClayButton';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Download', href: '#download' },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <nav className="clay-pill mx-auto max-w-6xl flex items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="clay-icon p-2 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-[#FF6B6B]" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-foreground text-sm sm:text-base tracking-tight">
            Digital Wellbeing Guard
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-full hover:bg-white/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ClayButton href="#download" className="!px-5 !py-2.5 !text-sm">
          Get the App
        </ClayButton>
      </nav>
    </motion.header>
  );
}
