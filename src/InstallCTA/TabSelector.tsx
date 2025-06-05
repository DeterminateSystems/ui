import { useCallback, type FC, type MouseEvent } from "react";

import type { InstallTarget } from "./types";

export interface TabSelectorProps {
  name: InstallTarget;
  icon: FC;
  active: boolean;
  onClick: () => void;
}

const TabSelector: FC<TabSelectorProps> = ({
  name,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      onClick();
    },
    [onClick],
  );

  return (
    <li className="install-cta__tab">
      <a
        href="#"
        className={
          active
            ? "install-cta__link install-cta__link--active"
            : "install-cta__link"
        }
        onClick={handleClick}
      >
        <Icon /> {name}
      </a>
    </li>
  );
};

export default TabSelector;
