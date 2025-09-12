import type { Meta, StoryObj } from "@storybook/react-vite";

import PageLayout from ".";
import { Placeholder } from "../Placeholder";
import Header from "../Header";
import DetSysIcon from "../DetSysIcon";
import ColorSchemeToggle from "../ColorSchemeToggle";
import Navigation from "../Navigation";

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

export const FleshedOut: Story = {
  args: {
    header: (
      <Header
        logo={
          <>
            <DetSysIcon size="base" />
            <h1 style={{ margin: 0 }}>DetSys</h1>
          </>
        }
        elements={[
          <ColorSchemeToggle key="color-scheme-toggle" />,
          <Navigation
            key="nav"
            elements={[
              <a key="docs" href="#">
                Docs
              </a>,
              <a key="flakes" href="#">
                Flakes
              </a>,
              <a key="orgs" href="#">
                Orgs
              </a>,
              <Placeholder key="lorem" height="100%" label="Lorem" />,
              <Placeholder key="ipsum" height="100%" label="Ipsum" />,
            ]}
          />,
        ]}
      />
    ),
    content: <div style={{ height: "100em" }} />,
    panes: [<Placeholder height="3em" label="Pane 1" />],
  },
};
