import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { CustomThemeContext } from "./components/CustomThemeProvider/CustomThemeProvider";

export const useThemeAPI = () => {
  const theme = useTheme();
  const customThemeAPI = useContext(CustomThemeContext);

  return {
    theme,
    ...customThemeAPI,
  };
};
