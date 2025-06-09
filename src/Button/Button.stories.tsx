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
