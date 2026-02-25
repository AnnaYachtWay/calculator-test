/* eslint-disable @typescript-eslint/no-unused-vars */
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

const checkboxIcon = (
  <span className="tick-field">
    <CheckRoundedIcon />
  </span>
);

export const getCheckboxStyles = (theme: Theme): Components['MuiCheckbox'] => ({
  styleOverrides: {
    root: {
      padding: 12,
      borderRadius: 4,
      ':hover': {
        color: themeConstants.colors.primary.accent.DEFAULT,
        background: 'none',
        ' > span.tick-field': {
          color: themeConstants.colors.primary.accent[20],
          borderColor: themeConstants.colors.primary.accent.DEFAULT,
        },
      },
      ':active > span.tick-field': {
        color: themeConstants.colors.primary.accent.DEFAULT,
        borderColor: themeConstants.colors.primary.accent.DEFAULT,
      },
      '&.MuiCheckbox-indeterminate': {
        color: themeConstants.colors.primary.accent.DEFAULT,
        borderColor: themeConstants.colors.primary.accent.DEFAULT,
      },
      '&.Mui-checked > span.tick-field': {
        color: themeConstants.colors.primary.accent.DEFAULT,
        borderColor: themeConstants.colors.primary.accent.DEFAULT,
      },
      '&.Mui-disabled': {
        '> span.tick-field': {
          color: 'transparent',
          background: themeConstants.colors.primary.white[60],
          borderColor: themeConstants.colors.primary.black[20],
        },
        '&.Mui-checked > span.tick-field': {
          color: themeConstants.colors.primary.black[40],
        },
      },
      '& > span.tick-field': {
        display: 'flex',
        height: 20,
        width: 20,
        color: themeConstants.colors.primary.white.DEFAULT,
        backgroundColor: themeConstants.colors.primary.white.DEFAULT,
        border: `2px solid ${themeConstants.colors.primary.gray[20]}`,
        borderRadius: 4,
        transition: 'color 300ms, border 300ms',
      },
      '& > span.tick-field svg': {
        fontSize: 16,
      },
      '& .MuiTouchRipple-root': {
        maxHeight: 24,
        maxWidth: 24,
        transform: 'translate(10px, 10px)',
        zIndex: -1,
      },
      '& .MuiTouchRipple-root .MuiTouchRipple-child': {
        borderRadius: 2,
      },
    },
  },
  defaultProps: {
    icon: checkboxIcon,
    checkedIcon: checkboxIcon,
  },
});
