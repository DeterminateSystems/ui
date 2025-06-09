import { type FC } from "react";

import type { HighlightLanguage } from "../hooks/useHighlight";
import CopyButton from "../CopyButton";
import DownloadButton from "../DownloadButton";
import Highlight from "../Highlight";

export interface CodeFileProps {
  language: HighlightLanguage;
  code: string;

  /**
   * The filename to use for displaying.
   */
  filename: string;

  /**
   * If an alternative download filename is required (for example, a user might
   * download a dot-prefixed filename that is hidden by default on macOS and
   * Linux).
   *
   * Defaults to the value of `filename`
   */
  download?: string;

  /**
   * Whether or not to allow copying. Defaults to true.
   */
  allowCopy?: boolean;

  /**
   * Whether or not to allow downloading. Defaults to true.
   */
  allowDownload?: boolean;
}

const CodeFile: FC<CodeFileProps> = ({
  language,
  code,
  filename,
  download = filename,
  allowCopy,
  allowDownload,
}) => (
  <figure className="code-file" aria-label={filename}>
    <figcaption className="code-file__heading">
      <code>{filename}</code> {allowCopy && <CopyButton data={code} />}{" "}
      {allowDownload && <DownloadButton data={code} filename={download} />}
    </figcaption>
    <Highlight language={language} code={code} />
  </figure>
);

export default CodeFile;
