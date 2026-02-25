/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Components, Theme } from '@mui/material';

export const getTypographyStyles = (
  theme: Theme,
): Components['MuiTypography'] => ({
  defaultProps: {
    variantMapping: {
      'display-h1': 'h1',
      'display-h2': 'h2',
      'display-h3': 'h3',
      'display-h4': 'h4',
      'display-h5': 'h5',
      'landing-h1': 'h1',
      'landing-h2': 'h2',
      'landing-h3': 'h3',
      'landing-h4': 'h4',
      'landing-h5': 'h5',
      'landing-price-title': 'h3',
      'landing-subtitle': 'p',
      'landing-subtitle2': 'p',
      'landing-body-medium': 'p',
      'landing-body2': 'p',
    },
  },
});
