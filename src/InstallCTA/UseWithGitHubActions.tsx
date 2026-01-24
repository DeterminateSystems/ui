import type { FC } from "react";
import Link from "../Link";
import CodeBlock from "../CodeBlock";
import type { TabProps } from ".";

const UseWithGitHubActions: FC = ({ version }: TabProps) => {
  const code = `
on:
  push:
jobs:
  tests:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v5
      - uses: DeterminateSystems/determinate-nix-action@v${version || "3"}
      - run: nix build .#

`;
  return (
    <>
      <p>Use Determinate Nix in GitHub Actions.</p>
      <CodeBlock language={"yaml"} code={code} title={"ci.yaml"} kind="file" />
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
