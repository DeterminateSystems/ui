import { useCallback, type FC, type SyntheticEvent } from "react";

import "./index.scss";
import useCopy from "../hooks/useCopy";
import ClipboardIcon from "../ClipboardIcon";

export interface CodeInlineProps {
  code: string;
}

const CodeInline: FC<CodeInlineProps> = ({ code }) => {
  const [handleCopy, copied] = useCopy(code);

  const handleClick = useCallback(
    (event: SyntheticEvent<Element>) => {
      event.preventDefault();
      handleCopy();
    },
    [handleCopy],
  );

  return (
    <button
      type="button"
      className="code-inline"
      onClick={handleClick}
      aria-label="Copy text"
    >
      <code className="code-inline__code">{code}</code>
      <ClipboardIcon className="code-inline__copy" copied={copied} />
    </button>
  );
};

export default CodeInline;
