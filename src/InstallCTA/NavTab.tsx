import type { FC } from "react";

import type { InstallTarget } from "./types";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

export interface NavTabProps {
  name: InstallTarget;
  icon: FC;
  href: string;
  external?: boolean;
}

const NavTab: FC<NavTabProps> = ({
  name,
  icon: Icon,
  href,
  external = false,
}) => (
  <li className="install-cta__tab">
    <a
      href={href}
      className="install-cta__link"
      target={external ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      <Icon /> {name}
    </a>
    <ArrowTopRightOnSquareIcon className="install-cta__external" />
  </li>
);

export default NavTab;

