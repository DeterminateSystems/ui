import type { Meta, StoryObj } from "@storybook/react";

import GitHubButton from ".";

const meta = {
  title: "Atoms/GitHubButton",
  component: GitHubButton,
  argTypes: {
    owner: { control: "text" },
    repo: { control: "text" },
  },
} satisfies Meta<typeof GitHubButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    owner: "DeterminateSystems",
    repo: "ui",
  },
};
