/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

export const getCardContentStyles = (
  theme: Theme,
): Components['MuiCardContent'] => ({
  styleOverrides: {
    root: {
      padding: '24px 28px',
    },
  },
});
