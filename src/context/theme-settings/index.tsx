import { ThemeContext } from "@emotion/react";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeSettingsContext = createContext({} as any);

export const ThemeSettingsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // ** States
  const [mode, setMode] = useState<"dark" | "light">("light");

  // ** Handlers
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    setMode((localStorage.getItem("mode") as any) || "light");
  }, []);

  return (
    <ThemeSettingsContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeSettingsContext.Provider>
  );
};
