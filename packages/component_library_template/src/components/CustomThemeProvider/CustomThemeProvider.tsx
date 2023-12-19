import { Theme, createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeName, THEME_MAP } from "../../themes";

export type ThemeMode = "light" | "dark";

const getTheme = (name: ThemeName, mode: ThemeMode) => {
  const config = THEME_MAP[name];
  const baseTheme = createTheme(config, { palette: { mode } });
  const theme = createTheme(baseTheme, {
    //  you can add overrides or compose new properties here using baseTheme
  });

  return theme;
};

const useCustomTheme = (
  defaultTheme: ThemeName,
  defaultThemeMode: ThemeMode,
) => {
  const [themeName, setThemeName] = React.useState<ThemeName>(defaultTheme);
  const [themeMode, setThemeMode] = React.useState<ThemeMode>(defaultThemeMode);
  const toggleThemeMode = React.useCallback(
    () => setThemeMode((mode) => (mode === "light" ? "dark" : "light")),
    [],
  );

  return React.useMemo(
    () => ({
      themeName,
      setThemeName,
      themeMode,
      toggleThemeMode,
    }),
    [themeMode, themeName],
  );
};

export const CustomThemeContext = React.createContext(
  {} as ReturnType<typeof useCustomTheme>,
);

export const CustomThemeProvider: React.FC<
  React.PropsWithChildren<{
    defaultTheme?: ThemeName;
    defaultThemeMode?: ThemeMode;
  }>
> = ({ defaultTheme = "default", defaultThemeMode = "light", children }) => {
  const customThemeAPI = useCustomTheme(defaultTheme, defaultThemeMode);
  const theme: Theme = React.useMemo(
    (): Theme => getTheme(customThemeAPI.themeName, customThemeAPI.themeMode),
    [customThemeAPI.themeName, customThemeAPI.themeMode],
  );

  return (
    <CustomThemeContext.Provider value={customThemeAPI}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
