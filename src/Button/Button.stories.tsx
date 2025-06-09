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
    children: "Black",
    color: "black",
    ariaLabel: "Example black button",
    onClick: () => {},
  },
};

export const White: Story = {
  args: {
    children: "White",
    color: "white",
    ariaLabel: "Example white button",
    onClick: () => {},
  },
};

export const DarkBlue: Story = {
  args: {
    children: "Dark blue",
    color: "dark-blue",
    ariaLabel: "Example dark blue button",
    onClick: () => {},
  },
};

export const BlueA: Story = {
  args: {
    children: "Blue A",
    color: "blue-a",
    ariaLabel: "Example blue-a button",
    onClick: () => {},
  },
};

export const Red: Story = {
  args: {
    children: "Red",
    color: "red",
    ariaLabel: "Example red button",
    onClick: () => {},
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    color: "black",
    rounded: true,
    ariaLabel: "Example rounded button",
    onClick: () => {},
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
    color: "black",
    ariaLabel: "Example rounded button",
    onClick: () => {},
  },
};

export const LargeRounded: Story = {
  args: {
    children: "Large rounded",
    size: "lg",
    color: "white",
    rounded: true,
    ariaLabel: "Example large rounded button",
    onClick: () => {},
  },
};
