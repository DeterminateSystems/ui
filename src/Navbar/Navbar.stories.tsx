import type { Meta, StoryObj } from "@storybook/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import Navbar, { NavbarBrand, NavbarMenu, type NavbarMenuItem } from ".";
import { Button } from "..";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Atoms/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

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
