import type { FC } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import pkgImage from "../MacInstaller/macPackageData";

const PKG_URL =
  "https://install.determinate.systems/determinate-pkg/stable/Universal";

/** A card that downloads the universal macOS package installer. */
const MacDownload: FC = () => (
  <a href={PKG_URL} download className="install-cta__download">
    <img
      className="install-cta__pkg"
      src={pkgImage}
      alt=""
      width={40}
      height={40}
    />
    <span className="install-cta__download-label">
      Download Determinate Nix
    </span>
    <ArrowDownTrayIcon className="install-cta__download-icon" aria-hidden />
  </a>
);

export default MacDownload;
