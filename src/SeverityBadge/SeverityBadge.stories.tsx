import type { Meta, StoryObj } from "@storybook/react-vite";

import SeverityBadge, { SEVERITIES } from "./";

const meta = {
  title: "Atoms/SeverityBadge",
  component: SeverityBadge,
  argTypes: {
    severity: {
      description: "Severity",
      control: "select",
      options: [...SEVERITIES],
    },
  },
} satisfies Meta<typeof SeverityBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    severity: "Important",
  },
};

export const Critical: Story = {
  args: {
    severity: "Critical",
  },
};

export const Important: Story = {
  args: {
    severity: "Important",
  },
};

export const Medium: Story = {
  args: {
    severity: "Medium",
  },
};

export const Low: Story = {
  args: {
    severity: "Low",
  },
};

export const Unknown: Story = {
  args: {
    severity: "Unknown",
  },
};

export const All = {
  render: () => {
    return (
      <div>
        {SEVERITIES.map((severity) => (
          <div>
            <SeverityBadge severity={severity} />
          </div>
        ))}
      </div>
    );
  },
};
