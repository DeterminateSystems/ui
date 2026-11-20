import { type FC } from "react";

import React from "react";

export interface HeaderProps extends Omit<
  React.ComponentPropsWithRef<"header">,
  "children" | "className"
> {
  logo?: React.ReactNode;
  elements?: React.ReactElement[];
}

const Header: FC<HeaderProps> = ({ logo, elements = [], ...props }) => {
  return (
    <header
      className="ui:box-border ui:h-14 ui:w-full ui:border-b ui:border-solid ui:border-gray-light ui:p-3 ui:light:border-gray-less-faint ui:light:bg-gray-faint"
      role="banner"
      {...props}
    >
      <div className="ui:container ui:mx-auto ui:flex ui:flex-row ui:items-center ui:justify-between ui:gap-3 ui:px-3">
        {!!logo && (
          <div className="ui:flex ui:h-full ui:flex-row ui:items-center ui:gap-2">
            {logo}
          </div>
        )}

        {elements.length > 0 && (
          <div className="ui:flex ui:flex-row ui:gap-3">
            {elements.map((node, idx) => (
              <div key={node.key ?? idx}>{node}</div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
