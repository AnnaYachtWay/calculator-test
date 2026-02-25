/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getTabsStyles = (theme: Theme): Components['MuiTabs'] => ({
  styleOverrides: {
    root: {
      minHeight: '30px',
      '& .MuiTabs-scroller': {
        overflow: 'unset',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderBottom: `2px solid ${themeConstants.colors.primary.gray[4]}`,
          borderRadius: '30px',
        },
      },
      '& .MuiTabs-indicator': {
        backgroundColor: themeConstants.colors.primary.accent.DEFAULT,
        borderRadius: '30px',
      },
    },
  },
});

export const getTabStyles = (theme: Theme): Components['MuiTab'] => ({
  styleOverrides: {
    root: {
      minWidth: 'unset',
      minHeight: '30px',
      padding: '2px 0',
      ':not(:last-child)': {
        marginRight: '24px',
      },
      color: themeConstants.colors.primary.gray[80],
      fontFamily: themeConstants.fontFamily.figtree.join(','),
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      transition: 'color 0.2s ease-in-out',

      '&.Mui-selected': {
        color: themeConstants.colors.primary.black.DEFAULT,
      },
    },
  },
  defaultProps: {
    disableRipple: true,
  },
});
