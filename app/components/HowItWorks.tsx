'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Install the APK',
    description:
      'Download it from this page and open the file. Android will ask you to allow “install from unknown sources” — that’s normal.',
  },
  {
    title: 'Grant two permissions',
    description:
      'Usage access and notification access, so the guard can see what you see. The data never leaves your phone.',
  },
  {
    title: 'Set your limits',
    description:
      'Pick per-app caps and focus schedules. The defaults are sensible, so you can skip this step entirely if you want.',
  },
  {
    title: 'Breathe',
    description:
      'That’s it. Start with the defaults, then tune things as you notice what actually works for you.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="eyebrow mb-4">Setup</p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-balance">
            Up and running in <em className="italic text-accent">five minutes</em>.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative"
        >
          <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-line" />
          {steps.map((step, i) => (
            <motion.div key={step.title} variants={item} className="relative">
              <div className="hidden lg:flex absolute -top-3 left-0 h-1.5 w-1.5 rounded-full bg-accent -translate-y-1/2" />
              <p className="font-mono text-[11px] text-accent mb-3">
                Step {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
