import { createTheme as createMuiTheme } from '@mui/material/styles';

import themeConstants from './constants';
import getComponentStyles from './get-styles';
import getAllTypography from './get-typography';

const theme = createMuiTheme({
  palette: {
    mode: 'light',
    text: {
      primary: themeConstants.colors.primary.black.DEFAULT,
      secondary: themeConstants.colors.primary.black[60],
      disabled: themeConstants.colors.primary.gray[40],
    },
    background: {
      default: themeConstants.colors.primary.white[4],
      paper: themeConstants.colors.primary.white.DEFAULT,
    },
    error: {
      main: themeConstants.colors.error,
    },
    success: {
      main: themeConstants.colors.success,
    },
  },
  breakpoints: {
    values: themeConstants.breakpoints,
  },
  colors: {
    primary: themeConstants.colors.primary,
    secondary: themeConstants.colors.secondary,
  },
});

// WARNING: ORDER MUST BE PRESERVED IN ORDER FOR COMPONENTS TO USE THE CORRECT TYPOGRAPHY
theme.typography = getAllTypography(theme);

theme.components = getComponentStyles(theme);

export { theme };
