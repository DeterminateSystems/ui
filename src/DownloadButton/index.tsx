import { type FC } from "react";

import useObjectURL from "../hooks/useObjectURL";

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
    <a className="download-button" href={url} download={filename}>
      download
    </a>
  );
};

export default DownloadButton;
