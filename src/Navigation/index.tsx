import { useState, type FC } from "react";

import "./index.scss";
import React from "react";
import clsx from "clsx";
import { Bars3Icon } from "@heroicons/react/24/outline";

export interface NavigationProps {
  initialState?: "open" | "closed";
}

const Root: FC<React.PropsWithChildren<NavigationProps>> = ({
  children,
  initialState = "closed",
}) => {
  let elements: React.ReactElement[] = [];

  const [menuState, setMenuState] = useState<boolean>(initialState == "open");

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === Navigation.Element) {
      elements.push(child);
    } else {
      console.log("Dropping unknown children of Header.");
    }
  });

  const toggleNavigation = () => {
    setMenuState(!menuState);
  };

  return (
    <div
      className={clsx(
        "navigation",
        menuState ? "navigation--open" : "navigation--closed",
      )}
    >
      <button
        className="navigation__expand"
        aria-label="Open navigation"
        onClick={toggleNavigation}
      >
        <Bars3Icon />
      </button>
      <div className="navigation__elements">{elements}</div>
    </div>
  );
};

export interface NavigationElementProps {}
const Element: FC<React.PropsWithChildren<NavigationElementProps>> = ({
  children,
}) => {
  return <div className="navigation__element">{children}</div>;
};

const Navigation = Object.assign(Root, {
  Element,
});

export default Navigation;
