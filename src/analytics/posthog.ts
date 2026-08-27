import posthog, { type PostHog, type PostHogConfig } from "posthog-js";

/** The PostHog project every Determinate site reports to. */
export const POSTHOG_PROJECT_KEY =
  "phc_qZk1aHPpXUq0ohRcTjFL5w8Tpo5Asht9UhFBjzruBFD";

/**
 * Our own proxy rather than PostHog's host, so an ad blocker's list of
 * third-party analytics domains doesn't decide whether analytics work.
 */
export const POSTHOG_API_HOST = "https://alley-oop.determinate.systems";

export const POSTHOG_UI_HOST = "https://us.posthog.com";

export type InitAnalyticsOptions = Partial<PostHogConfig> & {
  /** The project key; defaults to the shared Determinate project. */
  token?: string;
};

/**
 * Starts PostHog with the shared Determinate configuration. Browser only and
 * once only: calls during SSR, or after PostHog is already up, do nothing and
 * return undefined. Options override the defaults, e.g.
 * `opt_out_capturing_by_default: true` for a site behind a consent banner.
 */
export function initAnalytics({
  token = POSTHOG_PROJECT_KEY,
  ...config
}: InitAnalyticsOptions = {}): PostHog | undefined {
  if (typeof window === "undefined" || posthog.__loaded) return undefined;
  posthog.init(token, {
    api_host: POSTHOG_API_HOST,
    ui_host: POSTHOG_UI_HOST,
    defaults: "2026-01-30",
    ...config,
  });
  return posthog;
}

/** Whether PostHog is up and this visitor hasn't opted out of capturing. */
export function analyticsEnabled(): boolean {
  return posthog.__loaded && posthog.has_opted_in_capturing();
}

/** The `posthog-js` instance, for anything not covered here. */
export { posthog };
