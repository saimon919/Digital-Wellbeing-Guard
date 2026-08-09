'use client';

import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { Button } from './Button';

const meta = [
  { label: 'Version', value: '1.0.0' },
  { label: 'Size', value: '12.1 MB' },
  { label: 'Requires', value: 'Android 8.0+' },
  { label: 'License', value: 'Free, forever' },
];

export function DownloadSection() {
  return (
    <section id="download" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-panel text-paper noise noise-dark px-6 py-16 sm:p-16 text-center"
        >
          {/* Decorative ring */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[34rem] rounded-full border border-paper/10" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-[20rem] rounded-full border border-paper/10" />

          <div className="relative">
            <p className="eyebrow inline-flex items-center gap-2 mb-5 !text-paper/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get the app
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-balance">
              Download the <em className="italic text-accent">APK</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-paper/70 text-base sm:text-lg leading-relaxed">
              Direct download, no account, no tracking. This is the same signed release that will
              ship to the Play Store — it just lives here first.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 sm:grid-cols-4 divide-x divide-paper/10 rounded-2xl border border-paper/10 bg-paper/[0.04]">
              {meta.map((m) => (
                <div key={m.label} className="px-4 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                    {m.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-paper">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Button href="/zfocus-v1.0.0-release.apk" download size="lg" className="!px-9">
                <FileDown className="h-5 w-5" strokeWidth={2.2} />
                Download zfocus-v1.0.0-release.apk
              </Button>
              <p className="font-mono text-[11px] text-paper/50">
                Play Store listing coming soon · install from unknown sources enabled
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
