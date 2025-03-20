let
  pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    packages = [
      pkgs.just
      pkgs.xxd
      pkgs.jdk23
    ];
  }
