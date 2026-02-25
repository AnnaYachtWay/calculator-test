declare const themeConstants: {
  readonly backgroundImages: {
    readonly accentGradient: {
      readonly intensive: 'linear-gradient(304.46deg, #4409D7 20.35%, #8334DA 79.65%)';
      readonly DEFAULT: 'linear-gradient(254.25deg, #8729FA -142.88%, #2B0075 175.67%)';
      readonly 80: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.8) -142.88%, rgba(43, 0, 117, 0.8) 175.67%)';
      readonly 60: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.6) -142.88%, rgba(43, 0, 117, 0.6) 175.67%)';
      readonly 40: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.4) -142.88%, rgba(43, 0, 117, 0.4) 175.67%)';
      readonly 20: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.2) -142.88%, rgba(43, 0, 117, 0.2) 175.67%)';
      readonly 6: 'linear-gradient(254.25deg, rgba(135, 41, 250, 0.04) -142.88%, rgba(43, 0, 117, 0.04) 175.67%)';
    };
    readonly bodyGradient: 'linear-gradient(180deg, #FFFFFF -3.39%, #F9FAFB 30.74%)';
  };
  readonly colors: {
    readonly primary: {
      readonly megablack: {
        readonly DEFAULT: '#0E0E13';
        readonly 80: 'rgba(14, 14, 19, 0.8)';
        readonly 60: 'rgba(14, 14, 19, 0.6)';
        readonly 40: 'rgba(14, 14, 19, 0.4)';
        readonly 20: 'rgba(14, 14, 19, 0.2)';
        readonly 4: 'rgba(14, 14, 19, 0.04)';
      };
      readonly white: {
        readonly DEFAULT: '#FFFFFF';
        readonly 80: 'rgba(255, 255, 255, 0.8)';
        readonly 60: 'rgba(255, 255, 255, 0.6)';
        readonly 40: 'rgba(255, 255, 255, 0.4)';
        readonly 20: 'rgba(255, 255, 255, 0.2)';
        readonly 4: 'rgba(255, 255, 255, 0.04)';
        readonly '6-opaque': '#F5F5F5';
      };
      readonly black: {
        readonly DEFAULT: '#22222D';
        readonly 80: 'rgba(34, 34, 45, 0.8)';
        readonly 60: 'rgba(34, 34, 45, 0.6)';
        readonly 40: 'rgba(34, 34, 45, 0.4)';
        readonly 20: 'rgba(34, 34, 45, 0.2)';
        readonly 4: 'rgba(34, 34, 45, 0.04)';
      };
      readonly gray: {
        readonly DEFAULT: '#708090';
        readonly 80: 'rgba(112, 128, 144, 0.8)';
        readonly 60: 'rgba(112, 128, 144, 0.6)';
        readonly 40: 'rgba(112, 128, 144, 0.4)';
        readonly 20: 'rgba(112, 128, 144, 0.2)';
        readonly 4: 'rgba(112, 128, 144, 0.04)';
        readonly '6-opaque': 'rgb(247, 247, 248)';
      };
      readonly accent: {
        readonly DEFAULT: '#4F10A9';
        readonly 80: 'rgba(79, 16, 169, 0.8)';
        readonly 60: 'rgba(79, 16, 169, 0.6)';
        readonly 40: 'rgba(79, 16, 169, 0.4)';
        readonly 20: 'rgba(79, 16, 169, 0.2)';
        readonly 4: 'rgba(79, 16, 169, 0.04)';
      };
    };
    readonly secondary: {
      readonly gray: {
        readonly DEFAULT: '#535353';
        readonly 80: 'rgba(83, 83, 83, 0.8)';
        readonly 60: 'rgba(83, 83, 83, 0.6)';
        readonly 40: 'rgba(83, 83, 83, 0.4)';
        readonly 20: 'rgba(83, 83, 83, 0.2)';
        readonly 4: 'rgba(83, 83, 83, 0.04)';
      };
      readonly lightGray: {
        readonly DEFAULT: '#C4C4C4';
        readonly 80: 'rgba(196, 196, 196, 0.8)';
        readonly 60: 'rgba(196, 196, 196, 0.6)';
        readonly 40: 'rgba(196, 196, 196, 0.4)';
        readonly 20: 'rgba(196, 196, 196, 0.2)';
        readonly 4: 'rgba(196, 196, 196, 0.04)';
      };
      readonly white: {
        readonly DEFAULT: '#FFFFFF';
        readonly 80: 'rgba(255, 255, 255, 0.8)';
        readonly 60: 'rgba(255, 255, 255, 0.6)';
        readonly 40: 'rgba(255, 255, 255, 0.4)';
        readonly 20: 'rgba(255, 255, 255, 0.2)';
        readonly 4: 'rgba(255, 255, 255, 0.04)';
      };
      readonly green: {
        readonly DEFAULT: '#207E0A';
        readonly 80: 'rgba(32, 126, 10, 0.8)';
        readonly 60: 'rgba(32, 126, 10, 0.6)';
        readonly 40: 'rgba(32, 126, 10, 0.4)';
        readonly 20: 'rgba(32, 126, 10, 0.2)';
        readonly 4: 'rgba(32, 126, 10, 0.04)';
        readonly '6-opaque': 'rgb(240, 254, 237)';
      };
      readonly red: {
        readonly DEFAULT: '#BD0929';
        readonly 80: 'rgba(189, 9, 41, 0.8)';
        readonly 60: 'rgba(189, 9, 41, 0.6)';
        readonly 40: 'rgba(189, 9, 41, 0.4)';
        readonly 20: 'rgba(189, 9, 41, 0.2)';
        readonly 4: 'rgba(189, 9, 41, 0.04)';
      };
      readonly yellow: {
        readonly DEFAULT: '#CC8D12';
        readonly 80: 'rgba(204, 141, 18, 0.8)';
        readonly 60: 'rgba(204, 141, 18, 0.6)';
        readonly 40: 'rgba(204, 141, 18, 0.4)';
        readonly 20: 'rgba(204, 141, 18, 0.2)';
        readonly 4: 'rgba(204, 141, 18, 0.04)';
        readonly '6-opaque': 'rgb(255, 249, 228)';
      };
    };
    readonly error: '#BD0929';
    readonly success: '#207E0A';
    readonly warning: '#FF9255';
    readonly info: '#4F10A9';
    readonly yellow: '#DAAB06';
    readonly dark: '#121212';
    readonly athensGray: '#F4F5F8';
    readonly silver: '#AFAFAF';
    readonly alto: '#D9D9D9';
    readonly landingBlack: '#121216';
    readonly n: {
      readonly base: {
        readonly white: '#FFFFFF';
        readonly black: '#000000';
        readonly transparent: 'rgba(255, 255, 255, 0)';
      };
      readonly alpha: {
        readonly white: {
          readonly 0: 'rgba(255, 255, 255, 0)';
          readonly 10: 'rgba(255, 255, 255, 0.1)';
          readonly 20: 'rgba(255, 255, 255, 0.2)';
          readonly 30: 'rgba(255, 255, 255, 0.3)';
          readonly 40: 'rgba(255, 255, 255, 0.4)';
          readonly 50: 'rgba(255, 255, 255, 0.5)';
          readonly 60: 'rgba(255, 255, 255, 0.6)';
          readonly 70: 'rgba(255, 255, 255, 0.7)';
          readonly 80: 'rgba(255, 255, 255, 0.8)';
          readonly 90: 'rgba(255, 255, 255, 0.9)';
          readonly 100: 'rgba(255, 255, 255, 1)';
        };
        readonly black: {
          readonly 0: 'rgba(34, 34, 34, 0)';
          readonly 10: 'rgba(34, 34, 34, 0.1)';
          readonly 20: 'rgba(34, 34, 34, 0.2)';
          readonly 30: 'rgba(34, 34, 34, 0.3)';
          readonly 40: 'rgba(34, 34, 34, 0.4)';
          readonly 50: 'rgba(34, 34, 34, 0.5)';
          readonly 60: 'rgba(34, 34, 34, 0.6)';
          readonly 70: 'rgba(34, 34, 34, 0.7)';
          readonly 80: 'rgba(34, 34, 34, 0.8)';
          readonly 90: 'rgba(34, 34, 34, 0.9)';
          readonly 100: 'rgba(34, 34, 34, 1)';
        };
      };
      readonly gray: {
        readonly 10: '#F9FAFB';
        readonly 25: '#F6F6F7';
        readonly 50: '#F1F1F2';
        readonly 100: '#DCDCDE';
        readonly 200: '#C1C1C4';
        readonly 300: '#A6A6AB';
        readonly 400: '#8C8C92';
        readonly 500: '#727279';
        readonly 600: '#575760';
        readonly 700: '#3C3C46';
        readonly 800: '#2F2F39';
        readonly 900: '#22222D';
        readonly 950: '#121216';
      };
      readonly brand: {
        readonly 10: '#FCFAFE';
        readonly 25: '#FAF6FE';
        readonly 50: '#F3EDFB';
        readonly 100: '#E6DCF4';
        readonly 200: '#CCB9E7';
        readonly 300: '#B297D9';
        readonly 400: '#9875CB';
        readonly 500: '#7E52BE';
        readonly 600: '#6430B0';
        readonly 700: '#4B0EA3';
        readonly 800: '#260754';
        readonly 900: '#2B0351';
        readonly 950: '#1B042F';
      };
      readonly secondary: {
        readonly error: {
          readonly 25: '#FFFBFA';
          readonly 50: '#FEF3F2';
          readonly 100: '#FEE4E2';
          readonly 200: '#FECDCA';
          readonly 300: '#FDA29B';
          readonly 400: '#F97066';
          readonly 500: '#F04438';
          readonly 600: '#D92D20';
          readonly 700: '#B42318';
          readonly 800: '#912018';
          readonly 900: '#7A271A';
          readonly 950: '#55160C';
        };
        readonly warning: {
          readonly 25: '#FFFCF5';
          readonly 50: '#FFFAEB';
          readonly 100: '#FEF0C7';
          readonly 200: '#FEDF89';
          readonly 300: '#FEC84B';
          readonly 400: '#FDB022';
          readonly 500: '#F79009';
          readonly 600: '#DC6803';
          readonly 700: '#B54708';
          readonly 800: '#93370D';
          readonly 900: '#7A2E0E';
          readonly 950: '#4E1D09';
        };
        readonly success: {
          readonly 25: '#F6FEF9';
          readonly 50: '#ECFDF3';
          readonly 100: '#D1FADF';
          readonly 200: '#A6F4C5';
          readonly 300: '#6CE9A6';
          readonly 400: '#32D583';
          readonly 500: '#12B76A';
          readonly 600: '#039855';
          readonly 700: '#027A48';
          readonly 800: '#05603A';
          readonly 900: '#054F31';
          readonly 950: '#053321';
        };
      };
    };
  };
  readonly semanticColors: {
    readonly text: {
      readonly s: {
        readonly primary: {
          readonly DEFAULT: '#2F2F39';
          readonly 'on-brand': '#FFFFFF';
        };
        readonly secondary: {
          readonly DEFAULT: '#3C3C46';
          readonly hover: '#2F2F39';
          readonly 'on-brand': '#F3EDFB';
        };
        readonly tertiary: {
          readonly DEFAULT: '#727279';
          readonly hover: '#575760';
          readonly 'on-brand': '#E6DCF4';
        };
        readonly quaternary: {
          readonly DEFAULT: '#8C8C92';
          readonly hover: '#727279';
          readonly 'on-brand': '#CCB9E7';
        };
        readonly white: '#FFFFFF';
        readonly disabled: '#A6A6AB';
        readonly placeholder: {
          readonly DEFAULT: '#727279';
          readonly 'input-title': '#727279';
        };
        readonly brand: {
          readonly primary: '#4B0EA3';
          readonly secondary: {
            readonly DEFAULT: '#6430B0';
            readonly hover: '#4B0EA3';
          };
          readonly tertiary: '#7E52BE';
        };
        readonly error: {
          readonly primary: '#B42318';
        };
        readonly warning: {
          readonly primary: '#DC6803';
        };
        readonly success: {
          readonly primary: '#027A48';
        };
      };
    };
    readonly foreground: {
      readonly s: {
        readonly primary: {
          readonly DEFAULT: '#121216';
          readonly 'on-brand': '#FFFFFF';
        };
        readonly secondary: {
          readonly DEFAULT: '#3C3C46';
          readonly hover: '#2F2F39';
          readonly 'on-brand': '#F3EDFB';
        };
        readonly tertiary: {
          readonly DEFAULT: '#727279';
          readonly hover: '#575760';
          readonly 'on-brand': '#E6DCF4';
        };
        readonly quaternary: {
          readonly DEFAULT: '#8C8C92';
          readonly 'on-brand': '#CCB9E7';
        };
        readonly white: '#FFFFFF';
        readonly disabled: {
          readonly DEFAULT: '#C1C1C4';
          readonly subtle: '#DCDCDE';
        };
        readonly brand: {
          readonly primary: '#4B0EA3';
          readonly secondary: {
            readonly DEFAULT: '#6430B0';
            readonly hover: '#4B0EA3';
          };
          readonly tertiary: '#7E52BE';
        };
        readonly error: {
          readonly primary: '#B42318';
          readonly secondary: '#F04438';
        };
        readonly warning: {
          readonly primary: '#B54708';
          readonly secondary: '#F79009';
        };
        readonly success: {
          readonly primary: '#027A48';
          readonly secondary: '#039855';
        };
        readonly divider: {
          readonly primary: '#F1F1F2';
          readonly secondary: '#DCDCDE';
        };
      };
    };
    readonly background: {
      readonly s: {
        readonly primary: {
          readonly DEFAULT: '#FFFFFF';
          readonly hover: '#F6F6F7';
          readonly black: {
            readonly DEFAULT: '#22222D';
            readonly hover: '#575760';
            readonly disabled: '#A6A6AB';
          };
        };
        readonly secondary: {
          readonly DEFAULT: '#C1C1C4';
          readonly hover: '#A6A6AB';
          readonly subtle: '#DCDCDE';
          readonly black: {
            readonly DEFAULT: '#575760';
            readonly hover: '#3C3C46';
          };
        };
        readonly tertiary: {
          readonly DEFAULT: '#F1F1F2';
          readonly hover: '#DCDCDE';
          readonly subtle: '#F9FAFB';
          readonly black: '#727279';
        };
        readonly active: '#F1F1F2';
        readonly disabled: {
          readonly DEFAULT: '#F1F1F2';
          readonly subtle: '#F6F6F7';
        };
        readonly overlay: '#2F2F3999';
        readonly brand: {
          readonly primary: '#FCFAFE';
          readonly secondary: '#FAF6FE';
          readonly tertiary: '#F3EDFB';
          readonly solid: {
            readonly DEFAULT: '#4B0EA3';
            readonly hover: '#6430B0';
            readonly disabled: '#CCB9E7';
          };
        };
        readonly error: {
          readonly primary: '#FEF3F2';
          readonly secondary: '#FEE4E2';
          readonly solid: {
            readonly DEFAULT: '#B42318';
            readonly hover: '#D92D20';
          };
        };
        readonly warning: {
          readonly primary: '#FFFAEB';
          readonly secondary: '#FEF0C7';
          readonly solid: {
            readonly DEFAULT: '#DC6803';
            readonly hover: '#B54708';
          };
        };
        readonly success: {
          readonly primary: '#F6FEF9';
          readonly secondary: '#ECFDF3';
          readonly solid: {
            readonly DEFAULT: '#039855';
            readonly hover: '#027A48';
          };
        };
      };
    };
    readonly border: {
      readonly s: {
        readonly primary: {
          readonly DEFAULT: '#DCDCDE';
          readonly hover: '#C1C1C4';
        };
        readonly secondary: {
          readonly DEFAULT: '#F1F1F2';
          readonly hover: '#DCDCDE';
        };
        readonly tertiary: {
          readonly DEFAULT: '#F6F6F7';
          readonly alt: '#F6F6F733';
        };
        readonly disabled: {
          readonly DEFAULT: '#DCDCDE';
          readonly subtle: '#F1F1F2';
        };
        readonly white: '#FFFFFF';
        readonly brand: {
          readonly DEFAULT: '#4B0EA3';
          readonly hover: '#260754';
          readonly alt: {
            readonly DEFAULT: '#E6DCF4';
            readonly hover: '#CCB9E7';
          };
        };
        readonly black: {
          readonly DEFAULT: '#22222D';
          readonly hover: '#2F2F39';
        };
        readonly error: {
          readonly DEFAULT: '#F97066';
          readonly hover: '#D92D20';
          readonly subtle: '#FDA29B';
        };
        readonly warning: {
          readonly DEFAULT: '#B54708';
          readonly subtle: '#FDB022';
        };
        readonly success: {
          readonly DEFAULT: '#027A48';
          readonly subtle: '#32D583';
        };
        readonly input: {
          readonly default: '#DCDCDE';
          readonly hover: '#A6A6AB';
        };
      };
    };
  };
  readonly breakpoints: {
    readonly xs: 390;
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly xxl: 1440;
    readonly fullHD: 1920;
  };
  readonly fontFamily: {
    readonly poppins: readonly ['var(--font-poppins)', 'sans-serif'];
    readonly figtree: readonly ['var(--font-figtree)', 'sans-serif'];
  };
  readonly shadows: {
    readonly 'rounded-block': '2.70833px 9.02778px 32.5px rgba(137, 143, 164, 0.14)';
    readonly fileCard: '0px 3.63066px 9.98432px rgba(84, 75, 75, 0.15)';
    readonly plusButtonCard: '2.71px 9.03px 32.5px 0px rgb(137 143 164 / 14%)';
    readonly card: '-12px 4px 24px 0px rgba(132, 144, 163, 0.08)';
    readonly button: '0px 4px 20px 0px rgba(0, 0, 0, 0.05)';
    readonly three: '0px 4px 32px 0px rgba(140, 140, 140, 0.24)';
    readonly xs: '0px 4px 24px 4px rgba(132, 144, 163, 0.08)';
    readonly sm: '0 4px 20px 4px rgba(0, 0, 0, 0.05)';
    readonly md: '0px 4px 32px 4px rgba(140, 140, 140, 0.24)';
    readonly lg: '0px 32px 64px -12px rgba(0, 0, 0, 0.20)';
  };
  readonly dropShadows: {
    readonly xs: '0px 4px 24px rgba(132, 144, 163, 0.08)';
    readonly sm: '0 4px 10px rgba(0, 0, 0, 0.05)';
    readonly md: '0px 4px 32px rgba(140, 140, 140, 0.24)';
  };
};

export default themeConstants;
