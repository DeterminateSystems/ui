import type { FC } from "react";
import type { IconType } from "react-icons";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

import type { InstallTarget } from "./types";

export interface NavTabProps {
  name: InstallTarget;
  icon: IconType;
  href: string;
}

/**
 * A link styled as a tab. It leads to another page instead of switching the
 * panel, so it sits beside the tablist rather than in it.
 */
const NavTab: FC<NavTabProps> = ({ name, icon: Icon, href }) => {
  // Decided from the URL alone, so the server and the browser agree.
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className="install-cta__link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <Icon className="install-cta__icon" aria-hidden />
      {name}
      {external && (
        <>
          <ArrowTopRightOnSquareIcon
            className="install-cta__external"
            aria-hidden
          />
          <span className="install-cta__sr-only">(opens in a new tab)</span>
        </>
      )}
    </a>
  );
};

export default NavTab;
