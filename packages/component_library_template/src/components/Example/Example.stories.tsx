import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Example } from "./Example";

const meta: Meta<typeof Example> = {
  title: "Component Library Template/Example",
  component: Example,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  render: (props) => <Example {...props} />,
};
