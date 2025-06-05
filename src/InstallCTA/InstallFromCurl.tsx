import { type FC } from "react";

import CodeBlock from "../CodeBlock";

const installScript =
  "curl -fsSL https://install.determinate.systems/nix | sh -s -- install --determinate";

const InstallFromCurl: FC = () => (
  <>
    <p>Use the Determinate Nix Installer CLI</p>
    <CodeBlock
      language="shell"
      code={installScript}
      title="Install Determinate"
    />
  </>
);

export default InstallFromCurl;
