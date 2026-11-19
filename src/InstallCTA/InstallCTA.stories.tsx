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

// Smaller screens, using the viewports from `.storybook/preview.tsx`.

export const MobileMacOS: Story = {
  name: "Mobile: macOS",
  args: {
    initialTab: InstallTarget.MacOS,
  },
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};

export const MobileLinux: Story = {
  name: "Mobile: Linux",
  args: {
    initialTab: InstallTarget.Linux,
  },
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};

export const LargeMobileWSL: Story = {
  name: "Large mobile: WSL",
  args: {
    initialTab: InstallTarget.WSL,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const TabletLinux: Story = {
  name: "Tablet: Linux",
  args: {
    initialTab: InstallTarget.Linux,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
};

export const SameSiteNixOSLink: Story = {
  name: "Same-site NixOS link",
  args: {
    nixosHref: "/guides/advanced-installation#nixos",
  },
};
