import { type FC } from "react";

import "./index.scss";
import useCopy from "../hooks/useCopy";
import ClipboardIcon from "../ClipboardIcon";

export interface CodeInlineProps {
  code: string;
}

const CodeInline: FC<CodeInlineProps> = ({ code }) => {
  const [handleCopy, copied] = useCopy(code);

  return (
    <button
      type="button"
      className="code-inline"
      onClick={handleCopy}
      aria-label="Copy text"
    >
      <code className="code-inline__code">{code}</code>
      <ClipboardIcon className="code-inline__copy" copied={copied} />
    </button>
  );
};

export default CodeInline;
