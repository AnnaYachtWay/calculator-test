Object.defineProperty(exports, '__esModule', { value: true });

const colorsBase = {
  primary: {
    megablack: {
      DEFAULT: '#0E0E13',
      80: 'rgba(14, 14, 19, 0.8)',
      60: 'rgba(14, 14, 19, 0.6)',
      40: 'rgba(14, 14, 19, 0.4)',
      20: 'rgba(14, 14, 19, 0.2)',
      4: 'rgba(14, 14, 19, 0.04)',
    },
    white: {
      DEFAULT: '#FFFFFF',
      80: 'rgba(255, 255, 255, 0.8)',
      60: 'rgba(255, 255, 255, 0.6)',
      40: 'rgba(255, 255, 255, 0.4)',
      20: 'rgba(255, 255, 255, 0.2)',
      4: 'rgba(255, 255, 255, 0.04)',
      '6-opaque': '#F5F5F5',
    },
    black: {
      DEFAULT: '#22222D',
      80: 'rgba(34, 34, 45, 0.8)',
      60: 'rgba(34, 34, 45, 0.6)',
      40: 'rgba(34, 34, 45, 0.4)',
      20: 'rgba(34, 34, 45, 0.2)',
      4: 'rgba(34, 34, 45, 0.04)',
    },
    gray: {
      DEFAULT: '#708090',
      80: 'rgba(112, 128, 144, 0.8)',
      60: 'rgba(112, 128, 144, 0.6)',
      40: 'rgba(112, 128, 144, 0.4)',
      20: 'rgba(112, 128, 144, 0.2)',
      4: 'rgba(112, 128, 144, 0.04)',
      '6-opaque': 'rgb(247, 247, 248)',
    },
    accent: {
      DEFAULT: '#4F10A9',
      80: 'rgba(79, 16, 169, 0.8)',
      60: 'rgba(79, 16, 169, 0.6)',
      40: 'rgba(79, 16, 169, 0.4)',
      20: 'rgba(79, 16, 169, 0.2)',
      4: 'rgba(79, 16, 169, 0.04)',
    },
  },
  secondary: {
    gray: {
      DEFAULT: '#535353',
      80: 'rgba(83, 83, 83, 0.8)',
      60: 'rgba(83, 83, 83, 0.6)',
      40: 'rgba(83, 83, 83, 0.4)',
      20: 'rgba(83, 83, 83, 0.2)',
      4: 'rgba(83, 83, 83, 0.04)',
    },
    lightGray: {
      DEFAULT: '#C4C4C4',
      80: 'rgba(196, 196, 196, 0.8)',
      60: 'rgba(196, 196, 196, 0.6)',
      40: 'rgba(196, 196, 196, 0.4)',
      20: 'rgba(196, 196, 196, 0.2)',
      4: 'rgba(196, 196, 196, 0.04)',
    },
    white: {
      DEFAULT: '#FFFFFF',
      80: 'rgba(255, 255, 255, 0.8)',
      60: 'rgba(255, 255, 255, 0.6)',
      40: 'rgba(255, 255, 255, 0.4)',
      20: 'rgba(255, 255, 255, 0.2)',
      4: 'rgba(255, 255, 255, 0.04)',
    },
    green: {
      DEFAULT: '#207E0A',
      80: 'rgba(32, 126, 10, 0.8)',
      60: 'rgba(32, 126, 10, 0.6)',
      40: 'rgba(32, 126, 10, 0.4)',
      20: 'rgba(32, 126, 10, 0.2)',
      4: 'rgba(32, 126, 10, 0.04)',
      '6-opaque': 'rgb(240, 254, 237)',
    },
    red: {
      DEFAULT: '#BD0929',
      80: 'rgba(189, 9, 41, 0.8)',
      60: 'rgba(189, 9, 41, 0.6)',
      40: 'rgba(189, 9, 41, 0.4)',
      20: 'rgba(189, 9, 41, 0.2)',
      4: 'rgba(189, 9, 41, 0.04)',
    },
    yellow: {
      DEFAULT: '#CC8D12',
      80: 'rgba(204, 141, 18, 0.8)',
      60: 'rgba(204, 141, 18, 0.6)',
      40: 'rgba(204, 141, 18, 0.4)',
      20: 'rgba(204, 141, 18, 0.2)',
      4: 'rgba(204, 141, 18, 0.04)',
      '6-opaque': 'rgb(255, 249, 228)',
    },
  },
  error: '#BD0929',
  success: '#207E0A',
  warning: '#FF9255',
  info: '#4F10A9',
  yellow: '#DAAB06',
  dark: '#121212',
  athensGray: '#F4F5F8',
  silver: '#AFAFAF',
  alto: '#D9D9D9',
  landingBlack: '#121216',
  n: {
    base: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'rgba(255, 255, 255, 0)',
    },
    alpha: {
      white: {
        0: 'rgba(255, 255, 255, 0)',
        10: 'rgba(255, 255, 255, 0.1)',
        20: 'rgba(255, 255, 255, 0.2)',
        30: 'rgba(255, 255, 255, 0.3)',
        40: 'rgba(255, 255, 255, 0.4)',
        50: 'rgba(255, 255, 255, 0.5)',
        60: 'rgba(255, 255, 255, 0.6)',
        70: 'rgba(255, 255, 255, 0.7)',
        80: 'rgba(255, 255, 255, 0.8)',
        90: 'rgba(255, 255, 255, 0.9)',
        100: 'rgba(255, 255, 255, 1)',
      },
      black: {
        0: 'rgba(34, 34, 34, 0)',
        10: 'rgba(34, 34, 34, 0.1)',
        20: 'rgba(34, 34, 34, 0.2)',
        30: 'rgba(34, 34, 34, 0.3)',
        40: 'rgba(34, 34, 34, 0.4)',
        50: 'rgba(34, 34, 34, 0.5)',
        60: 'rgba(34, 34, 34, 0.6)',
        70: 'rgba(34, 34, 34, 0.7)',
        80: 'rgba(34, 34, 34, 0.8)',
        90: 'rgba(34, 34, 34, 0.9)',
        100: 'rgba(34, 34, 34, 1)',
      },
    },
    gray: {
      10: '#F9FAFB',
      25: '#F6F6F7',
      50: '#F1F1F2',
      100: '#DCDCDE',
      200: '#C1C1C4',
      300: '#A6A6AB',
      400: '#8C8C92',
      500: '#727279',
      600: '#575760',
      700: '#3C3C46',
      800: '#2F2F39',
      900: '#22222D',
      950: '#121216',
    },
    brand: {
      10: '#FCFAFE',
      25: '#FAF6FE',
      50: '#F3EDFB',
      100: '#E6DCF4',
      200: '#CCB9E7',
      300: '#B297D9',
      400: '#9875CB',
      500: '#7E52BE',
      600: '#6430B0',
      700: '#4B0EA3',
      800: '#260754',
      900: '#2B0351',
      950: '#1B042F',
    },
    secondary: {
      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A',
        950: '#55160C',
      },
      warning: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
        950: '#4E1D09',
      },
      success: {
        25: '#F6FEF9',
        50: '#ECFDF3',
        100: '#D1FADF',
        200: '#A6F4C5',
        300: '#6CE9A6',
        400: '#32D583',
        500: '#12B76A',
        600: '#039855',
        700: '#027A48',
        800: '#05603A',
        900: '#054F31',
        950: '#053321',
      },
    },
  },
};
const semanticColors = {
  text: {
    s: {
      primary: {
        DEFAULT: colorsBase.n.gray[800],
        'on-brand': colorsBase.n.base.white,
      },
      secondary: {
        DEFAULT: colorsBase.n.gray[700],
        hover: colorsBase.n.gray[800],
        'on-brand': colorsBase.n.brand[50],
      },
      tertiary: {
        DEFAULT: colorsBase.n.gray[500],
        hover: colorsBase.n.gray[600],
        'on-brand': colorsBase.n.brand[100],
      },
      quaternary: {
        DEFAULT: colorsBase.n.gray[400],
        hover: colorsBase.n.gray[500],
        'on-brand': colorsBase.n.brand[200],
      },
      white: colorsBase.n.base.white,
      disabled: colorsBase.n.gray[300],
      placeholder: {
        DEFAULT: colorsBase.n.gray[500],
        'input-title': colorsBase.n.gray[500],
      },
      brand: {
        primary: colorsBase.n.brand[700],
        secondary: {
          DEFAULT: colorsBase.n.brand[600],
          hover: colorsBase.n.brand[700],
        },
        tertiary: colorsBase.n.brand[500],
      },
      error: {
        primary: colorsBase.n.secondary.error[700],
      },
      warning: {
        primary: colorsBase.n.secondary.warning[600],
      },
      success: {
        primary: colorsBase.n.secondary.success[700],
      },
    },
  },
  foreground: {
    s: {
      primary: {
        DEFAULT: colorsBase.n.gray[950],
        'on-brand': colorsBase.n.base.white,
      },
      secondary: {
        DEFAULT: colorsBase.n.gray[700],
        hover: colorsBase.n.gray[800],
        'on-brand': colorsBase.n.brand[50],
      },
      tertiary: {
        DEFAULT: colorsBase.n.gray[500],
        hover: colorsBase.n.gray[600],
        'on-brand': colorsBase.n.brand[100],
      },
      quaternary: {
        DEFAULT: colorsBase.n.gray[400],
        'on-brand': colorsBase.n.brand[200],
      },
      white: colorsBase.n.base.white,
      disabled: {
        DEFAULT: colorsBase.n.gray[200],
        subtle: colorsBase.n.gray[100],
      },
      brand: {
        primary: colorsBase.n.brand[700],
        secondary: {
          DEFAULT: colorsBase.n.brand[600],
          hover: colorsBase.n.brand[700],
        },
        tertiary: colorsBase.n.brand[500],
      },
      error: {
        primary: colorsBase.n.secondary.error[700],
        secondary: colorsBase.n.secondary.error[500],
      },
      warning: {
        primary: colorsBase.n.secondary.warning[700],
        secondary: colorsBase.n.secondary.warning[500],
      },
      success: {
        primary: colorsBase.n.secondary.success[700],
        secondary: colorsBase.n.secondary.success[600],
      },
      divider: {
        primary: colorsBase.n.gray[50],
        secondary: colorsBase.n.gray[100],
      },
    },
  },
  background: {
    s: {
      primary: {
        DEFAULT: colorsBase.n.base.white,
        hover: colorsBase.n.gray[25],
        black: {
          DEFAULT: colorsBase.n.gray[900],
          hover: colorsBase.n.gray[600],
          disabled: colorsBase.n.gray[300],
        },
      },
      secondary: {
        DEFAULT: colorsBase.n.gray[200],
        hover: colorsBase.n.gray[300],
        subtle: colorsBase.n.gray[100],
        black: {
          DEFAULT: colorsBase.n.gray[600],
          hover: colorsBase.n.gray[700],
        },
      },
      tertiary: {
        DEFAULT: colorsBase.n.gray[50],
        hover: colorsBase.n.gray[100],
        subtle: colorsBase.n.gray[10],
        black: colorsBase.n.gray[500],
      },
      active: colorsBase.n.gray[50],
      disabled: {
        DEFAULT: colorsBase.n.gray[50],
        subtle: colorsBase.n.gray[25],
      },
      overlay: `${colorsBase.n.gray[800]}99`, // 99 - 60% opacity
      brand: {
        primary: colorsBase.n.brand[10],
        secondary: colorsBase.n.brand[25],
        tertiary: colorsBase.n.brand[50],
        solid: {
          DEFAULT: colorsBase.n.brand[700],
          hover: colorsBase.n.brand[600],
          disabled: colorsBase.n.brand[200],
        },
      },
      error: {
        primary: colorsBase.n.secondary.error[50],
        secondary: colorsBase.n.secondary.error[100],
        solid: {
          DEFAULT: colorsBase.n.secondary.error[700],
          hover: colorsBase.n.secondary.error[600],
        },
      },
      warning: {
        primary: colorsBase.n.secondary.warning[50],
        secondary: colorsBase.n.secondary.warning[100],
        solid: {
          DEFAULT: colorsBase.n.secondary.warning[600],
          hover: colorsBase.n.secondary.warning[700],
        },
      },
      success: {
        primary: colorsBase.n.secondary.success[25],
        secondary: colorsBase.n.secondary.success[50],
        solid: {
          DEFAULT: colorsBase.n.secondary.success[600],
          hover: colorsBase.n.secondary.success[700],
        },
      },
    },
  },
  border: {
    s: {
      primary: {
        DEFAULT: colorsBase.n.gray[100],
        hover: colorsBase.n.gray[200],
      },
      secondary: {
        DEFAULT: colorsBase.n.gray[50],
        hover: colorsBase.n.gray[100],
      },
      tertiary: {
        DEFAULT: colorsBase.n.gray[25],
        alt: `${colorsBase.n.gray[25]}33`, // 33 - 20% opacity
      },
      disabled: {
        DEFAULT: colorsBase.n.gray[100],
        subtle: colorsBase.n.gray[50],
      },
      white: colorsBase.n.base.white,
      brand: {
        DEFAULT: colorsBase.n.brand[700],
        hover: colorsBase.n.brand[800],
        alt: {
          DEFAULT: colorsBase.n.brand[100],
          hover: colorsBase.n.brand[200],
        },
      },
      black: {
        DEFAULT: colorsBase.n.gray[900],
        hover: colorsBase.n.gray[800],
      },
      error: {
        DEFAULT: colorsBase.n.secondary.error[400],
        hover: colorsBase.n.secondary.error[600],
        subtle: colorsBase.n.secondary.error[300],
      },
      warning: {
        DEFAULT: colorsBase.n.secondary.warning[700],
        subtle: colorsBase.n.secondary.warning[400],
      },
      success: {
        DEFAULT: colorsBase.n.secondary.success[700],
        subtle: colorsBase.n.secondary.success[400],
      },
      input: {
        default: colorsBase.n.gray[100],
        hover: colorsBase.n.gray[300],
      },
    },
  },
};
const themeConstants = {
  backgroundImages: {
    accentGradient: {
      intensive: 'linear-gradient(304.46deg, #4409D7 20.35%, #8334DA 79.65%)',
      DEFAULT: 'linear-gradient(254.25deg, #8729FA -142.88%, #2B0075 175.67%)',
      80: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.8) -142.88%, rgba(43, 0, 117, 0.8) 175.67%)',
      60: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.6) -142.88%, rgba(43, 0, 117, 0.6) 175.67%)',
      40: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.4) -142.88%, rgba(43, 0, 117, 0.4) 175.67%)',
      20: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.2) -142.88%, rgba(43, 0, 117, 0.2) 175.67%)',
      6: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.04) -142.88%, rgba(43, 0, 117, 0.04) 175.67%)',
    },
    bodyGradient: 'linear-gradient(180deg, #FFFFFF -3.39%, #F9FAFB 30.74%)',
  },
  colors: colorsBase,
  semanticColors,
  breakpoints: {
    xs: 390,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440,
    fullHD: 1920,
  },
  fontFamily: {
    poppins: ['var(--font-poppins)', 'sans-serif'],
    figtree: ['var(--font-figtree)', 'sans-serif'],
  },
  shadows: {
    // OLD deprecated
    'rounded-block': '2.70833px 9.02778px 32.5px rgba(137, 143, 164, 0.14)',
    fileCard: '0px 3.63066px 9.98432px rgba(84, 75, 75, 0.15)',
    plusButtonCard: '2.71px 9.03px 32.5px 0px rgb(137 143 164 / 14%)',
    // UPDATED
    card: '-12px 4px 24px 0px rgba(132, 144, 163, 0.08)',
    button: '0px 4px 20px 0px rgba(0, 0, 0, 0.05)',
    three: '0px 4px 32px 0px rgba(140, 140, 140, 0.24)',
    xs: '0px 4px 24px 4px rgba(132, 144, 163, 0.08)',
    sm: '0 4px 20px 4px rgba(0, 0, 0, 0.05)',
    md: '0px 4px 32px 4px rgba(140, 140, 140, 0.24)',
    lg: '0px 32px 64px -12px rgba(0, 0, 0, 0.20)',
  },
  dropShadows: {
    xs: '0px 4px 24px rgba(132, 144, 163, 0.08)',
    sm: '0 4px 10px rgba(0, 0, 0, 0.05)',
    md: '0px 4px 32px rgba(140, 140, 140, 0.24)',
  },
};

exports.default = themeConstants;
