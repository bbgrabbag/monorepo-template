import { render } from "../../test-utils";
import { Button } from "./Button";

describe("Test <Button> component", () => {
  test("Should render", async () => {
    const cmp = render(<Button />);
    const el = await cmp.findByTestId(
      "@repo/component_library_template/Button",
    );
    expect(el).toBeInstanceOf(HTMLButtonElement);
  });
});
