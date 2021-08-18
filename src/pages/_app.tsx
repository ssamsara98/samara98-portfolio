import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
