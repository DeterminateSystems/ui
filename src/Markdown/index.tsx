import React, { useMemo, type PropsWithChildren } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import "./index.scss";

export interface ProseProps {}

export const Prose: React.FC<PropsWithChildren<ProseProps>> = ({
  children,
}) => {
  return <div className="dsui-prose">{children}</div>;
};

export interface MarkdownProps {
  source: string;
}

function convertMarkdownToHtml(text: string) {
  const trimmed = text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "");
  const parsed = marked.parse(trimmed, { async: false });
  return DOMPurify.sanitize(parsed);
}

const Markdown: React.FC<MarkdownProps> = ({ source }) => {
  const html = useMemo(() => convertMarkdownToHtml(source), [source]);
  return (
    <Prose>
      <div
        className="dsui-markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Prose>
  );
};

export default Markdown;
