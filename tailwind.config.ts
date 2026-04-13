import type { Config } from 'tailwindcss';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS, SHADOWS, MOTION, BREAKPOINTS } from './src/lib/constants';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colors with proper tonal layering (no borders)
      colors: {
        // Primary palette
        clay: COLORS.clay,
        terracotta: COLORS.terracotta,
        brick: COLORS.brick,
        charcoal: COLORS.charcoal,
        sage: COLORS.sage,

        // Semantic colors
        primary: COLORS.primary,
        'primary-dark': COLORS.primaryDark,
        surface: COLORS.surface,
        text: COLORS.text,
        'text-secondary': COLORS.textSecondary,

        // Tonal layers (replace hard borders)
        'tonal-light': COLORS.tonalLight,
        'tonal-mid': COLORS.tonalMid,
        'tonal-strong': COLORS.tonalStrong,

        // Full neutral gray scale
        gray: COLORS.gray,
      },

      // Typography
      fontFamily: {
        serif: TYPOGRAPHY.fonts.serif as unknown as string[],
        sans: TYPOGRAPHY.fonts.sans as unknown as string[],
        mono: TYPOGRAPHY.fonts.mono as unknown as string[],
      },

      fontSize: {
        'display-lg': [
          TYPOGRAPHY.scales.displayLarge.fontSize,
          { lineHeight: TYPOGRAPHY.scales.displayLarge.lineHeight },
        ],
        'display-md': [
          TYPOGRAPHY.scales.displayMedium.fontSize,
          { lineHeight: TYPOGRAPHY.scales.displayMedium.lineHeight },
        ],
        'display-sm': [
          TYPOGRAPHY.scales.displaySmall.fontSize,
          { lineHeight: TYPOGRAPHY.scales.displaySmall.lineHeight },
        ],
        'heading-lg': [
          TYPOGRAPHY.scales.headingLarge.fontSize,
          { lineHeight: TYPOGRAPHY.scales.headingLarge.lineHeight },
        ],
        'heading-md': [
          TYPOGRAPHY.scales.headingMedium.fontSize,
          { lineHeight: TYPOGRAPHY.scales.headingMedium.lineHeight },
        ],
        'heading-sm': [
          TYPOGRAPHY.scales.headingSmall.fontSize,
          { lineHeight: TYPOGRAPHY.scales.headingSmall.lineHeight },
        ],
        body: [TYPOGRAPHY.scales.body.fontSize, { lineHeight: TYPOGRAPHY.scales.body.lineHeight }],
        'body-sm': [
          TYPOGRAPHY.scales.bodySmall.fontSize,
          { lineHeight: TYPOGRAPHY.scales.bodySmall.lineHeight },
        ],
        'body-xs': [
          TYPOGRAPHY.scales.bodyXS.fontSize,
          { lineHeight: TYPOGRAPHY.scales.bodyXS.lineHeight },
        ],
        label: [
          TYPOGRAPHY.scales.label.fontSize,
          { lineHeight: TYPOGRAPHY.scales.label.lineHeight, fontWeight: '600' },
        ],
        'label-sm': [
          TYPOGRAPHY.scales.labelSmall.fontSize,
          { lineHeight: TYPOGRAPHY.scales.labelSmall.lineHeight, fontWeight: '600' },
        ],
      },

      // Spacing system (only fixed values, clamp values handled as CSS vars)
      spacing: {
        xs: SPACING.xs,
        sm: SPACING.sm,
        md: SPACING.md,
        lg: SPACING.lg,
        xl: SPACING.xl,
        xxl: SPACING.xxl,
        xxxl: SPACING.xxxl,
      },

      // Border radius with no sharp edges
      borderRadius: RADIUS,

      // Shadows (subtle, layered)
      boxShadow: SHADOWS,

      // Transitions/animations
      transitionDuration: {
        fast: MOTION.fast,
        normal: MOTION.normal,
        slow: MOTION.slow,
      },

      transitionTimingFunction: {
        ease: MOTION.easing.ease,
        'ease-in': MOTION.easing.easeIn,
        'ease-out': MOTION.easing.easeOut,
        'ease-in-out': MOTION.easing.easeInOut,
        linear: MOTION.easing.linear,
      },

      // Aspect ratios for photography
      aspectRatio: {
        hero: '16 / 9',
        portrait: '2 / 3',
        landscape: '4 / 3',
        square: '1 / 1',
        editorial: '3 / 2',
      },

      // Backdrop blur for glassmorphism
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      // Gradients for subtle tonal shifts
      backgroundImage: {
        'gradient-clay': `linear-gradient(135deg, ${COLORS.clay} 0%, ${COLORS.tonalLight} 100%)`,
        'gradient-fade': `linear-gradient(to bottom, transparent 0%, ${COLORS.tonalMid} 100%)`,
        'gradient-overlay': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)',
        'gradient-primary': `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 100%)`,
      },

      // Custom animation for subtle movement
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'subtle-shift': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.95' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        'gentle-float': 'gentle-float 3s ease-in-out infinite',
        'subtle-shift': 'subtle-shift 4s ease-in-out infinite',
      },

      // Container queries for component-level responsive design
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },

      // Screens/breakpoints
      screens: BREAKPOINTS,
    },
  },

  plugins: [
    // No-line rule: Custom plugin to enforce tonal layering instead of borders
    function ({ addComponents }: { addComponents: Function }) {
      addComponents({
        // Tonal divider components
        '.divider-tonal': {
          '@apply h-px bg-tonal-mid': {},
        },
        '.divider-tonal-strong': {
          '@apply h-px bg-tonal-strong': {},
        },

        // Glassmorphism surfaces
        '.surface-glass': {
          '@apply backdrop-blur-md bg-white/80 border border-tonal-light': {},
        },
        '.surface-glass-dark': {
          '@apply backdrop-blur-md bg-charcoal/90 border border-white/10': {},
        },

        // Tonal backgrounds (layers)
        '.bg-tonal-layer-1': {
          '@apply bg-tonal-light': {},
        },
        '.bg-tonal-layer-2': {
          '@apply bg-tonal-mid': {},
        },
        '.bg-tonal-layer-3': {
          '@apply bg-tonal-strong': {},
        },

        // Asymmetric layout utilities
        '.asymmetric-offset': {
          '@apply -ml-[clamp(1rem,3vw,3rem)]': {},
        },
        '.asymmetric-overlap': {
          '@apply -mt-[clamp(1.5rem,4vw,4rem)]': {},
        },
      });
    },
  ],
};

export default config;
