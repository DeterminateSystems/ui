import { type FC } from "react";

import "./index.scss";
import React from "react";

export interface HeaderProps {
  logo?: React.ReactNode;
  elements?: React.ReactNode[];
}

const Header: FC<HeaderProps> = ({ logo, elements = [] }) => {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        {!!logo && <div className="header__logo">{logo}</div>}

        {elements.length > 0 && (
          <div className="header__elements">
            {elements.map((node, idx) => (
              <div key={idx}>{node}</div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
