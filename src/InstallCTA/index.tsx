import { useState, type FC } from "react";

import TabSelector from "./TabSelector";
import { InstallTarget, detectInstallTarget } from "./types";
import InstallFromCurl from "./InstallFromCurl";

import MacInstaller from "../MacInstaller";

import "./index.scss";
import NavTab from "./NavTab";

export { InstallTarget as CTAType } from "./types";

export interface InstallCTAProps {
  /**
   * If, for some reason, you want to bypass the detected OS, pass this prop.
   * This is only applicable for the initial render.
   */
  initialTab?: InstallTarget;
}

const InstallCTA: FC<InstallCTAProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState<InstallTarget>(() => {
    if (initialTab) {
      return initialTab;
    }

    return detectInstallTarget();
  });

  const wantsCurlInstall =
    activeTab === InstallTarget.WSL || activeTab === InstallTarget.Linux;

  return (
    <div className="install-cta">
      <p>
        <strong>Get Determinate for {activeTab}</strong>
      </p>
      <div>
        {activeTab === InstallTarget.MacOS && <MacInstaller />}
        {wantsCurlInstall && <InstallFromCurl />}
      </div>
      <ul className="install-cta__links">
        <TabSelector
          name={InstallTarget.MacOS}
          icon={() => null}
          active={activeTab === InstallTarget.MacOS}
          onClick={() => setActiveTab(InstallTarget.MacOS)}
        />
        <TabSelector
          name={InstallTarget.WSL}
          icon={() => null}
          active={activeTab === InstallTarget.WSL}
          onClick={() => setActiveTab(InstallTarget.WSL)}
        />
        <TabSelector
          name={InstallTarget.Linux}
          icon={() => null}
          active={activeTab === InstallTarget.Linux}
          onClick={() => setActiveTab(InstallTarget.Linux)}
        />
        <NavTab
          name={InstallTarget.NixOS}
          icon={() => null}
          href="https://docs.determinate.systems/guides/advanced-installation/#nixos"
          external={true}
        />
      </ul>
    </div>
  );
};

export default InstallCTA;
