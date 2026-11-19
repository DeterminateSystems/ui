import type { FC, Ref } from "react";
import type { IconType } from "react-icons";

import type { InstallTarget } from "./types";

export interface TabSelectorProps {
  id: string;
  panelId: string;
  name: InstallTarget;
  icon: IconType;
  active: boolean;
  onClick: () => void;
  ref?: Ref<HTMLButtonElement>;
}

/**
 * A tab that switches the install panel. Only the active tab is in the Tab
 * order; the tablist moves focus between tabs with the arrow keys.
 */
const TabSelector: FC<TabSelectorProps> = ({
  id,
  panelId,
  name,
  icon: Icon,
  active,
  onClick,
  ref,
}) => (
  <button
    ref={ref}
    id={id}
    type="button"
    role="tab"
    className={
      active
        ? "install-cta__link install-cta__link--active"
        : "install-cta__link"
    }
    aria-selected={active}
    aria-controls={panelId}
    tabIndex={active ? 0 : -1}
    onClick={onClick}
  >
    <Icon className="install-cta__icon" aria-hidden />
    {name}
  </button>
);

export default TabSelector;
