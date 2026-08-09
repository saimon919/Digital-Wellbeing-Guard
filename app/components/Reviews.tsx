'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TiltCard } from './TiltCard';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    avatar: 'PS',
    rating: 5,
    quote:
      'I cut my daily screen time in half within two weeks. The focus modes are genuinely life-changing — I finally read books again.',
  },
  {
    name: 'Marcus Chen',
    role: 'University Student',
    avatar: 'MC',
    rating: 5,
    quote:
      'Other apps felt punishing. This one feels supportive. The clay-soft UI makes checking my stats actually enjoyable.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Parent of 2',
    avatar: 'ER',
    rating: 5,
    quote:
      'The family dashboard helped us have real conversations about phone use. My teens actually asked for their own limits.',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="text-center mb-16"
        >
          <span className="clay-pill inline-block px-4 py-1.5 text-xs font-semibold text-[#A78BFA] mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Loved by half a million users
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Real stories from people who reclaimed their time and attention.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 22, delay: index * 0.1 }}
            >
              <TiltCard tiltStrength={6}>
                <div className="clay-card p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B6B] text-[#FF6B6B]" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed flex-1">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#eef2f7]">
                    <div className="clay-icon w-10 h-10 flex items-center justify-center text-xs font-bold text-[#FF6B6B]">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted">{review.role}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
