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

export const Black: Story = {
  args: {
    children: "Black",
    color: "black",
    ariaLabel: "Example black button",
    onClick,
  },
};

export const White: Story = {
  args: {
    children: "White",
    color: "white",
    ariaLabel: "Example white button",
    onClick,
  },
};

export const DarkBlue: Story = {
  args: {
    children: "Dark blue",
    color: "dark-blue",
    ariaLabel: "Example dark blue button",
    onClick,
  },
};

export const BlueA: Story = {
  args: {
    children: "Blue A",
    color: "blue-a",
    ariaLabel: "Example blue-a button",
    onClick,
  },
};

export const Red: Story = {
  args: {
    children: "Red",
    color: "red",
    ariaLabel: "Example red button",
    onClick,
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
    color: "black",
    ariaLabel: "Example large button",
    onClick,
  },
};
