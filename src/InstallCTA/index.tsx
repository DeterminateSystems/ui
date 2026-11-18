import { useEffect, useState, type FC } from "react";
import type { IconType } from "react-icons";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa6";
import { SiNixos } from "react-icons/si";

import MacInstaller from "../MacInstaller";

import InstallFromCurl from "./InstallFromCurl";
import NavTab from "./NavTab";
import TabSelector from "./TabSelector";
import { InstallTarget, detectInstallTarget } from "./types";

import "./index.scss";

export { InstallTarget as CTAType } from "./types";

const DEFAULT_NIXOS_HREF =
  "https://docs.determinate.systems/guides/advanced-installation#nixos";

/** The targets that switch the panel, and what each one shows. */
const panels: {
  target: InstallTarget;
  icon: IconType;
  lead: string;
  action: "pkg" | "cli";
}[] = [
  {
    target: InstallTarget.MacOS,
    icon: FaApple,
    lead: "Use our package installer",
    action: "pkg",
  },
  {
    target: InstallTarget.WSL,
    icon: FaWindows,
    lead: "Use the Determinate Nix Installer CLI",
    action: "cli",
  },
  {
    target: InstallTarget.Linux,
    icon: FaLinux,
    lead: "Use the Determinate Nix Installer CLI",
    action: "cli",
  },
];

export interface InstallCTAProps {
  /**
   * The tab to open first. When omitted, the tab for the visitor's OS opens
   * once the component has mounted, and macOS is shown until then.
   */
  initialTab?: InstallTarget;
  /**
   * Where the NixOS tab leads. NixOS already has Nix, so that tab is a link to
   * installation instructions rather than a panel. An absolute `http(s)` URL
   * opens in a new tab.
   */
  nixosHref?: string;
}

/**
 * A call-to-action component for installing Determinate Nix, with a tab for
 * each supported OS.
 */
const InstallCTA: FC<InstallCTAProps> = ({
  initialTab,
  nixosHref = DEFAULT_NIXOS_HREF,
}) => {
  // Detection waits for the browser, so that a server-rendered page and the
  // first client render agree.
  const [activeTab, setActiveTab] = useState<InstallTarget>(
    initialTab ?? InstallTarget.MacOS,
  );

  useEffect(() => {
    if (!initialTab) {
      setActiveTab(detectInstallTarget());
    }
  }, [initialTab]);

  const panel = panels.find(({ target }) => target === activeTab) ?? panels[0];

  return (
    <div className="install-cta">
      <div className="install-cta__body">
        <div className="install-cta__header">
          <p className="install-cta__title">
            Get Determinate for {panel.target}
          </p>
          <p className="install-cta__lead">{panel.lead}</p>
        </div>
        {panel.action === "pkg" ? <MacInstaller /> : <InstallFromCurl />}
      </div>
      <nav className="install-cta__tabs" aria-label="Operating system">
        <ul className="install-cta__links">
          {panels.map(({ target, icon }) => (
            <TabSelector
              key={target}
              name={target}
              icon={icon}
              active={target === panel.target}
              onClick={() => setActiveTab(target)}
            />
          ))}
          <NavTab name={InstallTarget.NixOS} icon={SiNixos} href={nixosHref} />
        </ul>
      </nav>
    </div>
  );
};

export default InstallCTA;
