import type { FC } from "react";

import type { HighlightLanguage } from "../hooks/useHighlight";
import Highlight from "../Highlight";
import CopyButton from "../CopyButton";

import "./index.scss";
import DownloadButton from "../DownloadButton";
import clsx from "clsx";

export interface CodeBlockProps {
  language: HighlightLanguage;
  code: string;
  title: string;
  downloadAs?: string;
  allowCopy?: boolean;
  allowDownload?: boolean;
  kind: "snippet" | "file";
}

/**
 * A `<CodeBlock />` represents a highlighted chunk of code. It is the most generic representation of code
 */
const CodeBlock: FC<CodeBlockProps> = ({
  language,
  code,
  title,
  downloadAs = title,
  allowDownload = true,
  allowCopy = true,
  kind = "snippet",
}) => {
  const trimmedCode = code.trim();
  const isFile = kind === "file";

  return (
    <figure className="code-block" aria-label={title}>
      <figcaption className="code-block__heading">
        <span
          className={clsx(
            "code-block__title",
            isFile && "code-block__title--file",
          )}
        >
          {title}
        </span>
        {(allowCopy || allowDownload) && (
          <span className="code-block__icons">
            {allowCopy && <CopyButton data={trimmedCode} />}
            {allowDownload && isFile && (
              <DownloadButton
                data={trimmedCode}
                filename={downloadAs.split("/").reverse()[0]}
              />
            )}
          </span>
        )}
      </figcaption>
      <Highlight language={language} code={trimmedCode} />
    </figure>
  );
};

export default CodeBlock;
