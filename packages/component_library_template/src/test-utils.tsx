import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { CustomThemeProvider } from "./components/CustomThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};

const customRender: (
  el: React.ReactElement,
  options: RenderOptions,
) => RenderResult = (el, options) => {
  return render(el, { wrapper: Providers, ...options });
};

export { customRender as render };
