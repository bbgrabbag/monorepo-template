import { render } from "@testing-library/react";
import { Example } from "./Example";

describe("Test <Example> component", () => {
  test("Should render", async () => {
    const cmp = render(<Example />);
    const el = await cmp.findByTestId(
      "@repo/component_library_template/Example",
    );
    expect(el).toBeInstanceOf(HTMLDivElement);
  });
});
