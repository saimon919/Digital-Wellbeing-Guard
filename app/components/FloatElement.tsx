'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type FloatElementProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
};

export function FloatElement({
  children,
  className = '',
  delay = 0,
  duration = 4,
  y = 12,
}: FloatElementProps) {
  return (
    <motion.div
      animate={{ y: [-y / 2, y / 2, -y / 2] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
