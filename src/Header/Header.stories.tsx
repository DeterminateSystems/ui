import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from ".";
import { Placeholder } from "../Placeholder";
import ColorSchemeToggle from "../ColorSchemeToggle";

const meta = {
  title: "Organism/Header",
  component: Header,
  argTypes: {
    logo: { type: "function" },
    elements: { type: "function" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <Placeholder height="100%" width="100px" label="Logo" />,
    elements: [
      <ColorSchemeToggle key="color-scheme-toggle" />,
      <Placeholder key="element-1" height="100%" label="Element" />,
      <Placeholder key="navigation" height="100%" label="Nav" />,
    ],
  },
};
