import { useCallback, type FC, type SyntheticEvent } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import "./index.scss";

export interface CopyButtonProps {
  data: string;
}

const CopyButton: FC<CopyButtonProps> = ({ data }) => {
  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      event.preventDefault();

      navigator.clipboard.writeText(data).catch((error) => {
        console.error("Couldn't write to clipboard", error);
      });
    },
    [data],
  );

  return (
    <button
      className="copy-button"
      onClick={handleClick}
      aria-label="Copy text"
    >
      <DocumentDuplicateIcon />
    </button>
  );
};

export default CopyButton;

