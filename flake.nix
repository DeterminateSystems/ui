{
  inputs = {
    nixpkgs.url = "https://flakehub.com/f/DeterminateSystems/nixpkgs-weekly/*";
  };

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];

      forEachSystem =
        f:
        nixpkgs.lib.genAttrs systems (
          system:
          let
            pkgs = nixpkgs.legacyPackages.${system};
          in
          f pkgs
        );
    in
    {
      devShells = forEachSystem (pkgs: {
        default = pkgs.mkShellNoCC {
          name = "determinate-ui";

          buildInputs = [
            pkgs.codespell
            pkgs.nodejs_latest
          ];
        };

        publish = pkgs.mkShellNoCC {
          name = "publish";

          buildInputs = [
            pkgs.nodejs_latest
          ];
        };
      });
    };
}
