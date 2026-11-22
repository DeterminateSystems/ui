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
    <nav className="relative lg:static lg:h-full lg:p-1">
      <button
        type="button"
        className={clsx(svgButton, "lg:hidden")}
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
          menuOpen ? "flex" : "hidden",
          "max-lg:absolute max-lg:top-[calc(100%+--spacing(1))] max-lg:right-0 max-lg:z-10",
          "max-lg:max-w-screen max-lg:origin-top-right max-lg:flex-col max-lg:gap-2",
          "max-lg:rounded-lg max-lg:px-[0.8rem] max-lg:py-[0.4rem]",
          "max-lg:border max-lg:border-solid max-lg:border-ds-ink max-lg:bg-ds-midnight",
          "max-lg:light:border-0 max-lg:light:bg-ds-white",
          "max-lg:light:shadow-[--spacing(1)_--spacing(1)_--spacing(1)_0_var(--color-ds-mist),--spacing(-1)_--spacing(1)_--spacing(1)_0_var(--color-ds-mist)]",
          // Large screens: always shown, inline
          "items-center lg:flex lg:h-6 lg:flex-row lg:gap-[1em]",
        )}
      >
        {elements.map((child, idx) => (
          <div
            key={child.key ?? idx}
            className="max-lg:w-[min(320px,100vw)] max-[40.625rem]:w-[268px]"
          >
            {child}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
