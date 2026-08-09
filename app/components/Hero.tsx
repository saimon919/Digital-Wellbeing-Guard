'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Download,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { ClayButton } from './ClayButton';
import { FloatElement } from './FloatElement';
import { TiltCard } from './TiltCard';

const stats = [
  { value: '500K+', label: 'Downloads' },
  { value: '4.8★', label: 'Play Store' },
  { value: '2.4hrs', label: 'Avg. time saved daily' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-bg -z-10" />

      <FloatElement
        className="absolute top-32 left-[8%] w-16 h-16 clay-icon opacity-60 hidden lg:block"
        delay={0}
        duration={5}
      >
        <div className="w-full h-full" />
      </FloatElement>

      <FloatElement
        className="absolute bottom-40 right-[12%] w-12 h-12 rounded-full bg-[#63B3ED]/20 hidden lg:block"
        delay={1.2}
        duration={6}
        y={16}
      >
        <div className="w-full h-full" />
      </FloatElement>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="inline-flex items-center gap-2 clay-pill px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
            <span className="text-xs sm:text-sm font-semibold text-muted">
              #1 Digital Wellness App on Android
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.08] tracking-tight text-balance"
          >
            Reclaim Your <span className="text-[#FF6B6B]">Focus</span>
            <br />
            Guard Your Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.16 }}
            className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Digital Wellbeing Guard helps you build healthier phone habits with smart limits,
            focus modes, and beautiful insights — so you live more and scroll less.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
          >
            <ClayButton href="/DigitalWellbeingGuard.apk" download>
              <Download className="w-5 h-5" />
              Download Free
            </ClayButton>
            <ClayButton variant="secondary" href="#how-it-works">
              <Play className="w-4 h-4 fill-current" />
              See How It Works
            </ClayButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center lg:text-left">
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', delay: 0.5 + index * 0.1 }}
                  className="text-xl sm:text-2xl font-bold text-foreground"
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs sm:text-sm text-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.2 }}
          className="flex justify-center lg:justify-end perspective-[1200px]"
        >
          <TiltCard className="relative">
            <FloatElement duration={5} y={10}>
              <div className="clay-card p-3 sm:p-4 w-[280px] sm:w-[300px]">
                <div className="rounded-[2rem] bg-gradient-to-b from-[#1a2332] to-[#2d3a4f] p-3 shadow-2xl">
                  <div className="rounded-[1.5rem] bg-[#eef2f7] overflow-hidden aspect-[9/19] relative">
                    <div className="flex items-center justify-between px-5 pt-3 pb-1">
                      <span className="text-[10px] font-semibold text-foreground/70">9:41</span>
                      <div className="w-16 h-4 bg-[#1a2332] rounded-full" />
                      <div className="flex gap-0.5">
                        <div className="w-3 h-2 bg-foreground/30 rounded-sm" />
                        <div className="w-3 h-2 bg-foreground/30 rounded-sm" />
                      </div>
                    </div>

                    <div className="px-4 pt-2 pb-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#FF6B6B]" />
                        <span className="text-xs font-bold text-foreground">Today&apos;s Guard</span>
                      </div>

                      <div className="clay-card p-3 !rounded-2xl">
                        <p className="text-[10px] text-muted font-medium">Screen Time</p>
                        <p className="text-2xl font-extrabold text-foreground mt-0.5">2h 14m</p>
                        <div className="mt-2 h-2 rounded-full bg-[#eef2f7] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '62%' }}
                            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]"
                          />
                        </div>
                        <p className="text-[9px] text-[#FF6B6B] font-semibold mt-1.5">
                          ↓ 38% less than yesterday
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="clay-card p-2.5 !rounded-xl">
                          <Clock className="w-3.5 h-3.5 text-[#FF6B6B] mb-1" />
                          <p className="text-[8px] text-muted">Focus Mode</p>
                          <p className="text-xs font-bold text-foreground">Active</p>
                        </div>
                        <div className="clay-card p-2.5 !rounded-xl">
                          <Smartphone className="w-3.5 h-3.5 text-[#FF6B6B] mb-1" />
                          <p className="text-[8px] text-muted">Apps Blocked</p>
                          <p className="text-xs font-bold text-foreground">3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatElement>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -right-4 top-12 clay-pill px-3 py-2 flex items-center gap-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-foreground">Focus Active</span>
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
