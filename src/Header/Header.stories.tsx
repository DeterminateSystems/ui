import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from ".";
import { Placeholder } from "../Placeholder";
import ColorSchemeToggle from "../ColorSchemeToggle";

const meta = {
  title: "Organism/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <>
    <Header>
      <Header.Logo>
        <Placeholder height="100%" width="100px" label="Logo" />
      </Header.Logo>

      <Header.Element>
        <ColorSchemeToggle />
      </Header.Element>
      <Header.Element>
        <Placeholder height="100%" width="100px" label="Primary Element" />
      </Header.Element>

      <Header.Element>
        <Placeholder height="100%" label="Navigation Link" />
      </Header.Element>
    </Header>
  </>
);
