/* eslint-disable @typescript-eslint/no-unused-vars */
import { type Theme, type Components, alpha } from '@mui/material';

import themeConstants from '../constants';

const getRootLegacyButtonStyles = (theme: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 24px',
  fontFamily: themeConstants.fontFamily.figtree.join(','),
  fontWeight: 500,
  lineHeight: '24px',

  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },

  '&.MuiButton-sizeSmall': {
    height: '44px',
    padding: '8px 12px',
    fontSize: '16px',

    [theme.breakpoints.down('sm')]: {
      height: '40px',
      fontSize: '12px',
    },
  },
  '&.MuiButton-sizeMedium': {
    height: '40px',
    fontSize: '14px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      letterSpacing: '-0.04em',
    },
  },
  '&.MuiButton-sizeLarge': {
    height: '44px',
    padding: '12px 32px',
    fontSize: '16px',

    [theme.breakpoints.down('sm')]: {
      padding: '12px 24px',
      fontSize: '14px',
    },
  },
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
  },
});

const getLegacyButtonStyles = (theme: Theme): Components['MuiButton'] => ({
  variants: [
    {
      props: { variant: 'filled-outlined' },
      style: {
        ...getRootLegacyButtonStyles(theme),
        outline: `1px ${themeConstants.colors.primary.white[4]} solid`,
        outlineOffset: '-1px',
        backgroundColor: themeConstants.colors.primary.accent[4],
        color: themeConstants.colors.primary.white.DEFAULT,
        border: `1px ${themeConstants.colors.primary.accent[4]} solid`,
        '&:hover': {
          outline: `2px ${themeConstants.colors.primary.accent[20]} solid`,
          border: `1px ${themeConstants.colors.primary.accent[40]} solid`,
        },
        '&:active': {
          borderColor: themeConstants.colors.primary.accent.DEFAULT,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.primary.gray.DEFAULT,
        },
      },
    },
    {
      props: { variant: 'filled' },
      style: {
        ...getRootLegacyButtonStyles(theme),
        outline: `1px ${themeConstants.colors.primary.white[20]} solid`,
        outlineOffset: '-1px',
        backgroundColor: themeConstants.colors.primary.black.DEFAULT,
        color: themeConstants.colors.primary.white.DEFAULT,
        '&:hover': {
          backgroundColor: themeConstants.colors.primary.black[80],
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.primary.black[20],
        },
      },
    },
    {
      props: { variant: 'text' },
      style: {
        ...getRootLegacyButtonStyles(theme),
        color: themeConstants.colors.primary.black.DEFAULT,
        lineHeight: '100%',
        height: 'auto',
        padding: 0,

        '&:hover': {
          color: themeConstants.colors.primary.accent.DEFAULT,
          background: 'none',
        },

        '&:disabled': {
          color: themeConstants.colors.primary.gray[60],
        },

        '& > .MuiTouchRipple-root': {
          display: 'none',
        },

        '&.MuiButton-sizeMedium': {
          height: 'auto',
          fontSize: '16px',

          [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
          },
        },
        '&.MuiButton-sizeLarge': {
          height: 'auto',
          fontSize: '18px',

          [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
          },
        },
      },
    },
  ],
  styleOverrides: {
    contained: {
      ...getRootLegacyButtonStyles(theme),
      outline: `1px ${themeConstants.colors.primary.white[20]} solid`,
      outlineOffset: '-1px',
      background: themeConstants.backgroundImages.accentGradient.DEFAULT,
      color: themeConstants.colors.primary.white.DEFAULT,

      '&:hover': {
        background: themeConstants.backgroundImages.accentGradient[80],
      },
      '&:disabled': {
        background: themeConstants.backgroundImages.accentGradient[20],
        color: themeConstants.colors.primary.white[80],
      },
    },
    outlined: {
      ...getRootLegacyButtonStyles(theme),
      background: themeConstants.colors.primary.white.DEFAULT,
      color: themeConstants.colors.primary.black.DEFAULT,
      border: `1px solid ${themeConstants.colors.primary.black.DEFAULT}`,

      '&:hover': {
        background: themeConstants.colors.primary.white.DEFAULT,
        color: themeConstants.colors.primary.black.DEFAULT,
        border: `1px solid ${themeConstants.colors.primary.black.DEFAULT}`,
      },
      '&:active': {
        background: themeConstants.backgroundImages.accentGradient[6],
      },
      '&:disabled': {
        background: themeConstants.colors.primary.white.DEFAULT,
        color: themeConstants.colors.primary.gray[20],
        border: `1px solid ${themeConstants.colors.primary.gray[20]}`,
      },
    },
  },
});

