import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { CustomThemeProvider } from "./components/CustomThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
