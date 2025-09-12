import { type FC } from "react";

import "./index.scss";
import React from "react";

export interface HeaderProps {
  logo?: React.ReactNode;
  elements?: React.ReactElement[];
}

const Header: FC<HeaderProps> = ({ logo, elements = [] }) => {
  return (
    <div className="header">
      <div className="header__container">
        {!!logo && <div className="header__logo">{logo}</div>}

        {elements.length > 0 && (
          <div className="header__elements">
            {elements.map((node, idx) => (
              <div key={node.key ?? idx}>{node}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
