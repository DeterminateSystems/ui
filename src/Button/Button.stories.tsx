import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./";

const meta = {
  title: "Atoms/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Make clicks visible in the inspector
const onClick = action("click");

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
    onClick,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
    onClick,
  },
};

export const LargePrimary: Story = {
  args: {
    children: "Large primary",
    size: "lg",
    color: "primary",
    onClick,
  },
};

export const LargeSecondary: Story = {
  args: {
    ...LargePrimary.args,
    children: "Large secondary",
    color: "secondary",
    onClick,
  },
};
