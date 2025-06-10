import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export type NavbarColor = "black" | "white";

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
const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  children,
  fixed = false,
  color,
}) => (
  <nav
    className={clsx("navbar", {
      "navbar--fixed": fixed,
      "navbar--white": color === "white",
      "navbar--black": color === "black",
    })}
  >
    {children}
  </nav>
);

export default Navbar;
