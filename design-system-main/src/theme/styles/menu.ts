/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import { fontVariablesString } from '../../fonts';
import themeConstants from '../constants';

export const getMenuStyles = (theme: Theme): Components['MuiMenu'] => ({
  defaultProps: {
    classes: {
      root: fontVariablesString,
    },
  },
  styleOverrides: {
    paper: {
      '.MuiList-root': {
        padding: '4px 0',
        // height of menu item - 40, margin - 8, multiplied by 6.5, for cases when there are more then 6
        // items, so that it clearly shows it's scrollable
        maxHeight: `${(40 + 8) * 6.5}px`,

        '& .MuiMenuItem-root': {
          display: 'flex',
          gap: '0.75rem',
          backgroundColor: 'transparent',
          fontFamily: themeConstants.fontFamily.figtree.join(','),
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          '&:not(:last-child)': {
            marginBottom: '0.5rem',
          },
          padding: '0.5rem 1rem',
          '&:hover, &.Mui-selected': {
            position: 'relative',
            color: themeConstants.colors.primary.accent.DEFAULT,
            backgroundColor: themeConstants.colors.primary.gray[4],
          },
          '&>svg': {
            flexShrink: 0,
          },
        },
      },
    },
  },
});

export const getMenuItemStyles = (theme: Theme): Components['MuiMenuItem'] => ({
  styleOverrides: {
    root: {
      '&:hover, &.Mui-selected, &.Mui-selected:hover': {
        position: 'relative',
        color: themeConstants.colors.primary.accent.DEFAULT,
        backgroundColor: themeConstants.colors.primary.gray[4],
      },
    },
  },
});
