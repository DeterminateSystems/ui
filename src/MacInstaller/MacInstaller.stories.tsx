import type { Meta, StoryObj } from "@storybook/react";

import MacInstaller from "./";

const meta = {
  title: "Molecules/MacInstaller",
  component: MacInstaller,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof MacInstaller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
