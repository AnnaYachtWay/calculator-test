/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

import themeConstants from '../constants';

export const getInputStyles = (theme: Theme): Components['MuiTextField'] => ({
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === 'outlined' && {
        fontFamily: themeConstants.fontFamily.figtree.join(','),
        fontSize: '16px',
        input: {
          color: themeConstants.colors.primary.black.DEFAULT,
          padding: '12px 16px',
          ...(ownerState.InputProps?.endAdornment && {
            paddingRight: '0',
          }),
          '&:-webkit-autofill': {
            color: themeConstants.colors.primary.black.DEFAULT,
            WebkitTextFillColor: themeConstants.colors.primary.black.DEFAULT,
            boxShadow: 'none',
            WebkitBoxShadow: 'none',
          },
          '&:autofill': {
            color: themeConstants.colors.primary.black.DEFAULT,
            textFillColor: themeConstants.colors.primary.black.DEFAULT,
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
        },
        label: {
          color: themeConstants.colors.primary.black[60],
          lineHeight: '100%',
          fontSize: '16px',

          '&.Mui-disabled': {
            color: themeConstants.colors.primary.gray[60],
          },
          '&.Mui-focused': {
            color: themeConstants.colors.primary.black[60],
          },
          '&:not(.MuiInputLabel-shrink)': {
            textOverflow: 'clip',
          },
        },
        '& .MuiOutlinedInput-root': {
          '& svg': {
            color: themeConstants.colors.primary.black.DEFAULT,
          },
          fieldset: {
            borderColor: themeConstants.colors.primary.gray[20],
          },
          '&:hover fieldset': {
            borderColor: themeConstants.colors.primary.gray.DEFAULT,
          },
          '&.Mui-focused:hover fieldset': {
            borderColor: themeConstants.colors.primary.gray.DEFAULT,
          },
          '&.Mui-disabled': {
            pointerEvents: 'none',
          },
          '&.MuiInputBase-adornedEnd': {
            paddingRight: '8px',
          },
        },

        '.MuiInputBase-root': {
          '&.Mui-disabled': {
            fieldset: {
              borderColor: themeConstants.colors.primary.black[4],
              backgroundColor: themeConstants.colors.primary.gray[4],
            },
          },
          '&.Mui-focused': {
            fieldset: {
              borderColor:
                ownerState.color &&
                ownerState.color !== 'primary' &&
                ownerState.color !== 'secondary'
                  ? themeConstants.colors[ownerState.color]
                  : themeConstants.colors.primary.black[20],
              borderWidth: '1px',
            },
          },
        },

        '@media (max-width: 640px)': {
          fontSize: '14px',
          label: {
            fontSize: '14px',
          },
        },
      }),
      ...(ownerState.variant === 'standard' && {
        fontFamily: themeConstants.fontFamily.figtree.join(','),
        padding: 0,
        '& .MuiInputBase-root': {
          ...(ownerState.size === 'small'
            ? {
                padding: '0 0 4px 0',
              }
            : {
                padding: '0 0 8px 0',
              }),
        },
        input: {
          ...(ownerState.size === 'small'
            ? {
                fontSize: '16px',
                lineHeight: '24px',
                padding: '0',
              }
            : {
                fontSize: '28px',
                lineHeight: '40px',
                padding: 0,
              }),
          color: themeConstants.colors.primary.black.DEFAULT,
          '&:-webkit-autofill': {
            color: themeConstants.colors.primary.black.DEFAULT,
            WebkitTextFillColor: themeConstants.colors.primary.black.DEFAULT,
            boxShadow: 'none',
            WebkitBoxShadow: 'none',
          },
          '&:autofill': {
            color: themeConstants.colors.primary.black.DEFAULT,
            textFillColor: themeConstants.colors.primary.black.DEFAULT,
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
        },
        label: {
          color: themeConstants.colors.primary.black[60],
          fontSize: '28px',

          '&.Mui-disabled': {
            color: themeConstants.colors.primary.black[60],
          },
          '&.Mui-focused': {
            color: themeConstants.colors.primary.black[60],
          },
        },
        '& .MuiInput-underline': {
          '&::before, &:hover:not(.Mui-disabled):before, &.Mui-focused:after, &::after':
            {
              ...(ownerState.size === 'small'
                ? {
                    borderBottom: `2px solid ${themeConstants.colors.primary.gray[4]}`,
                  }
                : {
                    borderBottom: `4px solid ${themeConstants.colors.primary.gray[4]}`,
                  }),
            },

          '&.Mui-disabled': {
            pointerEvents: 'none',
          },
        },
      }),
    }),
  },
});

export const getInputLabelStyles = (
  theme: Theme,
): Components['MuiInputLabel'] => ({
  styleOverrides: {
    shrink: {
      transformOrigin: 'bottom left',
    },
  },
});
