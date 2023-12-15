import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./HomePage";

const meta: Meta<typeof HomePage> = {
  title: "Next App Template/Modules/Home",
  component: HomePage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  render: () => <HomePage />,
};
