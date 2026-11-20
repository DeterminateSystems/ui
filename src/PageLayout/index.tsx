import { type FC } from "react";

import React from "react";
import clsx from "clsx";

export interface PageLayoutProps {
  width?: "full";
  header?: React.ReactElement;
  footer?: React.ReactElement;
  panes?: React.ReactElement[];
  content: React.ReactElement;
}

// Wide enough to make the flex wrap nicely at all widths: the page's minimum
// width, less the inline padding of the main element.
const column =
  "ui:flex ui:min-w-[calc(var(--ui-container-page-min)-(--spacing(3)*2))] ui:flex-col ui:gap-3";

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
        "ui:flex ui:min-h-screen ui:min-w-page-min ui:flex-col ui:gap-3",
        width === "full" && "ui:w-full",
      )}
    >
      {header}
      <main className="ui:container ui:mx-auto ui:flex ui:flex-row ui:flex-wrap ui:gap-3 ui:px-3">
        <div className={clsx(column, "ui:flex-2")}>{content}</div>
        {panes.length > 0 && (
          <div className={clsx(column, "ui:flex-1")}>
            {panes.map((pane, idx) => (
              <div key={pane.key ?? idx}>{pane}</div>
            ))}
          </div>
        )}
      </main>
      {!!footer && (
        <footer className="ui:mt-auto ui:w-full ui:place-self-end">
          {footer}
        </footer>
      )}
    </div>
  );
};

export default PageLayout;
