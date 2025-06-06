import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type SyntheticEvent,
} from "react";
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

import "./index.scss";

export interface CopyButtonProps {
  /**
   * Text data to write to the user's clipboard.
   */
  data: string;
}

const delay = 1_000;

/**
 * A button to copy string data to the user's clipboard. This is most typically used for snippets of code.
 *
 * A small amount of visual feedback is given when the data is copied successfully.
 */
const CopyButton: FC<CopyButtonProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef<number | null>(null);

  const Icon = copied ? ClipboardDocumentCheckIcon : ClipboardDocumentIcon;

  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      event.preventDefault();

      navigator.clipboard
        .writeText(data)
        .then(() => {
          setCopied(true);

          const id = setTimeout(() => {
            setCopied(false);
            ref.current = null;
          }, delay);

          ref.current = id;
        })
        .catch((error) => {
          console.error("Couldn't write to clipboard", error);
        });
    },
    [data],
  );

  useEffect(() => {
    const id = ref.current;
    if (id !== null) {
      clearTimeout(id);
    }
  }, [ref]);

  return (
    <button
      className="copy-button"
      onClick={handleClick}
      aria-label="Copy text"
    >
      <Icon />
    </button>
  );
};

export default CopyButton;
