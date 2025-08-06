import type { Meta, StoryObj } from "@storybook/react";

import InstallCTA from "./";
import { InstallTarget } from "./types";

const meta = {
  title: "Composite/InstallCTA",
  component: InstallCTA,
  argTypes: {},
} satisfies Meta<typeof InstallCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MacOS: Story = {
  name: "macOS",
  args: {
    initialTab: InstallTarget.MacOS,
  },
};

export const WSL: Story = {
  args: {
    initialTab: InstallTarget.WSL,
  },
};

export const Linux: Story = {
  args: {
    initialTab: InstallTarget.Linux,
  },
};
