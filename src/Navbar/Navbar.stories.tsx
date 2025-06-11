import type { Meta } from "@storybook/react";

import { Navbar, NavbarBrand, NavbarMenu } from ".";

const meta = {
  title: "Atoms/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;

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
    <Navbar color="white">
      <NavbarBrand>
        <a href="#">White</a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#">One</a>
        <a href="#">Two</a>
        <a href="#">Three</a>
      </NavbarMenu>
    </Navbar>

    <Navbar color="black">
      <NavbarBrand>
        <a href="#">Black</a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#">One</a>
        <a href="#">Two</a>
        <a href="#">Three</a>
      </NavbarMenu>
    </Navbar>

    <Navbar color="gray">
      <NavbarBrand>
        <a href="#">Gray</a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#">One</a>
        <a href="#">Two</a>
        <a href="#">Three</a>
      </NavbarMenu>
    </Navbar>

    <Navbar color="white">
      <NavbarBrand>
        <a href="#">White with shadow</a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#">One</a>
        <a href="#">Two</a>
        <a href="#">Three</a>
      </NavbarMenu>
    </Navbar>
  </div>
);
