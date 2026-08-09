'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  BellOff,
  Clock,
  Lock,
  Moon,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { TiltCard } from './TiltCard';

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    icon: Clock,
    title: 'Smart Screen Limits',
    description:
      'Set daily caps per app with gentle nudges — not harsh blocks. Your rules, your pace.',
    color: '#FF6B6B',
  },
  {
    icon: Moon,
    title: 'Focus Modes',
    description:
      'One tap to silence distractions. Work, study, sleep — each mode tailored to your goals.',
    color: '#63B3ED',
  },
  {
    icon: BarChart3,
    title: 'Beautiful Insights',
    description:
      'See where your time goes with gorgeous weekly reports and streak tracking.',
    color: '#A78BFA',
  },
  {
    icon: BellOff,
    title: 'Notification Guard',
    description:
      'Batch and schedule alerts so your phone stops interrupting your real life.',
    color: '#48BB78',
  },
  {
    icon: Lock,
    title: 'App Lock & Pause',
    description:
      'Take a breather from addictive apps with cooldown timers and friction prompts.',
    color: '#ED8936',
  },
  {
    icon: Users,
    title: 'Family Dashboard',
    description:
      'Help loved ones build healthy habits with shared goals and gentle accountability.',
    color: '#F687B3',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 200, damping: 22 },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="text-center mb-16"
        >
          <span className="clay-pill inline-block px-4 py-1.5 text-xs font-semibold text-[#FF6B6B] mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-balance">
            Everything you need to take control
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto text-base sm:text-lg">
            Powerful tools wrapped in a calm, tactile interface — designed to help you build
            lasting digital wellness habits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <TiltCard tiltStrength={8}>
                <div className="clay-card p-6 h-full hover:translate-y-[-2px] transition-transform duration-300">
                  <div
                    className="clay-icon w-12 h-12 flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(145deg, ${feature.color}15, ${feature.color}25)`,
                    }}
                  >
                    <feature.icon
                      className="w-6 h-6"
                      style={{ color: feature.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
