/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const gridAreasPlugin = require('@savvywombat/tailwindcss-grid-areas');
const { screens } = require('tailwindcss/defaultTheme');
const textFillPlugin = require('tailwindcss-text-fill');

const themeConstants = require('./src/theme/constants').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/es-components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  important: 'body',
  theme: {
    screens: {
      ...screens,
      ...Object.fromEntries(
        Object.entries(themeConstants.breakpoints).map(([key, value]) => [
          key,
          `${value}px`,
        ]),
      ),
    },
    extend: {
      colors: themeConstants.colors,
      textColor: themeConstants.semanticColors.text,
      backgroundColor: themeConstants.semanticColors.background,
      borderColor: themeConstants.semanticColors.border,
      fill: themeConstants.semanticColors.foreground,
      stroke: themeConstants.semanticColors.foreground,
      backgroundImage: {
        'accent-bg': themeConstants.backgroundImages.accentGradient.DEFAULT,
        'accent-bg-80': themeConstants.backgroundImages.accentGradient[80],
        'accent-bg-60': themeConstants.backgroundImages.accentGradient[60],
        'accent-bg-40': themeConstants.backgroundImages.accentGradient[40],
        'accent-bg-20': themeConstants.backgroundImages.accentGradient[20],
        'accent-bg-6': themeConstants.backgroundImages.accentGradient[6],
        'accent-bg-intensive':
          themeConstants.backgroundImages.accentGradient.intensive,
        'accent-text-gradient':
          'linear-gradient(254deg, #8729fa -142.88%, #2b0075 175.67%)',
        'top-white-fade':
          'linear-gradient(180deg, #FAFAFC 0%, rgba(250, 250, 252, 0) 100%)',
        'bottom-white-fade':
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FAFAFC 100%)',
        'loading-gradient': `linear-gradient(180deg, rgba(255, 255, 255, 0) -0%,
        rgba(255, 255, 255, 0.8) 5%, rgba(255, 255, 255, 0.8) 63.9%,
        rgba(255, 255, 255, 0.8) 94.11%, rgba(255, 255, 255, 0) 100%)`,
        'bottom-transparent-fade':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 24.48%, #000000 100%)',
        'bottom-to-transparent':
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 25%)',
        'background-gradient':
          'linear-gradient(180deg, #FFFFFF -3.39%, #F9FAFB 30.74%)',
        'black-to-transparent-studio-landing-fade':
          'linear-gradient(0deg, #121216 41.1%, rgba(9, 9, 9, 0.00) 105.09%)',
        'body-bg': themeConstants.backgroundImages.bodyGradient,
        'landing-divider-bg': `linear-gradient(90deg, rgba(255, 255, 255, 0.00) 4.61%,
          rgba(255, 255, 255, 0.11) 32.28%,
          rgba(255, 255, 255, 0.00) 100%)`,
        'landing-h-accent-gradient':
          'linear-gradient(254deg, #8729FA -142.88%, #2B0075 175.67%)',
        'accent-gradient':
          'linear-gradient(to right, rgb(131,52,218), rgb(68,9,215))',
        'top-transparent-fade':
          'linear-gradient(360deg, #121212 72.18%, rgba(18, 18, 18, 0.88) 77.3%, rgba(18, 18, 18, 0) 99.42%)',
        'listing-card-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.40) -7.86%, rgba(0, 0, 0, 0.00) 35.85%)',
      },
      boxShadow: {
        // OLD deprecated
        top: '0px -4px 24px rgba(75, 78, 83, 0.1)',
        'rounded-block': themeConstants.shadows['rounded-block'],
        'file-card': themeConstants.shadows.fileCard,
        'plus-button-card': themeConstants.shadows.plusButtonCard,
        accordion: '-12px 4px 24px 0px rgba(132, 144, 163, 0.16)',
        accordionDark: '-12px 4px 24px 0px rgba(132, 144, 163, 0.08)',
        chips: '0px 0px 0px 2px #D9CEEA',

        // UPDATED
        // use this only, if you see another shadows, contact designers to fix this
        card: themeConstants.shadows.card,
        button: themeConstants.shadows.button,
        three: themeConstants.shadows.three,

        xs: themeConstants.shadows.xs,
        sm: themeConstants.shadows.sm,
        md: themeConstants.shadows.md,
        lg: themeConstants.shadows.lg,
      },
      fontFamily: themeConstants.fontFamily,
      keyframes: {
        slide: {
          '0%': { height: '100vh' },
          '100%': {
            transform: 'scaleY(0)',
          },
        },
      },
      scale: {
        flip: '-1',
      },
      spacing: {
        header: '4.5rem',
        'sm-header': '3.75rem',
        'header-title': '2.5rem',
        'title-content': '3rem',
        'mobile-title-content': '1.5rem',
        'section-gap': '5rem',
        'mobile-section-gap': '2.75rem',
        'screen-without-header': 'calc(100vh - 4.5rem)',
        'screen-without-es-header': 'calc(100vh - 5.25rem)',
        'screen-without-sm-header': 'calc(100dvh - 3.75rem)',
      },
      dropShadow: {
        xs: themeConstants.dropShadows.xs,
        sm: themeConstants.dropShadows.sm,
        md: themeConstants.dropShadows.md,
      },
    },
  },
  plugins: [gridAreasPlugin, textFillPlugin],
  corePlugins: {
    preflight: false,
  },
};
