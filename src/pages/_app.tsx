import { ThemeSettingsContextProvider } from "@/context/theme-settings";
import { store } from "@/store";
import "@/styles/globals.css";
import { ThemeComponent } from "@/theme";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeSettingsContextProvider>
        <ThemeComponent>
          <Component {...pageProps} />
        </ThemeComponent>
      </ThemeSettingsContextProvider>
    </Provider>
  );
}
