/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getLinkStyles = (theme: Theme): Components['MuiLink'] => ({
  styleOverrides: {
    root: {
      color: themeConstants.colors.primary.black.DEFAULT,
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
});
