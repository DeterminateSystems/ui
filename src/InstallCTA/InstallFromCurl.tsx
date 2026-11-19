import type { FC } from "react";
import { CheckIcon, Square2StackIcon } from "@heroicons/react/24/outline";

import Highlight from "../Highlight";
import useCopy from "../hooks/useCopy";

const installScript =
  "curl -fsSL https://install.determinate.systems/nix | sh -s -- install";

/** The Determinate Nix Installer command, with a copy button. */
const InstallFromCurl: FC = () => {
  const [handleCopy, copied] = useCopy(installScript);
  const Icon = copied ? CheckIcon : Square2StackIcon;

  return (
    <div className="install-cta__command">
      <Highlight language="shell" code={installScript} />
      <button
        type="button"
        className={
          copied
            ? "install-cta__copy install-cta__copy--copied"
            : "install-cta__copy"
        }
        aria-label="Copy command"
        onClick={handleCopy}
      >
        <Icon className="install-cta__copy-icon" aria-hidden />
      </button>
      <span className="install-cta__sr-only" role="status">
        {copied ? "Copied" : ""}
      </span>
    </div>
  );
};

export default InstallFromCurl;