const getRootNewButtonStyles = (theme: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',

  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },

  '&.MuiButton-sizeLarge': {
    ...theme.typography['text-xl'],
    padding: '14px 24px',
    height: '56px',
    '& .MuiButton-startIcon svg, & .MuiButton-endIcon svg': {
      width: '28px',
      height: '28px',
    },
  },
  '&.MuiButton-sizeMedium': {
    ...theme.typography['text-lg'],
    padding: '10px 20px',
    height: '48px',
    '& .MuiButton-startIcon svg, & .MuiButton-endIcon svg': {
      width: '24px',
      height: '24px',
    },
  },
  '&.MuiButton-sizeSmall': {
    ...theme.typography['text-md'],
    padding: '8px 20px',
    height: '40px',
    '& .MuiButton-startIcon svg, & .MuiButton-endIcon svg': {
      width: '20px',
      height: '20px',
    },
  },
  '&.MuiButton-sizeExtraSmall': {
    ...theme.typography['text-sm'],
    padding: '8px 16px',
    height: '36px',
    '& .MuiButton-startIcon svg, & .MuiButton-endIcon svg': {
      width: '16px',
      height: '16px',
    },
  },
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
  },
});

const getNewButtonStyles = (theme: Theme): Components['MuiButton'] => ({
  variants: [
    // new
    {
      props: { variant: 'new-filled' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.brand[700],
        color: themeConstants.colors.n.base.white,
        border: `1px ${themeConstants.colors.n.alpha.white[20]} solid`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.brand[600],
          color: themeConstants.colors.n.base.white,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.brand[700],
          color: themeConstants.colors.n.base.white,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.brand[600],
          color: themeConstants.colors.n.base.white,
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.brand[200],
          color: themeConstants.colors.n.base.white,
        },
      },
    },
    {
      props: { variant: 'new-filled', color: 'basic' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.gray[900],
        color: themeConstants.colors.n.base.white,
        border: `1px ${themeConstants.colors.n.alpha.white[20]} solid`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.gray[600],
          color: themeConstants.colors.n.base.white,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.gray[900],
          color: themeConstants.colors.n.base.white,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.gray[600],
          color: themeConstants.colors.n.base.white,
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.gray[300],
          color: themeConstants.colors.n.base.white,
        },
      },
    },
    {
      props: { variant: 'new-filled', color: 'transparent' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.alpha.black[40],
        color: themeConstants.colors.n.base.white,
        border: `1px ${themeConstants.colors.n.alpha.white[30]} solid`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.alpha.black[50],
          color: themeConstants.colors.n.base.white,
          border: `1px ${themeConstants.colors.n.alpha.white[40]} solid`,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.alpha.black[50],
          color: themeConstants.colors.n.base.white,
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.alpha.black[80],
          color: themeConstants.colors.n.base.white,
          border: `1px ${themeConstants.colors.n.alpha.white[80]} solid`,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.alpha.black[20],
          color: themeConstants.colors.n.alpha.white[40],
          border: `1px ${themeConstants.colors.n.alpha.white[20]} solid`,
        },
      },
    },
    {
      props: { variant: 'new-text' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.base.transparent,
        color: themeConstants.colors.n.gray[800],
        border: `1px solid ${themeConstants.colors.n.base.transparent}`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.gray[50],
          border: `1px solid ${themeConstants.colors.n.gray[100]}`,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.gray[50],
          border: `1px solid ${themeConstants.colors.n.gray[100]}`,
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.gray[100],
          border: `1px solid ${themeConstants.colors.n.gray[100]}`,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.base.transparent,
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          color: themeConstants.colors.n.gray[100],
        },
      },
    },
    {
      props: { variant: 'new-link' },
      style: {
        ...getRootNewButtonStyles(theme),
        color: themeConstants.colors.n.brand[700],
        backgroundColor: themeConstants.colors.n.base.transparent,
        padding: '0 !important',
        height: 'auto !important',
        width: 'auto !important',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
          textDecoration: 'underline',
        },
        '&:hover': {
          color: themeConstants.colors.n.brand[600],
          backgroundColor: themeConstants.colors.n.base.transparent,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.alpha.black[0],
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
          textDecoration: 'none',
        },
        '&:active': {
          color: themeConstants.colors.n.brand[700],
          textDecoration: 'none',
        },
        '&:disabled': {
          color: themeConstants.colors.n.gray[300],
          textDecoration: 'none',
        },
      },
    },
    {
      props: { variant: 'new-link', color: 'basic' },
      style: {
        ...getRootNewButtonStyles(theme),
        color: themeConstants.colors.n.gray[800],
        backgroundColor: themeConstants.colors.n.base.transparent,
        padding: '0 !important',
        height: 'auto !important',
        width: 'auto !important',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
          textDecoration: 'underline',
        },
        '&:hover': {
          color: themeConstants.colors.n.gray[500],
          backgroundColor: themeConstants.colors.n.base.transparent,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.alpha.black[0],
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
          textDecoration: 'none',
        },
        '&:active': {
          color: themeConstants.colors.n.gray[800],
          textDecoration: 'none',
        },
        '&:disabled': {
          color: themeConstants.colors.n.gray[300],
          textDecoration: 'none',
        },
      },
    },
    {
      props: { variant: 'new-ghost' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.base.transparent,
        color: themeConstants.colors.n.brand[700],
        border: `1px solid ${themeConstants.colors.n.brand[100]}`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.brand[25],
          border: `1px solid ${themeConstants.colors.n.brand[200]}`,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.brand[25],
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.alpha.white[10],
          border: `1px solid ${themeConstants.colors.n.brand[100]}`,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.alpha.white[10],
          border: `1px solid ${themeConstants.colors.n.brand[100]}`,
          color: themeConstants.colors.n.brand[200],
        },
      },
    },
    {
      props: { variant: 'new-ghost', color: 'basic' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.base.transparent,
        color: themeConstants.colors.n.gray[800],
        border: `1px solid ${themeConstants.colors.n.gray[800]}`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.gray[25],
          border: `1px solid ${themeConstants.colors.n.gray[800]}`,
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.gray[25],
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.alpha.white[10],
          border: `1px solid ${themeConstants.colors.n.gray[900]}`,
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.alpha.white[10],
          border: `1px solid ${themeConstants.colors.n.gray[100]}`,
          color: themeConstants.colors.n.gray[300],
        },
      },
    },
    {
      props: { variant: 'new-ghost', color: 'transparent' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.base.transparent,
        color: themeConstants.colors.n.gray[500],
        border: `1px solid ${themeConstants.colors.n.gray[100]}`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.alpha.black[10],
          border: `1px solid ${themeConstants.colors.n.gray[200]}`,
          color: themeConstants.colors.n.gray[700],
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.alpha.black[10],
          border: `1px solid ${themeConstants.colors.n.gray[200]}`,
          color: themeConstants.colors.n.gray[700],
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.brand[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.base.transparent,
          border: `1px solid ${themeConstants.colors.n.gray[200]}`,
          color: themeConstants.colors.n.gray[700],
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.base.transparent,
          border: `1px solid ${themeConstants.colors.n.gray[200]}`,
          color: themeConstants.colors.n.gray[300],
        },
      },
    },
    {
      props: { variant: 'new-danger-filled' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.secondary.error[700],
        color: themeConstants.colors.n.base.white,
        border: `1px ${themeConstants.colors.n.alpha.white[20]} solid`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.secondary.error[600],
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.secondary.error[600],
          // eslint-disable-next-line max-len
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.secondary.error[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.secondary.error[700],
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.secondary.error[100],
          border: `1px ${themeConstants.colors.n.alpha.white[20]} solid`,
          color: themeConstants.colors.n.secondary.error[300],
        },
      },
    },
    {
      props: { variant: 'new-danger-filled', color: 'basic' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.secondary.error[50],
        color: themeConstants.colors.n.secondary.error[700],
        border: `1px ${themeConstants.colors.n.secondary.error[400]} solid`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.secondary.error[100],
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.secondary.error[100],
          // eslint-disable-next-line max-len
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.secondary.error[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.secondary.error[50],
        },
        '&:disabled': {
          backgroundColor: themeConstants.colors.n.secondary.error[50],
          border: `1px ${themeConstants.colors.n.secondary.error[200]} solid`,
          color: themeConstants.colors.n.secondary.error[300],
        },
      },
    },
    {
      props: { variant: 'new-danger-filled', color: 'transparent' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: alpha(
          themeConstants.colors.n.secondary.error[700],
          0.4,
        ),
        color: themeConstants.colors.n.base.white,
        border: `1px ${themeConstants.colors.n.alpha.white[30]} solid`,
        backdropFilter: 'blur(8px)',
        '&:hover': {
          backgroundColor: alpha(
            themeConstants.colors.n.secondary.error[700],
            0.5,
          ),
          border: `1px ${themeConstants.colors.n.alpha.white[40]} solid`,
        },
        '&:focus-visible': {
          backgroundColor: alpha(
            themeConstants.colors.n.secondary.error[700],
            0.5,
          ),
          border: `1px ${themeConstants.colors.n.alpha.white[40]} solid`,
          // eslint-disable-next-line max-len
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.secondary.error[400]}`,
        },
        '&:active': {},
        '&:disabled': {
          backgroundColor: alpha(
            themeConstants.colors.n.secondary.error[700],
            0.2,
          ),
          color: themeConstants.colors.n.alpha.white[40],
          border: `1px ${themeConstants.colors.n.alpha.white[20]} solid`,
        },
      },
    },
    {
      props: { variant: 'new-danger-text' },
      style: {
        ...getRootNewButtonStyles(theme),
        backgroundColor: themeConstants.colors.n.base.transparent,
        color: themeConstants.colors.n.secondary.error[700],
        border: `1px solid ${themeConstants.colors.n.base.transparent}`,
        '&:hover': {
          backgroundColor: themeConstants.colors.n.secondary.error[50],
        },
        '&:focus-visible': {
          backgroundColor: themeConstants.colors.n.secondary.error[50],
          // eslint-disable-next-line max-len
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.secondary.error[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.secondary.error[50],
        },
        '&:disabled': {
          color: themeConstants.colors.n.secondary.error[300],
        },
      },
    },
    {
      props: { variant: 'new-danger-link' },
      style: {
        ...getRootNewButtonStyles(theme),
        color: themeConstants.colors.n.secondary.error[700],
        backgroundColor: themeConstants.colors.n.base.transparent,
        padding: '0 !important',
        height: 'auto !important',
        width: 'auto !important',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
          textDecoration: 'underline',
        },
        '&:hover': {
          textDecoration: 'underline',
          backgroundColor: themeConstants.colors.n.base.transparent,
        },
        '&:focus-visible': {
          backgroundColor: alpha(themeConstants.colors.n.base.white, 0.01),
          // eslint-disable-next-line max-len
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.secondary.error[400]}`,
          textDecoration: 'none',
        },
        '&:active': {
          textDecoration: 'none',
        },
        '&:disabled': {
          color: themeConstants.colors.n.secondary.error[300],
          textDecoration: 'none',
        },
      },
    },
    {
      props: { variant: 'new-danger-ghost' },
      style: {
        ...getRootNewButtonStyles(theme),
        color: themeConstants.colors.n.secondary.error[700],
        backgroundColor: themeConstants.colors.n.base.transparent,
        border: `1px solid ${themeConstants.colors.n.secondary.error[700]}`,
        '&:hover': {
          color: themeConstants.colors.n.secondary.error[700],
          backgroundColor: themeConstants.colors.n.secondary.error[50],
          border: `1px solid ${themeConstants.colors.n.secondary.error[600]}`,
        },
        '&:focus-visible': {
          color: themeConstants.colors.n.secondary.error[700],
          backgroundColor: themeConstants.colors.n.secondary.error[50],
          border: `1px solid ${themeConstants.colors.n.base.transparent}`,
          // eslint-disable-next-line max-len
          boxShadow: `0 0 0 2px ${themeConstants.colors.n.base.white}, 0 0 0 4px ${themeConstants.colors.n.secondary.error[400]}`,
        },
        '&:active': {
          backgroundColor: themeConstants.colors.n.alpha.white[10],
        },
        '&:disabled': {
          color: themeConstants.colors.n.secondary.error[300],
          border: `1px solid ${themeConstants.colors.n.secondary.error[300]}`,
        },
      },
    },
  ],
});

export const getButtonStyles = (theme: Theme): Components['MuiButton'] => ({
  variants: [
    ...(getNewButtonStyles(theme)?.variants || []),
    ...(getLegacyButtonStyles(theme)?.variants || []),
  ],
  styleOverrides: {
    ...(getNewButtonStyles(theme)?.styleOverrides || {}),
    ...(getLegacyButtonStyles(theme)?.styleOverrides || {}),
  },
});

export const getIconButtonStyles = (
  theme: Theme,
): Components['MuiIconButton'] => ({
  styleOverrides: {
    root: {
      '&.MuiIconButton-sizeMedium': {
        height: '44px',
        width: '44px',
      },
      '&.MuiIconButton-sizeLarge': {
        height: '44px',
        width: '44px',
      },
    },
  },
});
