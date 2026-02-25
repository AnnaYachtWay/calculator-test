/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getCircularProgressStyles = (
  theme: Theme,
): Components['MuiCircularProgress'] => ({
  styleOverrides: {
    root: {
      color: themeConstants.colors.primary.accent.DEFAULT,
    },
  },
});
