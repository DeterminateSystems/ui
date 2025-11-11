import type { FC } from "react";
import CodeBlock from "../CodeBlock";
import Link from "../Link";
import type { TabProps } from ".";

const code = `
nixosConfigurations.workstation = nixpkgs.lib.nixosSystem {
  modules = [
    # Load the Determinate module
    determinate.nixosModules.default
    ./configuration.nix
  ];
};
`;

const InstallForNixOS: FC = ({ version }: TabProps) => {
  return (
    <>
      <p>Add Determinate as an input to your flake:</p>
      <CodeBlock
        language={"nix"}
        title={"flake.nix"}
        code={`inputs.determinate.url = "https://flakehub.com/f/DeterminateSystems/determinate/${version || "*"}";`}
        kind={"file"}
        allowDownload={false}
      />
      <p>Then, include the Determinate NixOS module:</p>
      <CodeBlock
        language={"nix"}
        title={"flake.nix"}
        code={code}
        kind={"file"}
        allowDownload={false}
      />

      <p>
        For more details, see{" "}
        <Link
          href={
            "https://docs.determinate.systems/guides/advanced-installation/#nixos"
          }
        >
          Install on NixOS
        </Link>
        .
      </p>
    </>
  );
};

export default InstallForNixOS;
