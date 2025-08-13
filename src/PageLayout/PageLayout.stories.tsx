import type { Meta, StoryObj } from "@storybook/react-vite";

import PageLayout from ".";
import { Placeholder } from "../Placeholder";

const meta = {
  title: "Template/PageLayout",
  argTypes: {
    width: { options: ["full"] },

    // Marked these all as function instead of an "object" control due to:
    // https://github.com/storybookjs/storybook/issues/32202
    header: { type: "function" },
    footer: { type: "function" },
    panes: { type: "function" },
    content: { type: "function" },
  },
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "full",
    header: <Placeholder height="2em" label="Header" />,
    footer: <Placeholder height="2em" label="Footer" />,
    panes: [
      <Placeholder key="pane-1" height="3em" label="Pane 1" />,
      <Placeholder key="pane-2" height="3em" label="Pane 2" />,
    ],
    content: <Placeholder height="15em" label="Content" />,
  },
};
