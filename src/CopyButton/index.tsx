import { type FC } from "react";

import useCopy from "../hooks/useCopy";
import ClipboardIcon from "../ClipboardIcon";
import { svgButton } from "../styles/classes";

export interface CopyButtonProps extends Omit<
  React.ComponentPropsWithRef<"button">,
  "children" | "className" | "type" | "onClick"
> {
  /**
   * Text data to write to the user's clipboard.
   */
  data: string;
}

/**
 * A button to copy string data to the user's clipboard. This is most typically used for snippets of code.
 *
 * A small amount of visual feedback is given when the data is copied successfully.
 */
const CopyButton: FC<CopyButtonProps> = ({ data, ...props }) => {
  const [handleCopy, copied] = useCopy(data);

  return (
    <button
      type="button"
      className={svgButton}
      onClick={handleCopy}
      aria-label="Copy text"
      {...props}
    >
      <ClipboardIcon copied={copied} />
      {/* A reader hears the outcome without the button's name changing. */}
      <span role="status" className="ui:sr-only">
        {copied ? "Copied to the clipboard." : ""}
      </span>
    </button>
  );
};

export default CopyButton;
