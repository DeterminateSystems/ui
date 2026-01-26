import { useId, useState, type FC } from "react";

import "./index.scss";
import React from "react";
import clsx from "clsx";
import { Bars3Icon } from "@heroicons/react/24/outline";

export interface NavigationProps {
  initialState?: "open" | "closed";
  elements: React.ReactElement[];
}

const Navigation: FC<NavigationProps> = ({
  elements,
  initialState = "closed",
}) => {
  const navigationId = useId();

  const [menuOpen, setMenuOpen] = useState(initialState === "open");

  const toggleNavigation = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={clsx(
        "navigation",
        menuOpen ? "navigation--open" : "navigation--closed",
      )}
    >
      <button
        type="button"
        className="navigation__expand"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls={navigationId}
        onClick={toggleNavigation}
      >
        <Bars3Icon aria-hidden="true" focusable="false" />
      </button>
      <div
        id={navigationId}
        aria-hidden={!menuOpen}
        className="navigation__elements"
      >
        {elements.map((child, idx) => (
          <div key={child.key ?? idx} className="navigation__element">
            {child}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
