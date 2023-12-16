import * as React from "react";

export const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <button data-testid="@repo/ui/button">{children}</button>;
};
