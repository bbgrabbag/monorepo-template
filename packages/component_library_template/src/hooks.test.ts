import { act, renderHook } from "@testing-library/react";
import { useThemeAPI } from "./hooks";
import { CustomThemeProvider } from "./components/CustomThemeProvider";

describe("Test useThemeAPI()", () => {
  test("Should initialize with defaults", () => {
    const { result } = renderHook(() => useThemeAPI(), {
      wrapper: CustomThemeProvider,
    });
    expect(result.current.themeName).toBe("default");
    expect(result.current.themeMode).toBe("light");
    expect(result.current.theme).toBeDefined();
  });

  test("Should toggle between light and dark mode", () => {
    const { result } = renderHook(() => useThemeAPI(), {
      wrapper: CustomThemeProvider,
    });
    act(() => {
      result.current.toggleThemeMode();
    });
    expect(result.current.themeMode).toBe("dark");
  });
});
