import type { Meta, StoryObj } from "@storybook/react";

import Link from "./";

const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: { type: "string" },
    external: { type: "boolean" },
    children: { type: "string" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Internal: Story = {
  args: {
    href: "#",
    children: "Internal Link"
  },
};

export const External: Story = {
  args: {
    href: "#",
    external: true,
    children: "External Link"
  },
};
