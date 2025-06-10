import type { Meta, StoryObj } from "@storybook/react";

import Navbar, { type NavbarMenuItem } from ".";

const meta = {
  title: "Atoms/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
//type Story = StoryObj<typeof meta>;

const items: NavbarMenuItem[] = [
  {
    text: "One",
    href: "#",
  },
  {
    text: "Two",
    href: "#",
  },
  {
    text: "Three",
    href: "#",
  },
  {
    text: "Four",
    href: "#",
  },
];

export const All = () => (
  <div
    style={{
      minWidth: "100%",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <Navbar color="white" title="FlakeHub" href="#" items={items} />

    <Navbar color="black" title="FlakeHub" href="#" items={items} />

    <Navbar color="gray" title="FlakeHub" href="#" items={items} />
  </div>
);
