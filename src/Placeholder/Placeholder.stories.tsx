import type { Meta, StoryObj } from "@storybook/react-vite";

import { Placeholder } from "./";

const meta = {
  title: "Atoms/Placeholder",
  component: Placeholder,
  argTypes: {
    id: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "200px",
    label: "Label",
  },
};
