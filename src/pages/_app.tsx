import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@components/layout";

const AppInner = ({ Component, ...rest }: AppProps) => {
  return <>{/* loading ? <Spinner /> : */ <Component {...rest} />}</>;
};
const queryClient = new QueryClient();

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <AppInner {...pageProps} Component={Component} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
