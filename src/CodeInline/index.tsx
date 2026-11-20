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
      className="ui:inline ui:cursor-pointer ui:appearance-none ui:rounded-base ui:bg-gray-light ui:px-2 ui:py-1 ui:text-[80%] ui:light:bg-gray-very-light"
      onClick={handleCopy}
      aria-label={`Copy ${code}`}
    >
      <code className="ui:inline ui:font-mono ui:break-all ui:text-white ui:light:text-black">
        {code}
      </code>
      <ClipboardIcon
        className="ui:-mt-0.5 ui:inline ui:size-[1.75em] ui:pl-1 ui:align-middle"
        copied={copied}
      />
      {/* A reader hears the outcome without the button's name changing. */}
      <span role="status" className="ui:sr-only">
        {copied ? "Copied to the clipboard." : ""}
      </span>
    </button>
  );
};

export default CodeInline;
