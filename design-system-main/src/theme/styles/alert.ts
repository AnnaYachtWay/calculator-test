/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';
import themeConstants from '../constants';

export const getAlertStyles = (theme: Theme): Components['MuiAlert'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
  },
  variants: [
    {
      props: { variant: 'filled' },
      style: {
        backgroundColor: themeConstants.colors.primary.black[80],
        color: themeConstants.colors.primary.white.DEFAULT,
      },
    },
  ],
});
