/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getLinearProgressStyles = (
  theme: Theme,
): Components['MuiLinearProgress'] => ({
  styleOverrides: {
    root: {
      backgroundColor: themeConstants.colors.primary.gray[20],
      borderRadius: 2,
    },
    bar: {
      backgroundColor: themeConstants.colors.primary.black.DEFAULT,
      borderRadius: 2,
    },
  },

  variants: [
    {
      props: { variant: 'indeterminate' },
      style: {
        height: 6,
        backgroundColor: themeConstants.colors.primary.gray[20],
        borderRadius: 27,
        '& .MuiLinearProgress-bar': {
          backgroundColor: themeConstants.colors.primary.accent.DEFAULT,
          borderRadius: 27,
        },
      },
    },
  ],
});
