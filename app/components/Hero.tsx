'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Clock3, Download } from 'lucide-react';
import { Button } from './Button';

const stats = [
  { value: '2.4 hrs', label: 'avg. screen time saved per user, weekly' },
  { value: '4.8\u2605', label: 'rating across 12,400+ Play Store reviews' },
  { value: '38%', label: 'average drop in daily usage after two weeks' },
];

const apps = [
  { name: 'Instagram', cap: '45m', used: 32, dot: 'bg-accent' },
  { name: 'X / Twitter', cap: '30m', used: 27, dot: 'bg-sage' },
  { name: 'YouTube', cap: '1h', used: 18, dot: 'bg-[#c9a53a]' },
];

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 * i },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-36 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Quiet backdrop: a soft terracotta bloom, a hairline ring, and paper grain */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.14),transparent)]" />
        <div className="absolute top-24 left-[-14%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(92,122,85,0.10),transparent)]" />
        <div className="absolute top-40 right-[8%] h-[30rem] w-[30rem] rounded-full border border-line" />
        <div className="absolute top-52 right-[14%] h-[16rem] w-[16rem] rounded-full border border-line/70" />
      </div>

      <div className="relative noise max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0}
              className="eyebrow inline-flex items-center gap-2 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now available on Android · v1.0
            </motion.p>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-medium tracking-[-0.02em] text-balance"
            >
              Your phone is a brilliant tool. It&rsquo;s a{' '}
              <em className="italic text-accent">terrible boss</em>.
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed"
            >
              Digital Wellbeing Guard puts you back in charge of your screen time — gentle app
              limits, focus modes, and honest weekly reports. No guilt trips, no account, no cost.
            </motion.p>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button href="/zfocus-v1.0.0-release.apk" download size="lg">
                <Download className="h-5 w-5" strokeWidth={2.2} />
                Download the APK
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                How it works
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Button>
            </motion.div>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
            >
              Android 8.0+ · 12.1 MB · release-signed
            </motion.p>
          </div>

          {/* Phone mockup */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -left-6 sm:-left-12 top-16 z-10 rounded-full bg-card border border-line px-4 py-2 shadow-lift flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                <span className="text-xs font-semibold">Focus mode on</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                className="absolute -right-4 sm:-right-10 bottom-24 z-10 rounded-full bg-accent text-white px-4 py-2 shadow-pop flex items-center gap-1.5"
              >
                <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.6} />
                <span className="text-xs font-semibold">−38% this week</span>
              </motion.div>

              <div className="relative w-[260px] sm:w-[290px] rounded-[2.6rem] bg-panel p-2.5 shadow-lift-lg">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black/80 z-10" />
                <div className="rounded-[2rem] bg-paper overflow-hidden">
                  {/* Status row */}
                  <div className="flex items-center justify-between px-6 pt-9 pb-2">
                    <span className="font-mono text-[10px] text-muted">9:41</span>
                    <div className="flex gap-1">
                      <span className="h-1.5 w-4 rounded-full bg-ink/30" />
                      <span className="h-1.5 w-2 rounded-full bg-ink/30" />
                    </div>
                  </div>

                  <div className="px-6 pt-3 pb-6">
                    <p className="font-display text-lg font-medium">Good morning.</p>
                    <p className="text-[11px] text-muted mb-4">Here&rsquo;s today, so far.</p>

                    {/* Today card */}
                    <div className="rounded-2xl border border-line bg-card p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                          Screen time
                        </span>
                        <span className="font-mono text-[10px] text-sage">on track</span>
                      </div>
                      <p className="font-display text-3xl font-medium mt-1">
                        2h 14m
                        <span className="ml-2 text-xs font-sans text-muted">of 4h budget</span>
                      </p>
                      <div className="mt-3 h-1.5 rounded-full bg-line overflow-hidden">
                        <div className="h-full w-[56%] rounded-full bg-accent" />
                      </div>
                      <p className="mt-2 text-[11px] text-accent font-medium">
                        ↓ 38% less than last week
                      </p>
                    </div>

                    {/* Focus row */}
                    <div className="mt-3 flex items-center justify-between rounded-2xl border border-line bg-card px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sage-soft">
                          <Clock3 className="h-3.5 w-3.5 text-sage" strokeWidth={2.4} />
                        </span>
                        <div>
                          <p className="text-xs font-semibold">Focus mode</p>
                          <p className="text-[10px] text-muted">until 6pm</p>
                        </div>
                      </div>
                      <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-sage">
                        <span className="absolute right-0.5 h-4 w-4 rounded-full bg-white" />
                      </span>
                    </div>

                    {/* App caps */}
                    <div className="mt-3 space-y-2">
                      {apps.map((app) => (
                        <div
                          key={app.name}
                          className="rounded-2xl border border-line bg-card px-4 py-2.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 text-xs font-medium">
                              <span className={`h-2 w-2 rounded-full ${app.dot}`} />
                              {app.name}
                            </span>
                            <span className="font-mono text-[10px] text-muted">
                              {app.used}m / {app.cap}
                            </span>
                          </div>
                          <div className="mt-2 h-1 rounded-full bg-line overflow-hidden">
                            <div
                              className="h-full rounded-full bg-ink/50"
                              style={{ width: `${app.used}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-24 grid sm:grid-cols-3 gap-y-8 gap-x-10 border-t border-line pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl sm:text-[2.5rem] font-medium tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-muted max-w-[24ch]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
