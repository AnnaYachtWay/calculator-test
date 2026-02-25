import type { Theme, TypographyVariants } from '@mui/material';

import themeConstants from '../constants';

const getNewTypography = (theme: Theme): Partial<TypographyVariants> => ({
  'headlines-4xl': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 72,
      lineHeight: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 76,
      lineHeight: '114px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 92,
      lineHeight: '136px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 100,
      lineHeight: '140px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 120,
      lineHeight: '180px',
    },
    fontSize: 64,
    lineHeight: '96px',
  },
  'headlines-3xl': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 64,
      lineHeight: '96px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 68,
      lineHeight: '102px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 72,
      lineHeight: '108px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 80,
      lineHeight: '120px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 100,
      lineHeight: '140px',
    },
    fontSize: 56,
    lineHeight: '84px',
  },
  'headlines-2xl': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 56,
      lineHeight: '84px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 56,
      lineHeight: '84px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 60,
      lineHeight: '90px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 68,
      lineHeight: '100px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 80,
      lineHeight: '120px',
    },
    fontSize: 48,
    lineHeight: '72px',
  },
  'headlines-xl': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
      lineHeight: '66px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 48,
      lineHeight: '72px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 48,
      lineHeight: '72px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 56,
      lineHeight: '84px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 64,
      lineHeight: '96px',
    },
    fontSize: 40,
    lineHeight: '60px',
  },
  'headlines-lg': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 36,
      lineHeight: '52px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
      lineHeight: '52px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 36,
      lineHeight: '52px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 44,
      lineHeight: '64px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 48,
      lineHeight: '72px',
    },
    fontSize: 32,
    lineHeight: '48px',
  },
  'headlines-md': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 32,
      lineHeight: '48px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
      lineHeight: '48px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 32,
      lineHeight: '48px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 36,
      lineHeight: '52px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 40,
      lineHeight: '60px',
    },
    fontSize: 28,
    lineHeight: '40px',
  },
  'headlines-sm': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 32,
      lineHeight: '48px',
    },
    fontSize: 24,
    lineHeight: '36px',
  },
  'headlines-xs': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 28,
      lineHeight: '40px',
    },
    fontSize: 20,
    lineHeight: '28px',
  },
  'headlines-2xs': {
    fontFamily: themeConstants.fontFamily.poppins.join(','),
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
    [theme.breakpoints.up('xxl')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    fontSize: 18,
    lineHeight: '28px',
  },
  'text-xs': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },
  'text-sm': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  'text-md': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
  },
  'text-lg': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '28px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 20,
      lineHeight: '28px',
    },
  },
  'text-xl': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '28px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 24,
      lineHeight: '32px',
    },
  },
  'caption-sm': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  'caption-xs': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },
  'caption-md': {
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.up('fullHD')]: {
      fontSize: 18,
      lineHeight: '24px',
    },
  },
});

export default getNewTypography;
