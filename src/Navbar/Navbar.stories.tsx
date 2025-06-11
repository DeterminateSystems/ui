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
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <Navbar color="white">
      <NavbarBrand>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          White
        </a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          One
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Two
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Three
        </a>
      </NavbarMenu>
    </Navbar>

    <Navbar color="black">
      <NavbarBrand>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Black
        </a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          One
        </a>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Two
        </a>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Three
        </a>
      </NavbarMenu>
    </Navbar>

    <Navbar color="gray">
      <NavbarBrand>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Gray
        </a>
      </NavbarBrand>
      <NavbarMenu>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          One
        </a>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Two
        </a>
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Three
        </a>
      </NavbarMenu>
    </Navbar>
  </div>
);
