'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Aarav M.',
    role: 'Product designer',
    initials: 'AM',
    rating: 5,
    quote:
      'Installed it after a two-hour doomscroll spiral and it’s the first screen-time app that doesn’t feel like a punishment. The weekly report is almost embarrassingly accurate.',
  },
  {
    name: 'M. Oluwaseun',
    role: 'Student',
    initials: 'MO',
    rating: 4,
    quote:
      'I set a 45-minute cap on Instagram and actually kept it for three weeks. The nudge is annoying enough to stop me, polite enough not to guilt me. Dropping a star only because I want a widget.',
  },
  {
    name: 'Dana K.',
    role: 'Parent of two',
    initials: 'DK',
    rating: 5,
    quote:
      'Set it up for the kids and ended up using the focus modes myself. The family view turned screen time into a conversation instead of a fight. Wish I’d found this years ago.',
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

export function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">From the Play Store</p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] text-balance">
              Notes from people who <em className="italic text-accent">switched</em>.
            </h2>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted shrink-0">
            Avg 4.8★ · 12,400+ reviews
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-4"
        >
          {reviews.map((review) => (
            <motion.figure
              key={review.name}
              variants={item}
              className="card p-7 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-lift hover:border-ink/20"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'fill-accent text-accent' : 'text-line'
                    }`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-7 pt-5 border-t border-line">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-deep">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted">{review.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
