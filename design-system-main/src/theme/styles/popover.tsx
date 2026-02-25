/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';

export const getPopoverStyles = (theme: Theme): Components['MuiPopover'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
    anchorOrigin: {
      horizontal: 'center',
      vertical: 'bottom',
    },
    transformOrigin: {
      horizontal: 'center',
      vertical: 'top',
    },
    componentsProps: {
      backdrop: {
        style: { background: 'none', backdropFilter: 'none' },
      },
    },
  },
  styleOverrides: {
    root: {
      marginTop: 3,
      '& .MuiPaper-root': {
        maxHeight: 'fit-content',
        backgroundImage: 'initial',
      },
    },
  },
});
