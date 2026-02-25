/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getFormHelperTextStyles = (
  theme: Theme,
): Components['MuiFormHelperText'] => ({
  styleOverrides: {
    root: {
      fontFamily: themeConstants.fontFamily.figtree.join(','),
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '20px',
      color: themeConstants.colors.primary.black.DEFAULT,
      marginLeft: 0,
      textTransform: 'none',

      '@media (max-width: 640px)': {
        fontSize: '12px',
      },
    },
  },
});
