'use client';

import { motion } from 'framer-motion';
import { Download, LineChart, Settings, Target, type LucideIcon } from 'lucide-react';

const steps: {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    step: '01',
    icon: Download,
    title: 'Install & Connect',
    description:
      'Download from Google Play and grant permissions. Setup takes under 60 seconds.',
  },
  {
    step: '02',
    icon: Target,
    title: 'Set Your Goals',
    description:
      'Choose daily limits, pick focus schedules, and tell us what matters most to you.',
  },
  {
    step: '03',
    icon: LineChart,
    title: 'Track Progress',
    description:
      'Watch your screen time drop with real-time dashboards and weekly wellness scores.',
  },
  {
    step: '04',
    icon: Settings,
    title: 'Fine-Tune & Thrive',
    description:
      'Adjust rules as habits form. The app learns and adapts to keep you on track.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 gradient-bg opacity-50 -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="text-center mb-16"
        >
          <span className="clay-pill inline-block px-4 py-1.5 text-xs font-semibold text-[#63B3ED] mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Four steps to digital freedom
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            No complicated setup. No subscription required to get started.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[#FF6B6B]/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 22, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="clay-card p-6 h-full flex flex-col items-center">
                <div className="relative mb-5">
                  <div className="clay-icon w-14 h-14 flex items-center justify-center mx-auto">
                    <step.icon className="w-6 h-6 text-[#FF6B6B]" strokeWidth={2} />
                  </div>
                  <span className="absolute -top-2 -right-2 clay-pill w-7 h-7 flex items-center justify-center text-[10px] font-bold text-[#FF6B6B]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
