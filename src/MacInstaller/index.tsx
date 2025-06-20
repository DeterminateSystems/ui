import { type FC } from "react";

import url from "./macPackageData";

import "./index.scss";

/**
 * A call to action for downloading the Determinate Nix universal Mac installer.
 */
const MacInstaller: FC = () => (
  <a
    href="https://install.determinate.systems/determinate-pkg/stable/Universal"
    className="mac-installer"
  >
    <img
      className="mac-installer__pkg"
      src={url}
      alt="Package icon representing the graphical installer"
    />
    Download Determinate Nix
  </a>
);

export default MacInstaller;
