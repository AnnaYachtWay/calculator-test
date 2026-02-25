/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getSwitchStyles = (theme: Theme): Components['MuiSwitch'] => ({
  styleOverrides: {
    root: {
      width: 36,
      height: 20,
      margin: 12,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(16px)',
          color: themeConstants.colors.primary.white.DEFAULT,
          '& + .MuiSwitch-track': {
            backgroundColor: themeConstants.colors.primary.accent.DEFAULT,
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: themeConstants.colors.primary.accent[20],
          },
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          boxShadow: 'none',
          filter: 'drop-shadow(0px 2px 4px rgba(34, 34, 45, 0.04))',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: themeConstants.colors.primary.gray[40],
          opacity: 1,
        },
      },
      '& .MuiSwitch-thumb': {
        width: 16,
        height: 16,
        backgroundColor: themeConstants.colors.primary.white.DEFAULT,
        boxSizing: 'border-box',
      },
      '& .MuiSwitch-track': {
        backgroundColor: themeConstants.colors.primary.gray[60],
        borderRadius: 16,
        opacity: 1,
        transition: 'background 500ms',
      },
      '@media (max-width: 640px)': {
        width: 28,
        height: 16,
        margin: 8,
        '& .MuiSwitch-switchBase.Mui-checked': {
          transform: 'translateX(12px)',
        },
        '& .MuiSwitch-thumb': {
          width: 12,
          height: 12,
        },
      },
    },
  },
});
