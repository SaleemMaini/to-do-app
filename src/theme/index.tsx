import { ThemeSettingsContext } from "@/context/theme-settings";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { ReactNode, useContext, useMemo } from "react";
import GlobalStyling from "./globalStyles";

export const ThemeComponent = ({ children }: { children: ReactNode }) => {
  //** Hooks
  const { mode } = useContext(ThemeSettingsContext);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};
