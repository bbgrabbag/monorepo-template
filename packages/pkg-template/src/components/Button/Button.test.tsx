import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Test <Button> component", () => {
  test("Should render", async () => {
    const cmp = render(<Button>test</Button>);
    expect(await cmp.findByTestId("@repo/ui/button")).toBeInstanceOf(
      HTMLButtonElement,
    );
  });
});
