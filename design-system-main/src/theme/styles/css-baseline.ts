/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getCssBaselineStyles = (
  theme: Theme,
): Components['MuiCssBaseline'] => ({
  styleOverrides: {
    body: {
      background: themeConstants.backgroundImages.bodyGradient,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
  },
});
