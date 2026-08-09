'use client';

import { motion } from 'framer-motion';
import {
  BellOff,
  Clock3,
  Coins,
  Moon,
  ScrollText,
  Users,
  type LucideIcon,
} from 'lucide-react';

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Clock3,
    title: 'Daily app limits',
    description:
      'Set a cap per app. When you hit it, you get a gentle nudge — never a locked screen. You stay in control.',
  },
  {
    icon: Moon,
    title: 'Focus modes',
    description:
      'One tap to go quiet. Work, reading, sleep — each mode silences the apps that pull you away, and nothing else.',
  },
  {
    icon: ScrollText,
    title: 'Honest weekly reports',
    description:
      'A plain-language recap of where your time went. Numbers you can actually understand, without the shame spiral.',
  },
  {
    icon: BellOff,
    title: 'Notification bundling',
    description:
      'Batch your alerts into a few check-ins a day, so your phone stops interrupting everything else.',
  },
  {
    icon: Coins,
    title: 'Cooldowns',
    description:
      'Caught in a doomscroll loop? The app suggests a two-minute pause. You can always say no — it just asks.',
  },
  {
    icon: Users,
    title: 'Family view',
    description:
      'See your household’s screen time at a glance, and set shared goals that respect everyone’s autonomy.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <p className="eyebrow mb-4">What it does</p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-balance leading-[1.08]">
            A quiet toolkit for a{' '}
            <em className="italic text-accent">calmer screen life</em>.
          </h2>
          <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Six small features, each boring in the best way. Together they add up to a phone that
            waits for you instead of the other way round.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              variants={item}
              className="group card p-6 sm:p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-lift hover:border-ink/20"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[11px] text-muted group-hover:text-accent transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-5 w-5" strokeWidth={2} />
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
