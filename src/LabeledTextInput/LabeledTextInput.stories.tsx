import type { Meta, StoryObj } from "@storybook/react-vite";

import LabeledTextInput from ".";

const meta = {
  title: "Molecules/LabeledTextInput",
  component: LabeledTextInput,
  argTypes: {
    name: {
      control: "text",
    },
    label: {
      control: "text",
    },
    error: {
      control: "text",
    },
    help: {
      control: "text",
    },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    pattern: { control: "text" },
    minLength: { control: "number" },
    maxLength: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
  },
} satisfies Meta<typeof LabeledTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrganizationName: Story = {
  args: {
    name: "organization_name",
    label: "Organization name",
    help: "Your organization name will be part of Flake URLs and cannot be changed.",
  },
};

export const OrganizationNamePlaceholder: Story = {
  args: {
    name: "organization_name",
    label: "Organization name",
    placeholder: "Who are you?",
    help: "Your organization name will be part of Flake URLs and cannot be changed.",
  },
};

export const StaticOrganizationName: Story = {
  args: {
    name: "organization_name",
    label: "Organization name",
    help: "Your organization is already registered and cannot be renamed.",
    defaultValue: "my-example-organization",
    disabled: true,
  },
};

export const InvalidOrganizationName: Story = {
  args: {
    name: "organization_name",
    label: "Organization name",
    help: "Your organization is already registered and cannot be renamed.",
    error:
      "You must provide a valid organization name: Name must only contain `-` or ASCII alphanumeric characters.",
    defaultValue: "my example organization!",
  },
};
