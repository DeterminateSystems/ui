import type { Meta, StoryObj } from "@storybook/react-vite";

import DSPStatusBadge, { STATUSES } from ".";

const meta = {
  title: "Atoms/DSPStatusBadge",
  component: DSPStatusBadge,
  argTypes: {
    status: {
      description: "status",
      control: "select",
      options: [...STATUSES],
    },
  },
} satisfies Meta<typeof DSPStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "Identified",
  },
};

export const Affected: Story = {
  args: {
    status: "Affected",
  },
};

export const NotAffected: Story = {
  args: {
    status: "Not affected",
  },
};

export const Waiting: Story = {
  args: {
    status: "Waiting",
  },
};

export const Fixed: Story = {
  args: {
    status: "Fixed",
  },
};

export const Ignored: Story = {
  args: {
    status: "Ignored",
  },
};

export const All = {
  render: () => {
    return <div>
    {STATUSES.map((status) => <div><DSPStatusBadge status={status} /></div>)}
    </div>;
  }
};

