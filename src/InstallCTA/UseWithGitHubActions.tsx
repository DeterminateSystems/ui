import type { FC } from "react";
import Link from "../Link";
import CodeFile from "../CodeFile";

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
      <CodeFile
        language={"yaml"}
        code={code}
        filename={"ci.yaml"}
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
