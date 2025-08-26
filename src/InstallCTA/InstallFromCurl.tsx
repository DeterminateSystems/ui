import { type FC } from "react";

import CodeBlock from "../CodeBlock";
import type { TabProps } from ".";

const installScript = (version: string | undefined) => {
  if (typeof version === "undefined") {
    return "curl -fsSL https://install.determinate.systems/nix | sh -s -- install --determinate";
  } else {
    return `curl -fsSL https://install.determinate.systems/nix/tag/v${version} | sh -s -- install --determinate`;
  }
};

const InstallFromCurl: FC = ({ version }: TabProps) => (
  <>
    <p>
      Use the Determinate Nix Installer CLI for Linux, including Windows
      Subsystem for Linux (WSL).
    </p>
    <CodeBlock
      kind="snippet"
      language="shell"
      code={installScript(version)}
      title="Install Determinate"
    />
  </>
);

export default InstallFromCurl;
