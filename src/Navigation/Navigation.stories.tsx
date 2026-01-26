import type { Meta, StoryObj } from "@storybook/react-vite";

import Navigation from ".";
import { Placeholder } from "../Placeholder";
import Header from "../Header";
import ColorSchemeToggle from "../ColorSchemeToggle";
import DetSysIcon from "../DetSysIcon";

const meta = {
  title: "Molecules/Navigation",
  component: Navigation,
  argTypes: {
    initialState: {
      options: ["open", "closed"],
    },
    elements: { type: "function" },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialState: undefined,
    elements: [
      <Placeholder key="primary" height="100%" label="Primary Element" />,
      <Placeholder key="nav" height="100%" label="Navigation Link" />,
    ],
  },
  render: (props) => (
    <div
      style={{
        height: "300px",
        width: "500px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <div style={{ height: "30px" }}>
        <Navigation {...props} />
      </div>
    </div>
  ),
};

export const InHeader: Story = {
  args: {
    initialState: undefined,
    elements: [
      <Placeholder key="lorem" height="100%" label="Lorem" />,
      <Placeholder key="ipsum" height="100%" label="Ipsum" />,
    ],
  },
  render: (props) => (
    <Header
      logo={<DetSysIcon size="base" />}
      elements={[
        <ColorSchemeToggle key="color-scheme-toggle" />,
        <Navigation key="nav" {...props} />,
      ]}
    />
  ),
};

export const DefaultOpen: Story = {
  args: {
    initialState: "open",
    elements: [
      <Placeholder key="lorem" height="100%" label="Lorem" />,
      <Placeholder key="ipsum" height="100%" label="Ipsum" />,
    ],
  },
  render: (props) => (
    <>
      <div
        style={{
          height: "300px",
          width: "500px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ height: "30px" }}>
          <Navigation {...props} />
        </div>
      </div>
    </>
  ),
};

export const InHeaderOpen: Story = {
  args: {
    initialState: "open",
    elements: [
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
    ],
  },
  render: (props) => (
    <Header
      logo={<DetSysIcon size="base" />}
      elements={[
        <ColorSchemeToggle key="color-scheme-toggle" />,
        <Navigation key="nav" {...props} />,
      ]}
    />
  ),
};
