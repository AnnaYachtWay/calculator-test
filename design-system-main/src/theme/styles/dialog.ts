/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';

export const getDialogStyles = (theme: Theme): Components['MuiDialog'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
  },
});
