/**
 * The PostHog id handoff between Determinate sites. determinate.systems,
 * flakehub.com and the rest are separate origins, so a visitor who crosses
 * between them is two people unless the id travels: `?phid=` on the way out
 * (`attachPhid`, `withPhid`), and an alias on the way in (`absorbPhid`,
 * `adoptPhid`).
 */
import { analyticsEnabled, posthog } from "./posthog";
import { isSiblingProperty, parseHref } from "./siblings";

/** The query parameter the visitor's PostHog id travels in. */
export const PHID_PARAM = "phid";

/**
 * This browser's PostHog id, or undefined before PostHog is up or when the
 * visitor has opted out.
 */
export function currentDistinctId(): string | undefined {
  if (!analyticsEnabled()) return undefined;
  return posthog.get_distinct_id() || undefined;
}

/**
 * `href` with `?phid=` set when it leads to a sibling; otherwise `href`
 * unchanged. Pure, for hrefs computed at render time; `distinctId` defaults
 * to the current visitor's, and with none the href is unchanged too.
 */
export function withPhid(
  href: string,
  distinctId: string | undefined = currentDistinctId(),
  base?: string | URL,
): string {
  if (!distinctId || !isSiblingProperty(href, base)) return href;
  const url = parseHref(href, base);
  if (!url) return href;
  url.searchParams.set(PHID_PARAM, distinctId);
  return url.toString();
}

/**
 * For a click handler: sets `?phid=` on `link.href` for the navigation now
 * under way, then restores the href so the visible, copyable link stays
 * clean. Links that don't lead to a sibling, and clicks before PostHog is up,
 * are left alone.
 */
export function attachPhid(
  link: HTMLAnchorElement,
  distinctId: string | undefined = currentDistinctId(),
): void {
  const original = link.href;
  const attached = withPhid(original, distinctId);
  if (attached === original) return;
  link.href = attached;
  setTimeout(() => {
    link.href = original;
  }, 500);
}

/** Aliases an id that arrived from a sibling to this visitor. */
export function adoptPhid(phid: string): void {
  if (phid && analyticsEnabled()) posthog.alias(phid);
}

/**
 * Takes an incoming `?phid=` off the current page: adopts it and returns the
 * page URL (path, query and hash) without it, for the caller to put in the
 * address bar. Null when there is none. Call after `initAnalytics`.
 */
export function absorbPhid(): string | null {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  const phid = url.searchParams.get(PHID_PARAM);
  if (!phid) return null;
  adoptPhid(phid);
  url.searchParams.delete(PHID_PARAM);
  return url.pathname + url.search + url.hash;
}
