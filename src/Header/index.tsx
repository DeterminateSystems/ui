import { type FC } from "react";

import React from "react";
import clsx from "clsx";
import { container } from "../styles/classes";

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
      className="box-border h-14 w-full border-b border-solid border-ds-gray-600 p-3 light:border-ds-gray-200 light:bg-ds-gray-50"
      role="banner"
      {...props}
    >
      <div
        className={clsx(
          container,
          "flex flex-row items-center justify-between gap-3",
        )}
      >
        {!!logo && (
          <div className="flex h-full flex-row items-center gap-2">{logo}</div>
        )}

        {elements.length > 0 && (
          <div className="flex flex-row gap-3">
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
