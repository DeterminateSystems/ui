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
    children: { type: "function" },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialState: undefined,
    children: [
      <Placeholder height="100%" label="Primary Element" />,
      <Placeholder height="100%" label="Navigation Link" />,
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
      <Navigation {...props} />
    </div>
  ),
};

export const InHeader: Story = {
  args: {
    initialState: undefined,
    children: [
      <Placeholder height="100%" label="Lorem" />,
      <Placeholder height="100%" label="Ipsum" />,
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
    children: [
      <Placeholder height="100%" label="Lorem" />,
      <Placeholder height="100%" label="Ipsum" />,
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
        <Navigation {...props} />
      </div>
    </>
  ),
};

export const InHeaderOpen: Story = {
  args: {
    initialState: "open",
    children: [
      <Placeholder height="100%" label="Lorem" />,
      <Placeholder height="100%" label="Ipsum" />,
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
