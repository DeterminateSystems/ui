import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const Linux: Story = {
  args: {
    initialTab: InstallTarget.Linux,
  },
};

export const AWS: Story = {
  args: {
    initialTab: InstallTarget.AWS,
  },
};

export const GitHub: Story = {
  name: "GitHub",
  args: {
    initialTab: InstallTarget.GitHub,
  },
};

export const NixOS: Story = {
  name: "NixOS",
  args: {
    initialTab: InstallTarget.NixOS,
  },
};
