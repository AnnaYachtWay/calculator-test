/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';

export const getSnackbarStyles = (theme: Theme): Components['MuiSnackbar'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
  },
});
