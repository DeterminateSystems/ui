import type { Meta, StoryObj } from "@storybook/react";

import Navbar from ".";

const meta = {
  title: "Atoms/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { type: "string" },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    children: "White navbar",
    color: "white",
  },
};

export const Black: Story = {
  args: {
    children: "Black navbar",
    color: "black",
  },
};
