import type { Meta, StoryObj } from "@storybook/react-vite";

import ColorSchemeToggle from ".";

const meta = {
  title: "Atoms/ColorSchemeToggle",
  component: ColorSchemeToggle,
  parameters: { enumerateColorSchemePreferences: true },
} satisfies Meta<typeof ColorSchemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
