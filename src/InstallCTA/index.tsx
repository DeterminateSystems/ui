import {
  useEffect,
  useId,
  useRef,
  useState,
  type FC,
  type KeyboardEvent,
} from "react";
import type { IconType } from "react-icons";
import { FaWindows } from "react-icons/fa6";
import { SiApple, SiLinux, SiNixos } from "react-icons/si";

import InstallFromCurl from "./InstallFromCurl";
import MacDownload from "./MacDownload";
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
    icon: SiApple,
    lead: "Use our package installer",
    action: "pkg",
  },
  {
    target: InstallTarget.Linux,
    icon: SiLinux,
    lead: "Use our Determinate Nix Installer CLI",
    action: "cli",
  },
  {
    target: InstallTarget.WSL,
    icon: FaWindows,
    lead: "Use our Determinate Nix Installer CLI",
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

  const id = useId();
  const panelId = `${id}-panel`;
  const tabId = (index: number) => `${id}-tab-${index}`;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = Math.max(
    panels.findIndex(({ target }) => target === activeTab),
    0,
  );
  const panel = panels[activeIndex];

  // Arrow keys, Home and End move focus between tabs and select the tab they
  // land on, per the WAI-ARIA tabs pattern.
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = panels.length - 1;
    let next: number;

    switch (event.key) {
      case "ArrowRight":
        next = activeIndex === last ? 0 : activeIndex + 1;
        break;
      case "ArrowLeft":
        next = activeIndex === 0 ? last : activeIndex - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveTab(panels[next].target);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="install-cta">
      <div
        className="install-cta__panel"
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId(activeIndex)}
      >
        <div className="install-cta__header">
          <p className="install-cta__title">
            Get Determinate for {panel.target}
          </p>
          <p className="install-cta__lead">{panel.lead}</p>
        </div>
        {panel.action === "pkg" ? <MacDownload /> : <InstallFromCurl />}
      </div>
      <div className="install-cta__tabs">
        <div
          className="install-cta__tablist"
          role="tablist"
          aria-label="Choose your platform"
          onKeyDown={handleKeyDown}
        >
          {panels.map(({ target, icon }, index) => (
            <TabSelector
              key={target}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={tabId(index)}
              panelId={panelId}
              name={target}
              icon={icon}
              active={index === activeIndex}
              onClick={() => setActiveTab(target)}
            />
          ))}
        </div>
        <NavTab name={InstallTarget.NixOS} icon={SiNixos} href={nixosHref} />
      </div>
    </div>
  );
};

export default InstallCTA;
