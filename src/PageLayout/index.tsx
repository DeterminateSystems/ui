import { type FC } from "react";

import "./index.scss";
import React from "react";

export interface PageLayoutProps {
  width?: "full";
  header?: React.ReactElement;
  footer?: React.ReactElement;
  panes?: React.ReactElement[];
  content: React.ReactElement;
}

const PageLayout: FC<PageLayoutProps> = ({
  width = "full",
  header,
  footer,
  panes = [],
  content,
}) => {
  return (
    <div className={`page-layout page-layout--${width}`}>
      {!!header && <header>{header}</header>}
      <main>
        <div className="page-layout__content">{content}</div>
        {panes.length > 0 && <div className="page-layout__panes">{panes}</div>}
      </main>
      {!!footer && <footer>{footer}</footer>}
    </div>
  );
};

export default PageLayout;
