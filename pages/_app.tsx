import { Global, ThemeProvider } from "@emotion/react";

import { Provider } from "../providers/provider";
import { store } from "../stores/store";
import { globalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
