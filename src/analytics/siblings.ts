/**
 * The sibling-host rule: which hostnames are Determinate Systems web
 * properties. They share one PostHog project, so a link from one sibling to
 * another keeps its referrer and carries the visitor's PostHog id (see
 * `./phid.ts`); a link anywhere else gets neither.
 */

/**
 * Subdomains of determinate.systems hosted by third parties (the status page
 * and the trust center). Their analytics are not ours.
 */
export const THIRD_PARTY_HOSTS: ReadonlySet<string> = new Set([
  "status.determinate.systems",
  "trust.determinate.systems",
]);

/** Whether a hostname is one of the Determinate Systems web properties. */
export function isSiblingHost(hostname: string): boolean {
  if (THIRD_PARTY_HOSTS.has(hostname)) return false;
  return (
    hostname === "flakehub.com" ||
    hostname === "zero-to-nix.com" ||
    hostname === "determinate.systems" ||
    hostname.endsWith(".determinate.systems")
  );
}

/**
 * Where an href is resolved from: `base` when given, otherwise the current
 * page. Undefined outside a browser with no `base`.
 */
export function resolveBase(base?: string | URL): string | URL | undefined {
  if (base !== undefined) return base;
  return typeof window === "undefined" ? undefined : window.location.href;
}

/** `href` as a URL, or null when it can't be parsed. */
export function parseHref(href: string, base?: string | URL): URL | null {
  try {
    return new URL(href, resolveBase(base));
  } catch {
    return null;
  }
}

/**
 * Whether `href` leads to another Determinate property, never the site
 * itself. `base` is the site's own URL and defaults to the current page, so
 * pass it when calling at build time; with neither, this is always false.
 */
export function isSiblingProperty(href: string, base?: string | URL): boolean {
  const self = parseHref("", base);
  const url = parseHref(href, base);
  if (!self || !url) return false;
  return url.hostname !== self.hostname && isSiblingHost(url.hostname);
}

/**
 * Whether `href` is an http(s) link to a different origin. Same-origin
 * absolute links are internal; `mailto:`, `tel:` and the like are never
 * external. Always false outside a browser with no `base`.
 */
export function isExternal(href: string, base?: string | URL): boolean {
  const self = parseHref("", base);
  const url = parseHref(href, base);
  if (!self || !url) return false;
  return (
    (url.protocol === "http:" || url.protocol === "https:") &&
    url.origin !== self.origin
  );
}

export type ExternalLinkAttrs = {
  /** An http(s) link to another origin. */
  external: boolean;
  target: "_blank" | undefined;
  rel: "noopener" | "noopener noreferrer" | undefined;
  /** The link leads to a sibling and should carry a phid (see `attachPhid`). */
  phid: boolean;
};

/**
 * Anchor attributes for `href`: external links open in a new tab, and only
 * links to a sibling keep the referrer and carry a phid.
 */
export function externalLinkAttrs(
  href: string,
  base?: string | URL,
): ExternalLinkAttrs {
  if (!isExternal(href, base)) {
    return { external: false, target: undefined, rel: undefined, phid: false };
  }
  const sibling = isSiblingProperty(href, base);
  return {
    external: true,
    target: "_blank",
    rel: sibling ? "noopener" : "noopener noreferrer",
    phid: sibling,
  };
}
