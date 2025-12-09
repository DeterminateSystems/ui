import { type FC } from "react";
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

import "./index.scss";
import useCopy from "../hooks/useCopy";

export interface CopyButtonProps {
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
const CopyButton: FC<CopyButtonProps> = ({ data }) => {
  const [handleCopy, copied] = useCopy(data);

  const Icon = copied ? ClipboardDocumentCheckIcon : ClipboardDocumentIcon;

  return (
    <button
      className="copy-button"
      onClick={(event) => {
        event.preventDefault();
        handleCopy();
      }}
      aria-label="Copy text"
    >
      <Icon />
    </button>
  );
};

export default CopyButton;
