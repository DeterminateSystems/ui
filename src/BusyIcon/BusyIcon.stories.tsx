import type { Meta, StoryObj } from "@storybook/react-vite";

import BusyIcon from ".";

const meta = {
  title: "Atoms/BusyIcon",
  component: BusyIcon,
} satisfies Meta<typeof BusyIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Base: Story = {
  args: {
    size: "base",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Complete: Story = {
  args: {
    size: "base",
    complete: true,
  },
};
