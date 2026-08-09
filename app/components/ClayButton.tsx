'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ClayButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  download?: boolean;
  onClick?: () => void;
};

export function ClayButton({
  children,
  variant = 'primary',
  className = '',
  href,
  download,
  onClick,
}: ClayButtonProps) {
  const button = (
    <motion.span
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-sm sm:text-base cursor-pointer select-none ${
        variant === 'primary'
          ? 'clay-btn-primary text-white'
          : 'clay-btn-secondary text-foreground'
      } ${className}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} rel={download ? undefined : 'noopener noreferrer'}>
        {button}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {button}
    </button>
  );
}
