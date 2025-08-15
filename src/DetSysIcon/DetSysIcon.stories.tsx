import type { Meta, StoryObj } from "@storybook/react-vite";

import DetSysIcon from ".";

const meta = {
  title: "Atoms/DetSysIcon",
  component: DetSysIcon,
  argTypes: {
    size: { control: "select", options: ["sm", "base", "lg"] },
  },
} satisfies Meta<typeof DetSysIcon>;

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
