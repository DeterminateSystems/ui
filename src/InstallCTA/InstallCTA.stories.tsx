import type { Meta, StoryObj } from "@storybook/react-vite";

import InstallCTA from "./";
import { InstallTarget } from "./types";

const meta = {
  title: "Composite/InstallCTA",
  component: InstallCTA,
  argTypes: {
    initialTab: {
      type: "string",
      options: [
        InstallTarget.AWS,
        InstallTarget.GitHub,
        InstallTarget.Linux,
        InstallTarget.MacOS,
        InstallTarget.NixOS,
      ],
    },
    version: {
      type: "string",
    },
  },
} satisfies Meta<typeof InstallCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MacOSLatest: Story = {
  name: "macOS Tagged",
  args: {
    initialTab: InstallTarget.MacOS,
  },
};

export const LinuxLatest: Story = {
  args: {
    initialTab: InstallTarget.Linux,
  },
};

export const AWSLatest: Story = {
  args: {
    initialTab: InstallTarget.AWS,
  },
};

export const GitHubLatest: Story = {
  name: "GitHub Latest",
  args: {
    initialTab: InstallTarget.GitHub,
  },
};

export const NixOSLatest: Story = {
  name: "NixOS Latest",
  args: {
    initialTab: InstallTarget.NixOS,
  },
};

export const MacOSTagged: Story = {
  name: "macOS Tagged",
  args: {
    initialTab: InstallTarget.MacOS,
    version: "3.8.6",
  },
};

export const LinuxTagged: Story = {
  args: {
    initialTab: InstallTarget.Linux,
    version: "3.8.6",
  },
};

export const AWSTagged: Story = {
  args: {
    initialTab: InstallTarget.AWS,
    version: "3.8.6",
  },
};

export const GitHubTagged: Story = {
  name: "GitHub Tagged",
  args: {
    initialTab: InstallTarget.GitHub,
    version: "3.8.6",
  },
};

export const NixOSTagged: Story = {
  name: "NixOS Tagged",
  args: {
    initialTab: InstallTarget.NixOS,
    version: "3.8.6",
  },
};
