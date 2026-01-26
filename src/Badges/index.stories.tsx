import type { Meta, StoryObj } from "@storybook/react-vite";

import DSPStatusBadge from "../DSPStatusBadge";
import SeverityBadge from "../SeverityBadge";
import Badges from "./";

const meta = {
  title: "Atoms/Badges",
  component: Badges,
} satisfies Meta<typeof Badges>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Badges>
        <DSPStatusBadge status="Affected" />
        <SeverityBadge severity="Critical" />
      </Badges>
    </>
  ),
};
