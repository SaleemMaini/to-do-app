import { ThemeSettingsContext } from "@/context/theme-settings";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ThemeToggler = () => {
  const { mode, toggleTheme } = useContext(ThemeSettingsContext);

  return (
    <IconButton onClick={toggleTheme}>
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
