'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'solid' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-7 py-3.5 text-base sm:text-lg',
};

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
  href,
  download,
  onClick,
}: ButtonProps) {
  const classes = `btn btn-${variant} ${sizes[size]} ${className}`;

  const inner = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={classes}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download || undefined}
        rel={download ? undefined : 'noopener noreferrer'}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {inner}
    </button>
  );
}
