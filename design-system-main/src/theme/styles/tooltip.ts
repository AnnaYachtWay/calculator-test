/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme, Components } from '@mui/material';

import { fontVariablesString } from '../../fonts';
import themeConstants from '../constants';

export const getTooltipStyles = (theme: Theme): Components['MuiTooltip'] => ({
  defaultProps: {
    enterTouchDelay: 200,
    classes: {
      tooltip: fontVariablesString,
    },
  },
  styleOverrides: {
    tooltip: ({ ownerState }) => {
      const borderRadius = '12px';
      const borderStyles = {
        top: {
          borderRadius,
        },
        bottom: {
          borderRadius,
        },
        left: {
          borderRadius,
        },
        right: {
          borderRadius,
        },
        'right-start': {
          borderRadius: `0 ${borderRadius} ${borderRadius} ${borderRadius}`,
        },
        'right-end': {
          borderRadius: `${borderRadius} ${borderRadius} ${borderRadius} 0`,
        },
        'left-start': {
          borderRadius: `${borderRadius} 0 ${borderRadius} ${borderRadius}`,
        },
        'left-end': {
          borderRadius: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
        },
        'bottom-start': {
          borderRadius: `0 ${borderRadius} ${borderRadius} ${borderRadius}`,
        },
        'bottom-end': {
          borderRadius: `${borderRadius} 0 ${borderRadius} ${borderRadius}`,
        },
        'top-start': {
          borderRadius: `${borderRadius} ${borderRadius} ${borderRadius} 0`,
        },
        'top-end': {
          borderRadius: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
        },

        default: {
          borderRadius,
        },
      };

      return {
        backgroundColor: themeConstants.colors.primary.black.DEFAULT,
        color: themeConstants.colors.primary.white.DEFAULT,
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '20px',
        fontFamily: themeConstants.fontFamily.figtree.join(','),
        padding: '12px 16px',
        ...borderStyles[
          (ownerState.placement as keyof typeof borderStyles) || 'default'
        ],
      };
    },
    arrow: {
      color: themeConstants.colors.primary.black.DEFAULT,
    },
  },
});
