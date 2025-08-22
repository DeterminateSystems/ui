/**
 * Possible OSes on which Determinate Nix can be installed.
 */
export enum InstallTarget {
  MacOS = "macOS",
  Linux = "Linux",
  NixOS = "NixOS",
  AWS = "AWS",
  GitHub = "GitHub",
}

/**
 * Auto-detect the appropriate install target for a given browser user agent.
 *
 * @param userAgent The user agent. Defaults to the browser's `navigator.userAgent`.
 */
export function detectInstallTarget(
  userAgent = navigator.userAgent,
): InstallTarget {
  if (userAgent.includes("Windows")) {
    return InstallTarget.Linux;
  }

  if (userAgent.includes("Linux")) {
    return InstallTarget.Linux;
  }

  return InstallTarget.MacOS;
}
