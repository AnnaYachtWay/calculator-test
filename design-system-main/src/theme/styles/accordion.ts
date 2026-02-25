/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

export const getAccordionStyles = (
  theme: Theme,
): Components['MuiAccordion'] => ({
  styleOverrides: {
    root: {
      backgroundColor: 'transparent',
      boxShadow: 'none !important',

      '&:before': {
        opacity: '1 !important',
      },
      '&:last-child:before': {
        opacity: '1 !important',
      },
    },
  },
});

export const getAccordionSummaryStyles = (
  theme: Theme,
): Components['MuiAccordionSummary'] => ({
  styleOverrides: {
    root: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: '2rem 0',
      '& .MuiAccordionSummary-content': {
        margin: '0',

        '&.Mui-expanded': {
          margin: '0',
        },
      },
    },
  },
});

export const getAccordionDetailsStyles = (
  theme: Theme,
): Components['MuiAccordionDetails'] => ({
  styleOverrides: {
    root: {
      padding: '0 0 2rem 0',
    },
  },
});
