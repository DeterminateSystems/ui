import type { FC } from "react";
import Link from "../Link";
import CodeBlock from "../CodeBlock";

const code = `
on:
  push:
jobs:
  tests:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v5
      - uses: DeterminateSystems/determinate-nix-action@v3
      - run: nix build .#

`;

const UseWithGitHubActions: FC = () => {
  return (
    <>
      <p>Use Determinate Nix in GitHub Actions.</p>
      <CodeBlock
        kind="file"
        language={"yaml"}
        code={code}
        title={"ci.yaml"}
        allowCopy={true}
        allowDownload={true}
      />
      <p>
        See our other{" "}
        <Link href={"https://docs.determinate.systems/guides/github-actions"}>
          GitHub Actions
        </Link>
        .
      </p>
    </>
  );
};

export default UseWithGitHubActions;
