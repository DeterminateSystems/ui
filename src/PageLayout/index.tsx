import { type FC } from "react";

import "./index.scss";
import React from "react";
import clsx from "clsx";

export interface PageLayoutProps {
  width: "full";
}

const Root: FC<React.PropsWithChildren<PageLayoutProps>> = ({
  width,
  children,
}) => {
  let header;
  let footer;
  let content: React.ReactElement[] = [];
  let panes: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === PageLayout.Header) {
      header = child;
    } else if (child.type === PageLayout.Footer) {
      footer = child;
    } else if (child.type === PageLayout.Content) {
      content.push(child);
    } else if (child.type === PageLayout.Pane) {
      panes.push(child);
    } else {
      console.log("Dropping unknown children of PageLayout.");
    }
  });

  return (
    <div className={clsx("page-layout", `page-layout--${width}`)}>
      {!!header && <header>{header}</header>}
      <main>
        {content.length > 0 && (
          <div className="page-layout__content">{content}</div>
        )}
        {panes.length > 0 && <div className="page-layout__panes">{panes}</div>}
      </main>
      {!!footer && <footer>{footer}</footer>}
    </div>
  );
};

export interface PageLayoutHeaderProps {}
const Header: FC<React.PropsWithChildren<PageLayoutHeaderProps>> = ({
  children,
}) => {
  return children;
};

export interface PageLayoutFooterProps {}
const Footer: FC<React.PropsWithChildren<PageLayoutFooterProps>> = ({
  children,
}) => {
  return children;
};

export interface PageLayoutContentProps {}
const Content: FC<React.PropsWithChildren<PageLayoutContentProps>> = ({
  children,
}) => {
  return children;
};

export interface PageLayoutPaneProps {}
const Pane: FC<React.PropsWithChildren<PageLayoutPaneProps>> = ({
  children,
}) => {
  return children;
};

const PageLayout = Object.assign(Root, {
  Header,
  Content,
  Pane,
  Footer,
});

export default PageLayout;
