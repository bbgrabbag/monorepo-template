import { render } from "@testing-library/react";
import { CustomThemeProvider } from "./CustomThemeProvider";

describe("Test <CustomThemeProvider> component", () => {
  test("Should render", async () => {
    const cmp = render(
      <CustomThemeProvider>
        <div data-testid="@repo/component_library_template/CustomThemeProvider"></div>
      </CustomThemeProvider>,
    );
    const el = await cmp.findByTestId(
      "@repo/component_library_template/CustomThemeProvider",
    );
    expect(el).toBeInstanceOf(HTMLDivElement);
  });
});
