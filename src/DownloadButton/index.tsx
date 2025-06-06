import { type FC } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

import useObjectURL from "../hooks/useObjectURL";

import "./index.scss";

export interface DownloadButtonProps {
  /**
   * Raw filename. Should not include slashes.
   */
  filename: string;

  /**
   * Content to download.
   */
  data: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({ filename, data }) => {
  const url = useObjectURL(data);

  return (
    <a
      className="download-button"
      href={url}
      download={filename}
      aria-label="Download code"
    >
      <ArrowDownTrayIcon />
    </a>
  );
};

export default DownloadButton;
