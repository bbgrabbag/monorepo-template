import HomePage from "./page";
import { render } from "@testing-library/react";

describe("Test <HomePage />", () => {
  test("Should initialize", async () => {
    const cmp = render(<HomePage />);
    const el = await cmp.findByTestId("@repo/nextjs_template/HomePage");
    expect(el).toBeInstanceOf(HTMLDivElement);
  });
});
