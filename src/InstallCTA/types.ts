/**
 * Possible OSes on which Determinate Nix can be installed.
 */
export enum InstallTarget {
  MacOS = "macOS",
  WSL = "Windows Subsystem for Linux (WSL)",
  Linux = "Linux",
  NixOS = "NixOS",
}

/**
 * Auto-detect the appropriate install target for a given broser user agent.
 *
 * @param userAgent The user agent. Defaults to the browser's `navigator.userAgent`.
 */
export function detectInstallTarget(userAgent = navigator.userAgent): InstallTarget {
  if (userAgent.includes("Windows")) {
    return InstallTarget.WSL;
  }

  if (userAgent.includes("Linux")) {
    return InstallTarget.Linux;
  }

  return InstallTarget.MacOS;
}
