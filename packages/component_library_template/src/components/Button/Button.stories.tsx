import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Library Template/Components/Button",
  component: Button,
  args: {
    children: "test",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button>{props.children}</Button>,
};
