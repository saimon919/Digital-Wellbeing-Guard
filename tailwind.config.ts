import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        card: 'var(--card)',
        accent: 'var(--accent)',
        'accent-deep': 'var(--accent-deep)',
        'accent-soft': 'var(--accent-soft)',
        sage: 'var(--sage)',
        'sage-soft': 'var(--sage-soft)',
        panel: 'var(--panel)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        lift: '0 1px 2px rgba(33, 28, 20, 0.05), 0 12px 32px -12px rgba(33, 28, 20, 0.18)',
        'lift-lg': '0 2px 4px rgba(33, 28, 20, 0.06), 0 24px 56px -20px rgba(33, 28, 20, 0.28)',
        pop: '0 8px 24px -12px rgba(228, 87, 46, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
