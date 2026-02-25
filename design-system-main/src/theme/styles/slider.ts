/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getSliderStyles = (theme: Theme): Components['MuiSlider'] => ({
  styleOverrides: {
    root: {
      color: themeConstants.colors.primary.black.DEFAULT,
      '& .MuiSlider-thumb': {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: themeConstants.colors.primary.white.DEFAULT,
        zIndex: 3,
        '&.Mui-active, &.Mui-focusVisible, &:hover': {
          boxShadow: '0px 4px 32px 0px rgba(140, 140, 140, 0.24)',
        },
      },
      '& .MuiSlider-mark': {
        width: 5,
        height: 5,
        borderRadius: '50%',
        opacity: 0,
        backgroundColor: themeConstants.colors.primary.black[4],
        zIndex: 1,

        '&[data-index="0"]': {
          transform: 'translateX(0%)',
        },
        '&[style="left: 100%;"]': {
          transform: 'translateX(-100%)',
        },
      },
      '& .MuiSlider-markLabel': {
        color: themeConstants.colors.primary.gray.DEFAULT,
        marginTop: 8,
        '&[data-index="0"]': {
          transform: 'translateX(0%)',
        },
        '&[style="left: 100%;"]': {
          transform: 'translateX(-100%)',
        },
      },
      '& .MuiSlider-track': {
        height: 18,
        borderRadius: 100,
        backgroundColor: themeConstants.colors.primary.black.DEFAULT,
        zIndex: 2,
      },
      '& .MuiSlider-rail': {
        height: 21,
        backgroundColor: themeConstants.colors.primary.black[4],
        opacity: '100%',
        borderRadius: 370,
      },
    },
  },
});
