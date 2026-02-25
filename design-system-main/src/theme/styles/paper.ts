/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getPaperStyles = (theme: Theme): Components['MuiPaper'] => ({
  styleOverrides: {
    root: {
      '&.MuiPaper-elevation1': {
        boxShadow: themeConstants.shadows.card,
      },
      '&.MuiPaper-elevation2': {
        boxShadow: themeConstants.shadows.plusButtonCard,
      },
    },
  },
});
