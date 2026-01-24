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

  const [menuState, setMenuState] = useState<boolean>(initialState === "open");

  const toggleNavigation = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <nav
      className={clsx(
        "navigation",
        menuState ? "navigation--open" : "navigation--closed",
      )}
    >
      <button
        type="button"
        className="navigation__expand"
        aria-label={menuState ? "Close navigation" : "Open navigation"}
        aria-expanded={menuState}
        aria-controls={navigationId}
        onClick={toggleNavigation}
      >
        <Bars3Icon aria-hidden="true" focusable="false" />
      </button>
      <div
        id={navigationId}
        aria-hidden={!menuState}
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
