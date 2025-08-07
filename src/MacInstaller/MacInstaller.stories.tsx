import type { Meta, StoryObj } from "@storybook/react-vite";

import MacInstaller from "./";

const meta = {
  title: "Molecules/MacInstaller",
  component: MacInstaller,
  argTypes: {},
} satisfies Meta<typeof MacInstaller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
