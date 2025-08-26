import type { FC } from "react";
import CodeFile from "../CodeFile";
import CodeBlock from "../CodeBlock";
import Link from "../Link";

const code = `
nixosConfigurations.workstation = nixpkgs.lib.nixosSystem {
  modules = [
    # Load the Determinate module
    determinate.nixosModules.default
    ./configuration.nix
  ];
};
`;

const InstallForNixOS: FC = () => {
  return (
    <>
      <p></p>
      <CodeBlock
        language={"nix"}
        title={"Add Determinate as an input to your flake:"}
        code={`inputs.determinate.url = "https://flakehub.com/f/DeterminateSystems/determinate/*";`}
      />
      <CodeBlock
        language={"nix"}
        title={"Then include the Determinate NixOS module:"}
        code={code}
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
