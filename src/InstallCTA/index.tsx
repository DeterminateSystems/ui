import { useState, type FC } from "react";
import { SiGithub, SiLinux, SiApple, SiNixos, SiAmazon } from "react-icons/si";

import TabSelector from "./TabSelector";
import { InstallTarget, detectInstallTarget } from "./types";
import InstallFromCurl from "./InstallFromCurl";

import FindAwsAMIs from "./FindAwsAMIs";
import UseWithGitHubActions from "./UseWithGitHubActions";
import InstallForNixOS from "./InstallForNixOS";

import MacInstaller from "../MacInstaller";

import "./index.scss";
import type { IconBaseProps } from "react-icons";

export { InstallTarget as CTAType } from "./types";

export interface InstallCTAProps {
  /**
   * If, for some reason, you want to bypass the detected OS, pass this prop.
   * This is only applicable for the initial render.
   */
  initialTab?: InstallTarget;

  /**
   * Version of Determinate to pin to, when possible
   */
  version?: string;
}

export interface TabProps {
  /**
   * Version of Determinate to pin to, when possible
   */
  version?: string;
}

const ctaTabs: [InstallTarget, React.FC<IconBaseProps>][] = [
  [InstallTarget.MacOS, SiApple],
  [InstallTarget.Linux, SiLinux],
  [InstallTarget.NixOS, SiNixos],
  [InstallTarget.AWS, SiAmazon],
  [InstallTarget.GitHub, SiGithub],
];

const ctaComponents: Record<InstallTarget, React.FC<TabProps>> = {
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
const InstallCTA: FC<InstallCTAProps> = ({ initialTab, version }) => {
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
        Get Determinate{version && ` v${version}`}
      </header>
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
      <div className="install-cta__body">
        <TabBody version={version} />
      </div>
    </div>
  );
};

export default InstallCTA;
