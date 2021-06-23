import Head from 'next/head';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';

import { AuthProvider } from '@/lib/auth';
import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
          background-color: #edf2f7;
        }

        // body {
        //   font-size: 62.5%;
        // }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={customTheme}>
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
);

export default App;
