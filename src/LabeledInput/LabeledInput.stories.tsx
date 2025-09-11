import type { Meta, StoryObj } from "@storybook/react-vite";

import LabeledInput from ".";
import { Placeholder } from "../Placeholder";

const meta = {
  title: "Molecules/LabeledInput",
  component: LabeledInput,
} satisfies Meta<typeof LabeledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Organization name",
    help: "Your organization name will be part of Flake URLs and cannot be changed.",
    children: () => <Placeholder label="Placeholder Input" height={"2em"} />,
  },
};

export const ExampleInError: Story = {
  args: {
    label: "Organization name",
    help: "Your organization name will be part of Flake URLs and cannot be changed.",
    error: "Your organization name is invalid",
    children: () => <Placeholder label="Placeholder Input" height={"2em"} />,
  },
};
