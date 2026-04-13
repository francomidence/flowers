/**
 * Design System Constants
 * Single source of truth for the Earthbound Editorial design system
 */

// Color palette with semantic naming
export const COLORS = {
  // Primary palette (Earthbound Editorial)
  clay: '#fef8f6', // Cream/off-white background
  terracotta: '#a43c24', // Warm mid-tone
  brick: '#902d16', // Deep warm tone
  charcoal: '#1d1b1a', // Warm black text

  // Semantic aliases
  primary: '#a43c24', // Terracotta for CTAs
  primaryDark: '#902d16', // Brick for hover states
  surface: '#fef8f6', // Clay for backgrounds
  text: '#1d1b1a', // Charcoal for text
  textSecondary: '#5a5450', // Muted text

  // Tonal layers (opacity-based, no hard borders)
  tonalLight: 'rgba(164, 60, 36, 0.08)', // 8% terracotta overlay
  tonalMid: 'rgba(164, 60, 36, 0.15)', // 15% for subtle division
  tonalStrong: 'rgba(164, 60, 36, 0.25)', // 25% for emphasis

  // Complementary accents
  sage: '#9fad8a',

  // Neutral scale (for text, dividers, borders)
  gray: {
    50: '#f9f8f6',
    100: '#f0ede8',
    200: '#e8e4dd',
    300: '#dcd6ce',
    400: '#c4bcb2',
    500: '#a89c92',
    600: '#8b8279',
    700: '#6e6759',
    800: '#5a5450',
    900: '#3d3a37',
  },
} as const;

// Typography system
export const TYPOGRAPHY = {
  fonts: {
    serif: ['Newsreader', 'Georgia', 'serif'], // Display/headlines
    sans: ['Manrope', '-apple-system', 'sans-serif'], // Body/labels
    mono: ['Menlo', 'Monaco', 'monospace'],
  },
  scales: {
    // Display sizes (for h1, hero text)
    displayLarge: { fontSize: 'clamp(2.5rem, 2rem + 7vw, 4.5rem)', lineHeight: '1.1' },
    displayMedium: { fontSize: 'clamp(2rem, 1.5rem + 5vw, 3.5rem)', lineHeight: '1.2' },
    displaySmall: { fontSize: 'clamp(1.5rem, 1rem + 3vw, 2.5rem)', lineHeight: '1.3' },

    // Heading sizes (h2, section titles)
    headingLarge: { fontSize: 'clamp(1.75rem, 1.25rem + 2vw, 2.5rem)', lineHeight: '1.2' },
    headingMedium: { fontSize: 'clamp(1.25rem, 1rem + 1vw, 1.75rem)', lineHeight: '1.3' },
    headingSmall: { fontSize: '1.25rem', lineHeight: '1.4' },

    // Body sizes
    body: { fontSize: '1rem', lineHeight: '1.6' },
    bodySmall: { fontSize: '0.95rem', lineHeight: '1.5' },
    bodyXS: { fontSize: '0.875rem', lineHeight: '1.4' },

    // Label/UI sizes
    label: { fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.25' },
    labelSmall: { fontSize: '0.8125rem', fontWeight: '600', lineHeight: '1.2' },
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// Spacing system (based on 0.25rem base unit)
export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  xxl: '3rem', // 48px
  xxxl: '4rem', // 64px

  // Responsive spacing scales
  section: 'clamp(2rem, 1rem + 6vw, 5rem)',
  sectionLarge: 'clamp(3rem, 2rem + 8vw, 6rem)',
  gutter: 'clamp(1rem, 0.5rem + 2vw, 2rem)',
} as const;

// Border radius (no hard-edged rectangles - everything slightly rounded)
export const RADIUS = {
  xs: '0.25rem', // Very subtle
  sm: '0.5rem', // 8px - for small UI elements
  md: '0.75rem', // 12px - default for cards
  lg: '1rem', // 16px - larger components
  xl: '1.5rem', // 24px - feature cards
  full: '9999px', // Circles, pills
} as const;

// Shadow system (subtle, layered elevation)
export const SHADOWS = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0,0,0,0.04)',
  sm: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)',
  md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05)',
  lg: '0 10px 15px -3px rgba(0,0,0,0.12), 0 4px 6px -4px rgba(0,0,0,0.06)',
  xl: '0 20px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.08)',

  // Glassmorphism shadows (inner + outer)
  glass: '0 8px 32px 0 rgba(31,38,135,0.07)',
  glassInset: 'inset 0 2px 4px 0 rgba(255,255,255,0.5)',
} as const;

// Transition/animation timing
export const MOTION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',

  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Type exports for strict typing
export type Color = typeof COLORS;
export type Typography = typeof TYPOGRAPHY;
export type Spacing = typeof SPACING;
export type Radius = typeof RADIUS;
export type Shadow = typeof SHADOWS;
export type Motion = typeof MOTION;
