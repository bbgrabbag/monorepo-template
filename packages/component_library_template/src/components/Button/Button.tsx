import MuiButton, { ButtonProps } from "@mui/material/Button";
import * as React from "react";

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton
      data-testid="@repo/component_library_template/Button"
      {...props}
    ></MuiButton>
  );
};
