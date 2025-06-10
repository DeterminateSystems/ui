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

export const BasePrimary: Story = {
  args: {
    children: "Base primary",
    size: "base",
    color: "primary",
    onClick,
  },
};

export const BaseSecondary: Story = {
  args: {
    children: "Base secondary",
    size: "base",
    color: "secondary",
    onClick,
  },
};

export const NoHoverEffect: Story = {
  args: {
    children: "Hoverable",
    size: "base",
    color: "primary",
    hover: false,
    onClick,
  },
};

export const SmallPrimary: Story = {
  args: {
    children: "Small primary",
    size: "sm",
    color: "primary",
    onClick,
  },
};

export const SmallSecondary: Story = {
  args: {
    children: "Small secondary",
    size: "sm",
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
