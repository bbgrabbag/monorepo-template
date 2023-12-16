import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("Test <HomePage> component", () => {
  test("Should render", async () => {
    const cmp = render(<HomePage />);
    const el = await cmp.findByTestId("@repo/nextjs_template/HomePage");
    expect(el).toBeInstanceOf(HTMLDivElement);
  });
});
