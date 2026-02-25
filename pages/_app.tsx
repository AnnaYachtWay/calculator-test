import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import { fontVariablesString } from '../src/fonts';
import { theme } from '../design-system-main/src/theme';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={fontVariablesString}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
