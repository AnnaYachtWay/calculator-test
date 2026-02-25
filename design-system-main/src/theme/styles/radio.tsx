/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

const radioIcon = (
  <span className="radio-field">
    <span className="radio-circle" />
  </span>
);

export const getRadioStyles = (theme: Theme): Components['MuiRadio'] => ({
  styleOverrides: {
    root: {
      padding: 12,
      ':hover': {
        color: themeConstants.colors.primary.accent.DEFAULT,
        background: 'none',
        '> span.radio-field': {
          borderColor: themeConstants.colors.primary.accent.DEFAULT,
          '> span.radio-circle': {
            backgroundColor: themeConstants.colors.primary.accent[20],
          },
        },
      },
      ':active > span.radio-field': {
        borderColor: themeConstants.colors.primary.accent.DEFAULT,
        '> span.radio-circle': {
          backgroundColor: themeConstants.colors.primary.accent.DEFAULT,
        },
      },
      '&.Mui-checked > span.radio-field': {
        borderColor: themeConstants.colors.primary.accent.DEFAULT,
        '> span.radio-circle': {
          backgroundColor: themeConstants.colors.primary.accent.DEFAULT,
        },
      },
      '&.Mui-disabled': {
        '> span.radio-field': {
          backgroundColor: themeConstants.colors.primary.gray[4],
          borderColor: themeConstants.colors.primary.gray[20],
          '> span.radio-circle': {
            backgroundColor: 'transparent',
          },
        },
        '&.Mui-checked > span.radio-field > span.radio-circle': {
          backgroundColor: themeConstants.colors.primary.gray[40],
        },
      },
      'span.radio-field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 20,
        backgroundColor: themeConstants.colors.primary.white.DEFAULT,
        border: `2px solid ${themeConstants.colors.primary.gray[20]}`,
        borderRadius: '50%',
        transition: 'color 300ms, border 300ms',
        'span.radio-circle': {
          display: 'block',
          height: 12,
          width: 12,
          backgroundColor: themeConstants.colors.primary.white.DEFAULT,
          borderRadius: '50%',
          transition: 'background 300ms',
        },
      },
      '& .MuiTouchRipple-root': {
        maxHeight: 26,
        maxWidth: 26,
        transform: 'translate(9px, 9px)',
        zIndex: -1,
      },
    },
  },
  defaultProps: {
    icon: radioIcon,
    checkedIcon: radioIcon,
  },
});
