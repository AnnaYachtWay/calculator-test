/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';
import themeConstants from '../constants';

export const getDrawerStyles = (theme: Theme): Components['MuiDrawer'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
  },
  styleOverrides: {
    root: {
      '& .MuiBackdrop-root': {
        backgroundColor: themeConstants.colors.primary.black[20],
      },
    },
  },
});
