import type { FC } from "react";

import "./index.scss";
import clsx from "clsx";

export type NavbarMenuItem = {
  text: string;
  href: string;
};

export type NavbarColor = "black" | "white" | "gray";

export interface NavbarProps {
  /**
   * The main title.
   */
  title: string;

  /**
   * Link in brand.
   */
  href: string;

  /**
   * Whether the navbar stays in place upon scroll.
   */
  fixed?: boolean;

  /**
   * The navbar's basic color scheme.
   */
  color: NavbarColor;

  /**
   * Menu items.
   */
  items?: NavbarMenuItem[];
}

/**
 * A standard navbar at the top of the page.
 */
const Navbar: FC<NavbarProps> = ({
  title,
  href,
  fixed = false,
  color,
  items = [],
}) => (
  <nav
    className={clsx("navbar", {
      "navbar--fixed": fixed,
      "navbar--white": color === "white",
      "navbar--black": color === "black",
      "navbar--gray": color === "gray",
    })}
  >
    <div className="navbar--container">
      <div className="navbar--brand">
        <a href={href}>{title}</a>
      </div>

      {items?.length > 0 && (
        <div className="navbar--menu">
          {items.map(({ text, href }) => (
            <a href={href}>{text}</a>
          ))}
        </div>
      )}
    </div>
  </nav>
);

export default Navbar;
