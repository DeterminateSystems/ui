import { useState, type FC } from "react";
import { FaApple, FaLinux, FaAws, FaGithub } from "react-icons/fa6";
import { SiNixos } from "react-icons/si";

import TabSelector from "./TabSelector";
import { InstallTarget, detectInstallTarget } from "./types";
import InstallFromCurl from "./InstallFromCurl";

import FindAwsAMIs from "./FindAwsAMIs";
import UseWithGitHubActions from "./UseWithGitHubActions";
import InstallForNixOS from "./InstallForNixOS";

import MacInstaller from "../MacInstaller";

import "./index.scss";

export { InstallTarget as CTAType } from "./types";

export interface InstallCTAProps {
  /**
   * If, for some reason, you want to bypass the detected OS, pass this prop.
   * This is only applicable for the initial render.
   */
  initialTab?: InstallTarget;
}

const ctaTabs: [InstallTarget, React.FC][] = [
  [InstallTarget.MacOS, FaApple],
  [InstallTarget.Linux, FaLinux],
  [InstallTarget.NixOS, SiNixos],
  [InstallTarget.AWS, () => <FaAws className="install-cta__icon--apple" />],
  [InstallTarget.GitHub, FaGithub],
];

const ctaComponents: Record<InstallTarget, React.FC> = {
  [InstallTarget.MacOS]: MacInstaller,
  [InstallTarget.Linux]: InstallFromCurl,
  [InstallTarget.AWS]: FindAwsAMIs,
  [InstallTarget.GitHub]: UseWithGitHubActions,
  [InstallTarget.NixOS]: InstallForNixOS,
};

/**
 * A call-to-action component for downloading Determinate Nix.
 *
 * Due to the numerous options available,
 */
const InstallCTA: FC<InstallCTAProps> = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState<InstallTarget>(() => {
    if (initialTab) {
      return initialTab;
    }

    return detectInstallTarget();
  });

  const TabBody = ctaComponents[activeTab];

  return (
    <div className="install-cta">
      <header className="install-cta__header">
        Get Determinate for {activeTab}
      </header>
      <div className="install-cta__body">
        <TabBody />
      </div>
      <ul className="install-cta__links">
        {ctaTabs.map(([target, icon]) => (
          <TabSelector
            name={target}
            icon={icon}
            active={activeTab == target}
            onClick={() => setActiveTab(target)}
          />
        ))}
      </ul>
    </div>
  );
};

export default InstallCTA;
