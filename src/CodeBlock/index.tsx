import type { FC } from "react";

import type { HighlightLanguage } from "../hooks/useHighlight";
import Highlight from "../Highlight";
import CopyButton from "../CopyButton";

import './index.scss';

export interface CodeBlockProps {
  language: HighlightLanguage;
  code: string;
  title: string;
  allowCopy?: boolean;
}

/**
 * A `<CodeBlock />` represents a highlighted chunk of code. It is the most generic representation of code
 */
const CodeBlock: FC<CodeBlockProps> = ({
  language,
  code,
  title,
  allowCopy = true,
}) => (
  <figure className="code-block" aria-label={title}>
    <figcaption className="code-block__heading">
      {title} {allowCopy && <CopyButton data={code} />}
    </figcaption>
    <Highlight language={language} code={code} />
  </figure>
);

export default CodeBlock;
