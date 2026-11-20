import { useId, useState, type FC } from "react";

import React from "react";
import clsx from "clsx";
import { MenuIcon } from "../icons";
import { svgButton } from "../styles/classes";

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
    // The padding on large screens matches the expander's padding on small ones
    <nav className="ui:relative ui:lg:static ui:lg:h-full ui:lg:p-1">
      <button
        type="button"
        className={clsx(svgButton, "ui:lg:hidden")}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls={navigationId}
        onClick={toggleNavigation}
      >
        <MenuIcon />
      </button>
      <div
        id={navigationId}
        className={clsx(
          // Small screens: a dropdown anchored under the expander
          menuOpen ? "ui:flex" : "ui:hidden",
          "ui:max-lg:absolute ui:max-lg:top-[calc(100%+--spacing(1))] ui:max-lg:right-0 ui:max-lg:z-10",
          "ui:max-lg:max-w-screen ui:max-lg:origin-top-right ui:max-lg:flex-col ui:max-lg:gap-2",
          "ui:max-lg:rounded-base ui:max-lg:px-[calc(var(--ui-spacing-pad-base)*2)] ui:max-lg:py-pad-base",
          "ui:max-lg:border ui:max-lg:border-solid ui:max-lg:border-black ui:max-lg:bg-very-black",
          "ui:max-lg:light:border-0 ui:max-lg:light:bg-white",
          "ui:max-lg:light:shadow-[--spacing(1)_--spacing(1)_--spacing(1)_0_var(--ui-color-light),--spacing(-1)_--spacing(1)_--spacing(1)_0_var(--ui-color-light)]",
          // Large screens: always shown, inline
          "ui:items-center ui:lg:flex ui:lg:h-6 ui:lg:flex-row ui:lg:gap-[1em]",
        )}
      >
        {elements.map((child, idx) => (
          <div
            key={child.key ?? idx}
            className="ui:max-lg:w-[min(320px,100vw)] ui:max-[40.625rem]:w-[268px]"
          >
            {child}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
