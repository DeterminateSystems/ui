import type { Meta, StoryObj } from "@storybook/react";

import CopyButton from "./";

const meta = {
  title: "Atoms/CopyButton",
  component: CopyButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    data: { control: "text" },
  },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: "Hello, world",
  },
};
