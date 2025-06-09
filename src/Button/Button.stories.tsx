import type { Meta, StoryObj } from "@storybook/react";

import Button from "./";

const meta = {
  title: "Atoms/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    children: "Black button",
    color: "black",
    ariaLabel: "Example black button",
    onClick: () => {},
  },
};

export const White: Story = {
  args: {
    children: "White button",
    color: "white",
    ariaLabel: "Example white button",
    onClick: () => {},
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded button",
    color: "black",
    rounded: true,
    ariaLabel: "Example rounded button",
    onClick: () => {},
  },
};

export const Large: Story = {
  args: {
    children: "Large button",
    size: "lg",
    color: "black",
    ariaLabel: "Example rounded button",
    onClick: () => {},
  },
};

export const LargeRounded: Story = {
  args: {
    children: "Large rounded button",
    size: "lg",
    color: "white",
    rounded: true,
    ariaLabel: "Example large rounded button",
    onClick: () => {},
  },
};
