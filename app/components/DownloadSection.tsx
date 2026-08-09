'use client';

import { motion } from 'framer-motion';
import { Download, Shield } from 'lucide-react';
import { ClayButton } from './ClayButton';
import { FloatElement } from './FloatElement';

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="relative"
        >
          <FloatElement duration={6} y={8}>
            <div className="clay-card p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-transparent to-[#63B3ED]/5 pointer-events-none" />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                className="clay-icon w-16 h-16 flex items-center justify-center mx-auto mb-6 relative"
              >
                <Shield className="w-8 h-8 text-[#FF6B6B]" strokeWidth={2} />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight text-balance relative">
                Start guarding your wellbeing today
              </h2>
              <p className="mt-4 text-muted max-w-lg mx-auto text-base sm:text-lg relative">
                Free to download. No credit card. Join 500,000+ Android users building healthier
                digital habits.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                <ClayButton href="/app-debug.apk" download className="!px-8">
                  <Download className="w-5 h-5" />
                  Download APK
                </ClayButton>
              </div>

              <p className="mt-6 text-xs text-muted relative">
                Requires Android 8.0+ · Free with optional Pro upgrade
              </p>
            </div>
          </FloatElement>
        </motion.div>
      </div>
    </section>
  );
}
