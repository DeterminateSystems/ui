import type { Meta, StoryObj } from "@storybook/react";

import DownloadButton from "./";

const meta = {
  title: "Atoms/DownloadButton",
  component: DownloadButton,
  argTypes: {
    filename: { control: "text" },
    data: { control: "text" },
  },
} satisfies Meta<typeof DownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filename: "hello.txt",
    data: "Hello, world",
  },
};
