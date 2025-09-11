import type { Meta, StoryObj } from "@storybook/react-vite";

import LabeledRadioInput from ".";

const meta = {
  title: "Molecules/LabeledRadioInput",
  component: LabeledRadioInput,
} satisfies Meta<typeof LabeledRadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrganizationType: Story = {
  args: {
    name: "organization_type",
    label: "This organization belongs to:",
    options: [
      {
        value: "Personal",
        children: (
          <>
            <strong>My personal account</strong> This organization is for you,{" "}
            <strong>grahamc</strong>.
          </>
        ),
      },
      {
        value: "Business",
        children: (
          <>
            <strong>A business or institution</strong> For example: Determinate
            Systems, Inc., Example Institute, World Health Organization.
          </>
        ),
      },
    ],
  },
};

export const OrganizationTypeSelected: Story = {
  args: {
    selected: "Personal",
    ...OrganizationType.args,
  },
};

export const OrganizationTypeStatic: Story = {
  args: {
    selected: "Personal",
    disabled: true,
    ...OrganizationType.args,
  },
};

export const OrganizationTypeError: Story = {
  args: {
    error: "Please classify your organization ownership.",
    ...OrganizationType.args,
  },
};
