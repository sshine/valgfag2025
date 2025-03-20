{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  packages = [
    pkgs.just
    pkgs.nodejs
    pkgs.nodePackages.npm
  ];
}
