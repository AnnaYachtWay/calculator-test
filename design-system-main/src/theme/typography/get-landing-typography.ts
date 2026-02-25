import type { Theme, TypographyVariants } from '@mui/material';

import themeConstants from '../constants';

const getLandingTypography = (theme: Theme): Partial<TypographyVariants> => ({
  'landing-h1': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 108,
    lineHeight: '108px',
    letterSpacing: '-0.0135rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 100,
      lineHeight: '108px',
      letterSpacing: '-0.0125rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 40,
      lineHeight: '42px',
      letterSpacing: '-0.05rem',
    },
  },
  'landing-h2': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 96,
    lineHeight: '116px',
    letterSpacing: '-0.12rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 92,
      lineHeight: '116px',
      letterSpacing: '-0.115rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
      lineHeight: '42px',
      letterSpacing: '-0.045rem',
    },
  },
  'landing-h3': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 80,
    lineHeight: '96px',
    letterSpacing: '-0.1rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 72,
      lineHeight: '83px',
      letterSpacing: '-0.09rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '40px',
      letterSpacing: '-0.04rem',
    },
  },
  'landing-h4': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 600,
    fontSize: 36,
    lineHeight: '48px',
    letterSpacing: '-0.09rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 28,
      lineHeight: '40px',
      letterSpacing: '-0.07rem',
      fontWeight: 500,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px',
      letterSpacing: '-0.05rem',
      fontWeight: 500,
    },
  },
  'landing-h5': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '40px',
    letterSpacing: '-0.09rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 20,
      lineHeight: '36px',
      letterSpacing: '-0.025rem',
      fontWeight: 500,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '-0.0225rem',
      fontWeight: 500,
    },
  },
  'landing-price-title': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 700,
    fontSize: 44,
    lineHeight: '56px',
    letterSpacing: '-0.11rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 34,
      lineHeight: '48px',
      letterSpacing: '-0.085rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '56px',
      letterSpacing: '-0.08rem',
    },
  },
  'landing-subtitle': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 22,
    lineHeight: '28px',
    letterSpacing: '-0.0275rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 20,
      lineHeight: '36px',
      letterSpacing: '-0.025rem',
      fontWeight: 500,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '-0.0225rem',
      fontWeight: 500,
    },
  },
  'landing-subtitle2': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: '0.045rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.07rem',
      fontWeight: 700,
    },
    [theme.breakpoints.down('md')]: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.04rem',
    },
  },
  'landing-body-medium': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: '-0.04rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '-0.035rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '-0.035rem',
    },
  },
  'landing-body2': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '16px',
    letterSpacing: '-0.04rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '-0.035rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '20px',
      letterSpacing: '-0.03rem',
    },
  },
});

export default getLandingTypography;
