import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { HomePage } from "./HomePage";

const meta: Meta<typeof HomePage> = {
  title: "Nextjs Template/HomePage",
  component: HomePage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  render: (props) => <HomePage {...props} />,
};
