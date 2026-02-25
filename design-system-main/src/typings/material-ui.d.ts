/* eslint-disable @typescript-eslint/member-ordering */
import * as MaterialStyles from '@mui/material/styles';

declare module '@mui/material/styles' {
  export type AppOpacity = 'DEFAULT' | 80 | 60 | 40 | 20 | 4;
  export type OptionalAppOpacity =
    | '80-opaque'
    | '60-opaque'
    | '40-opaque'
    | '20-opaque'
    | '6-opaque';

  export type OptionalTransparentAppOpacity =
    | '80-transparent'
    | '60-transparent'
    | '40-transparent'
    | '20-transparent'
    | '6-transparent';

  export type CombinedAppOpacity = Record<AppOpacity, string> &
    Partial<Record<OptionalAppOpacity, string>> &
    Partial<Record<OptionalTransparentAppOpacity, string>>;

  export type PrimaryColorVariants = 'black' | 'white' | 'gray' | 'accent';
  export type SecondaryColorVariants =
    | 'white'
    | 'lightGray'
    | 'gray'
    | 'green'
    | 'red'
    | 'yellow';
  export type ButtonVariants =
    | 'text'
    | 'filled'
    | 'outlined'
    | 'contained'
    | 'filled-outlined'
    | undefined;

  export interface ColorVariants {
    primary: Record<PrimaryColorVariants, CombinedAppOpacity>;
    secondary: Record<SecondaryColorVariants, CombinedAppOpacity>;
  }

  export interface Theme {
    colors: ColorVariants;
  }

  export interface TypographyVariants {
    // NEW
    'text-xs': React.CSSProperties;
    'text-sm': React.CSSProperties;
    'text-md': React.CSSProperties;
    'text-lg': React.CSSProperties;
    'text-xl': React.CSSProperties;
    'headlines-4xl': React.CSSProperties;
    'headlines-3xl': React.CSSProperties;
    'headlines-2xl': React.CSSProperties;
    'headlines-xl': React.CSSProperties;
    'headlines-lg': React.CSSProperties;
    'headlines-md': React.CSSProperties;
    'headlines-sm': React.CSSProperties;
    'headlines-xs': React.CSSProperties;
    'headlines-2xs': React.CSSProperties;
    'caption-sm': React.CSSProperties;
    'caption-xs': React.CSSProperties;
    'caption-md': React.CSSProperties;
    'button-sm': React.CSSProperties;
    'button-md': React.CSSProperties;
    'button-xl': React.CSSProperties;

    // OLD
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    'display-h1': React.CSSProperties;
    'display-h2': React.CSSProperties;
    'display-h3': React.CSSProperties;
    'display-h4': React.CSSProperties;
    'display-h5': React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    'body1-medium': React.CSSProperties;
    body2: React.CSSProperties;
    'body2-regular': React.CSSProperties;
    body3: React.CSSProperties;
    button: React.CSSProperties;
    button2: React.CSSProperties;
    link: React.CSSProperties;
    caption: React.CSSProperties;
    'landing-h1': React.CSSProperties;
    'landing-h2': React.CSSProperties;
    'landing-h3': React.CSSProperties;
    'landing-h4': React.CSSProperties;
    'landing-h5': React.CSSProperties;
    'landing-price-title': React.CSSProperties;
    'landing-subtitle': React.CSSProperties;
    'landing-subtitle2': React.CSSProperties;
    'landing-body-medium': React.CSSProperties;
    'landing-body2': React.CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    // NEW
    'text-xs': React.CSSProperties;
    'text-sm': React.CSSProperties;
    'text-md': React.CSSProperties;
    'text-lg': React.CSSProperties;
    'text-xl': React.CSSProperties;
    'headlines-4xl': React.CSSProperties;
    'headlines-3xl': React.CSSProperties;
    'headlines-2xl': React.CSSProperties;
    'headlines-xl': React.CSSProperties;
    'headlines-lg': React.CSSProperties;
    'headlines-md': React.CSSProperties;
    'headlines-sm': React.CSSProperties;
    'headlines-xs': React.CSSProperties;
    'headlines-2xs': React.CSSProperties;
    'caption-sm': React.CSSProperties;
    'caption-xs': React.CSSProperties;
    'caption-md': React.CSSProperties;
    'button-sm': React.CSSProperties;
    'button-md': React.CSSProperties;
    'button-xl': React.CSSProperties;

    // OLD
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    'display-h1': React.CSSProperties;
    'display-h2': React.CSSProperties;
    'display-h3': React.CSSProperties;
    'display-h4': React.CSSProperties;
    'display-h5': React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    'body1-medium': React.CSSProperties;
    body2: React.CSSProperties;
    'body2-regular': React.CSSProperties;
    body3: React.CSSProperties;
    button: React.CSSProperties;
    button2: React.CSSProperties;
    link: React.CSSProperties;
    caption: React.CSSProperties;
    'landing-h1': React.CSSProperties;
    'landing-h2': React.CSSProperties;
    'landing-h3': React.CSSProperties;
    'landing-h4': React.CSSProperties;
    'landing-h5': React.CSSProperties;
    'landing-price-title': React.CSSProperties;
    'landing-subtitle': React.CSSProperties;
    'landing-subtitle2': React.CSSProperties;
    'landing-body-medium': React.CSSProperties;
    'landing-body2': React.CSSProperties;
  }

  export interface ThemeOptions {
    colors: ColorVariants;
  }

  export interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    fullHD: true;
  }

  export default MaterialStyles;
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    // NEW
    'text-xs': true;
    'text-sm': true;
    'text-md': true;
    'text-lg': true;
    'text-xl': true;
    'headlines-4xl': true;
    'headlines-3xl': true;
    'headlines-2xl': true;
    'headlines-xl': true;
    'headlines-lg': true;
    'headlines-md': true;
    'headlines-sm': true;
    'headlines-xs': true;
    'headlines-2xs': true;
    'caption-sm': true;
    'caption-xs': true;
    'caption-md': true;
    'button-sm': true;
    'button-md': true;
    'button-xl': true;

    // OLD
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    'display-h1': true;
    'display-h2': true;
    'display-h3': true;
    'display-h4': true;
    'display-h5': true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    'body1-medium': true;
    body2: true;
    'body2-regular': true;
    body3: true;
    button: true;
    button2: true;
    link: true;
    caption: true;
    'landing-h1': true;
    'landing-h2': true;
    'landing-h3': true;
    'landing-h4': true;
    'landing-h5': true;
    'landing-price-title': true;
    'landing-subtitle': true;
    'landing-subtitle2': true;
    'landing-body-medium': true;
    'landing-body2': true;
  }
}

// allow additional button variants to exist
declare module '@mui/material/Button' {
  export interface ButtonPropsVariantOverrides {
    filled: true;
    'filled-outlined': true;
    // new
    'new-filled': true;
    'new-ghost': true;
    'new-text': true;
    'new-link': true;
    'new-danger-filled': true;
    'new-danger-ghost': true;
    'new-danger-text': true;
    'new-danger-link': true;
  }

  export interface ButtonPropsColorOverrides {
    primary: true;
    basic: true;
    transparent: true;
    danger: true;
  }

  export interface ButtonPropsSizeOverrides {
    large: true;
    medium: true;
    small: true;
    extraSmall: true;
  }
}
