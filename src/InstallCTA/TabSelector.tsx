import type { FC } from "react";
import type { IconType } from "react-icons";

import type { InstallTarget } from "./types";

export interface TabSelectorProps {
  name: InstallTarget;
  icon: IconType;
  active: boolean;
  onClick: () => void;
}

/** A tab that switches the install panel. */
const TabSelector: FC<TabSelectorProps> = ({
  name,
  icon: Icon,
  active,
  onClick,
}) => (
  <li className="install-cta__tab">
    <button
      type="button"
      className={
        active
          ? "install-cta__link install-cta__link--active"
          : "install-cta__link"
      }
      aria-pressed={active}
      onClick={onClick}
    >
      <Icon className="install-cta__icon" aria-hidden />
      {name}
    </button>
  </li>
);

export default TabSelector;
