import type { Theme, TypographyVariants } from '@mui/material';

import themeConstants from '../constants';

const getTypography = (theme: Theme): Partial<TypographyVariants> => ({
  h1: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 64,
    lineHeight: '82px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 56,
      lineHeight: '64px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 48,
      lineHeight: '56px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 48,
      lineHeight: '64px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '44px',
      letterSpacing: 0,
    },
  },
  h2: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 56,
    lineHeight: '64px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 44,
      lineHeight: '56px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 34,
      lineHeight: '48px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 36,
      lineHeight: '56px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
  },
  h3: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 600,
    fontSize: 42,
    lineHeight: '48px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 36,
      lineHeight: '48px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 32,
      lineHeight: '44px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
  },
  h4: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 32,
    lineHeight: '40px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
  },
  h5: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 28,
    lineHeight: '32px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 24,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px',
      letterSpacing: '-0.04em',
    },
  },
  'display-h1': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    fontSize: 44,
    lineHeight: '56px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      lineHeight: '36px',
    },
  },
  'display-h2': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    fontSize: 56,
    lineHeight: '64px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 36,
      lineHeight: '48px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 34,
      lineHeight: '64px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 36,
      lineHeight: '56px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
  },
  'display-h3': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    fontSize: 42,
    lineHeight: '48px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 32,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 32,
      lineHeight: '44px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
  },
  'display-h4': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    fontSize: 32,
    lineHeight: '40px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
  },
  'display-h5': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    fontSize: 28,
    lineHeight: '32px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 24,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 24,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px',
    },
  },
  subtitle1: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 26,
    lineHeight: '36px',
    letterSpacing: 0,
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 22,
      lineHeight: '28px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 20,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 18,
      lineHeight: '22px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
  },
  subtitle2: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '36px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  body1: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '28px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '20px',
    },
  },
  'body1-medium': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '24px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '20px',
    },
  },
  body2: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 15,
    lineHeight: '20px',
    letterSpacing: '-0.04em',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 14,
      lineHeight: '21px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 13,
      lineHeight: '20px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 13,
      lineHeight: '20px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0,
    },
  },
  'body2-regular': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.04em',
  },
  body3: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '14px',
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '20px',
    },
  },
  button: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '24px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
  },
  button2: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
      lineHeight: '24px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '24px',
    },
  },
  link: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 26,
    lineHeight: '36px',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 22,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 20,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 18,
      lineHeight: '32px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
  },
  caption: {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: '-0.04em',
    textTransform: 'uppercase',
    [theme.breakpoints.down('fullHD')]: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.04em',
    },
    [theme.breakpoints.down('xxl')]: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.04em',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 12,
      lineHeight: '24px',
      letterSpacing: 0,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '-0.04em',
    },
  },
});

export default getTypography;
