import { type FC } from "react";

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
      className="inline cursor-pointer appearance-none rounded-lg bg-ds-gray-600 px-2 py-1 text-[80%] light:bg-ds-gray-300"
      onClick={handleCopy}
      aria-label={`Copy ${code}`}
    >
      <code className="inline font-mono break-all text-ds-white light:text-ds-ink">
        {code}
      </code>
      <ClipboardIcon
        className="-mt-0.5 inline size-[1.75em] pl-1 align-middle"
        copied={copied}
      />
      {/* A reader hears the outcome without the button's name changing. */}
      <span role="status" className="sr-only">
        {copied ? "Copied to the clipboard." : ""}
      </span>
    </button>
  );
};

export default CodeInline;
