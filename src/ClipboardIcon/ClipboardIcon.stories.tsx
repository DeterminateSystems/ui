import type { Meta, StoryObj } from "@storybook/react-vite";

import ClipboardIcon from ".";

const meta = {
  title: "Atoms/ClipboardIcon",
  component: ClipboardIcon,
  argTypes: {
    copied: { control: "boolean" },
  },
} satisfies Meta<typeof ClipboardIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
  args: {
    copied: false,
  },
};

export const Active: Story = {
  args: {
    copied: true,
  },
};
