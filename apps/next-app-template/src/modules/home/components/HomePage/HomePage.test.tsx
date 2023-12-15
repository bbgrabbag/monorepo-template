import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("Test <HomePage> component", () => {
  test("Should render", async () => {
    const cmp = render(<HomePage />);
    expect(await cmp.findByTestId("@apps/portfolio/home-page")).toBeInstanceOf(
      HTMLDivElement,
    );
  });
});
