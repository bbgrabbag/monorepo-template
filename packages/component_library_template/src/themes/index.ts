import defaultThemeConfig from "./default.json";
import constrastThemeConfig from "./contrast.json";

export const THEME_MAP = {
  default: defaultThemeConfig,
  contrast: constrastThemeConfig,
  // add additional custom themes here
};

export type ThemeName = keyof typeof THEME_MAP;
export const THEME_NAMES: ThemeName[] = Object.keys(THEME_MAP) as ThemeName[];
