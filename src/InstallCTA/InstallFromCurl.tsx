import { type FC } from "react";

import CodeBlock from "../CodeBlock";

const installScript =
  "curl -fsSL https://install.determinate.systems/nix | sh -s -- install";

const InstallFromCurl: FC = () => (
  <CodeBlock
    language="shell"
    code={installScript}
    title="Install Determinate"
  />
);

export default InstallFromCurl;
