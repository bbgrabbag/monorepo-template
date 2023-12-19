import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Component Library Template/Button",
  component: Button,
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary"],
    },
  },
  args: {
    children: "test",
    variant: "outlined",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props} />,
};
