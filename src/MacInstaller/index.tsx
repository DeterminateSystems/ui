import { type FC } from "react";

import url from "./macPackageData";

import "./index.scss";

export interface MacInstallerProps {
  version?: string;
}

/**
 * A call to action for downloading the Determinate Nix universal Mac installer.
 */
const MacInstaller: FC<MacInstallerProps> = ({
  version,
}: MacInstallerProps) => {
  const urlPath = version ? `tag/v${version}` : `stable`;
  return (
    <a
      href={`https://install.determinate.systems/determinate-pkg/${urlPath}/Universal`}
      className="mac-installer"
    >
      <img
        className="mac-installer__pkg"
        src={url}
        alt="Package icon representing the graphical installer"
      />
      Download Determinate Nix{version && ` v${version}`}
    </a>
  );
};

export default MacInstaller;
