/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getDividerStyles = (theme: Theme): Components['MuiDivider'] => ({
  styleOverrides: {
    root: {
      '.MuiDivider-wrapper': {
        paddingLeft: '2rem',
        paddingRight: '2rem',
        color: themeConstants.colors.primary.gray[60],
        fontSize: '10px',
        lineHeight: '20px',
      },
      '&::before, &::after': {
        position: 'unset', // check why it's broken
        borderColor: themeConstants.colors.primary.gray[20],
      },
    },
  },
});
