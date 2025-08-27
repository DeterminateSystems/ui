import { type FC } from "react";

import "./index.scss";
import React from "react";

export interface HeaderProps {}

const Root: FC<React.PropsWithChildren<HeaderProps>> = ({ children }) => {
  let logo: React.ReactElement | undefined = undefined;
  let elements: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === Header.Logo) {
      logo = child;
    } else if (child.type === Header.Element) {
      elements.push(child);
    } else {
      console.log("Dropping unknown children of Header.");
    }
  });

  return (
    <div className={"header"}>
      {!!logo && <div className="header__logo">{logo}</div>}

      {elements.length > 0 && <div className="header__element">{elements}</div>}
    </div>
  );
};

export interface HeaderLogoProps {}
const Logo: FC<React.PropsWithChildren<HeaderLogoProps>> = ({ children }) => {
  return children;
};

export interface HeaderElementProps {}
const Element: FC<React.PropsWithChildren<HeaderElementProps>> = ({
  children,
}) => {
  return children;
};

const Header = Object.assign(Root, {
  Logo,
  Element,
});

export default Header;
