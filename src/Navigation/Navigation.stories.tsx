import type { Meta, StoryObj } from "@storybook/react-vite";

import Navigation from ".";
import { Placeholder } from "../Placeholder";
import Header from "../Header";
import ColorSchemeToggle from "../ColorSchemeToggle";

const meta = {
  title: "Molecules/Navigation",
  component: Navigation,
  argTypes: {
    initialState: {
      options: ["open", "closed"],
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialState: undefined,
  },
  render: ({ initialState }) => (
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
        <div>
          <div>
            <Navigation initialState={initialState}>
              <Navigation.Element>
                <Placeholder height="100%" label="Primary Element" />
              </Navigation.Element>

              <Navigation.Element>
                <Placeholder height="100%" label="Navigation Link" />
              </Navigation.Element>
            </Navigation>
          </div>
        </div>
      </div>
    </>
  ),
};

export const InHeader: Story = {
  args: {
    initialState: undefined,
  },
  render: ({ initialState }) => (
    <>
      <Header>
        <Header.Logo>
          <Placeholder height="100%" label="DetSys Logo" />
        </Header.Logo>
        <Header.Element>
          <ColorSchemeToggle />
          <Navigation initialState={initialState}>
            <Navigation.Element>
              <Placeholder height="100%" label="Lorem" />
            </Navigation.Element>

            <Navigation.Element>
              <Placeholder height="100%" label="Ipsum" />
            </Navigation.Element>
          </Navigation>
        </Header.Element>
      </Header>
    </>
  ),
};

export const DefaultOpen: Story = {
  args: {
    initialState: "open",
  },
  render: ({ initialState }) => (
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
        <div>
          <div>
            <Navigation initialState={initialState}>
              <Navigation.Element>
                <Placeholder height="100%" label="Primary Element" />
              </Navigation.Element>

              <Navigation.Element>
                <Placeholder height="100%" label="Navigation Link" />
              </Navigation.Element>
            </Navigation>
          </div>
        </div>
      </div>
    </>
  ),
};

export const InHeaderOpen: Story = {
  args: {
    initialState: "open",
  },
  render: ({ initialState }) => (
    <>
      <Header>
        <Header.Logo>
          <Placeholder height="100%" label="DetSys Logo" />
        </Header.Logo>
        <Header.Element>
          <ColorSchemeToggle />
          <Navigation initialState={initialState}>
            <Navigation.Element>
              <Placeholder height="100%" label="Lorem" />
            </Navigation.Element>

            <Navigation.Element>
              <Placeholder height="100%" label="Ipsum" />
            </Navigation.Element>
          </Navigation>
        </Header.Element>
      </Header>
    </>
  ),
};
