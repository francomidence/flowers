import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          dark: '#8B6F47',
          light: '#D4A574',
        },
        sage: '#9FAD8A',
        cream: '#F5F1E8',
        charcoal: '#2B2520',
      },
      fontFamily: {
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2rem, 1rem + 7vw, 4rem)',
        'section-title': 'clamp(2rem, 1.5rem + 3vw, 2.5rem)',
        base: '1rem',
        sm: '0.875rem',
      },
      spacing: {
        section: 'clamp(3rem, 2rem + 5vw, 8rem)',
      },
      borderRadius: {
        button: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
