import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export type NavbarColor = "black" | "white" | "gray";

export interface NavbarProps {
  /**
   * Whether the navbar stays in place upon scroll.
   */
  fixed?: boolean;

  /**
   * The navbar's basic color scheme.
   */
  color: NavbarColor;
}

/**
 * A standard navbar at the top of the page.
 */
export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  children,
  fixed = false,
  color,
}) => (
  <nav
    className={clsx("navbar", {
      "navbar--fixed": fixed,
      "navbar--white": color === "white",
      "navbar--black": color === "black",
      "navbar--gray": color === "gray",
    })}
  >
    <div className="navbar--container">{children}</div>
  </nav>
);

export const NavbarBrand: FC<PropsWithChildren> = ({ children }) => (
  <div className="navbar--brand">{children}</div>
);

export const NavbarMenu: FC<PropsWithChildren> = ({ children }) => (
  <menu className="navbar--menu">{children}</menu>
);
