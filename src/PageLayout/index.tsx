import { type FC } from "react";

import React from "react";
import clsx from "clsx";
import { container } from "../styles/classes";

export interface PageLayoutProps {
  width?: "full";
  header?: React.ReactElement;
  footer?: React.ReactElement;
  panes?: React.ReactElement[];
  content: React.ReactElement;
}

// Wide enough to make the flex wrap nicely at all widths: the page's minimum
// width, less the inline padding of the main element.
const column = "flex min-w-[calc(360px-(--spacing(3)*2))] flex-col gap-3";

const PageLayout: FC<PageLayoutProps> = ({
  width = "full",
  header,
  footer,
  panes = [],
  content,
}) => {
  return (
    <div
      className={clsx(
        "flex min-h-screen min-w-[360px] flex-col gap-3",
        width === "full" && "w-full",
      )}
    >
      {header}
      <main className={clsx(container, "flex flex-row flex-wrap gap-3")}>
        <div className={clsx(column, "flex-2")}>{content}</div>
        {panes.length > 0 && (
          <div className={clsx(column, "flex-1")}>
            {panes.map((pane, idx) => (
              <div key={pane.key ?? idx}>{pane}</div>
            ))}
          </div>
        )}
      </main>
      {!!footer && (
        <footer className="mt-auto w-full place-self-end">{footer}</footer>
      )}
    </div>
  );
};

export default PageLayout;
