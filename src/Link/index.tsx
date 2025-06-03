import React, { type PropsWithChildren } from "react";

import "./index.scss";

export interface LinkProps {
  /**
   * The link destination.
   */
  href: string;

  /**
   * Whether or not this link is external. External links have a small symbol indicating the user will be leaving the current property.
   */
  external?: boolean;

  /**
   * Optional handler to fire when the link is clicked.
   */
  onClick?(event: React.MouseEvent<HTMLAnchorElement>): void;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  href,
  external,
  children,
  onClick,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={external ? "link link--external" : "link"}
  >
    {children}
  </a>
);

export default Link;
