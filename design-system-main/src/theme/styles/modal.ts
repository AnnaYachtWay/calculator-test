/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';

export const getModalStyles = (theme: Theme): Components['MuiModal'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
  },
});
