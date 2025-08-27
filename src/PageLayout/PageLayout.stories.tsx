import type { Meta, StoryObj } from "@storybook/react-vite";

import PageLayout from ".";
import { Placeholder } from "../Placeholder";

const meta = {
  title: "Template/PageLayout",
  component: PageLayout,
  argTypes: {
    width: {
      options: ["full"],
    },
  },
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "full",
  },
  render: () => (
    <>
      <PageLayout width="full">
        <PageLayout.Header>
          <Placeholder height="2em" label="Header" />
        </PageLayout.Header>
        <PageLayout.Footer>
          <Placeholder height="2em" label="Footer" />
        </PageLayout.Footer>
        <PageLayout.Content>
          <Placeholder height="15em" label="Content" />
        </PageLayout.Content>
        <PageLayout.Pane>
          <Placeholder height="3em" label="Pane 1" />
        </PageLayout.Pane>
        <PageLayout.Pane>
          <Placeholder height="3em" label="Pane 2" />
        </PageLayout.Pane>
      </PageLayout>
    </>
  ),
};
