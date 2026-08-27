// Shared analytics for the Determinate sites: the sibling-host rule, the
// `?phid=` handoff and the PostHog setup. React-free, so it's its own entry
// point: `@determinate-systems/ui/analytics`.

export {
  type ExternalLinkAttrs,
  THIRD_PARTY_HOSTS,
  externalLinkAttrs,
  isExternal,
  isSiblingHost,
  isSiblingProperty,
} from "./analytics/siblings";

export {
  PHID_PARAM,
  absorbPhid,
  adoptPhid,
  attachPhid,
  currentDistinctId,
  withPhid,
} from "./analytics/phid";

export {
  type InitAnalyticsOptions,
  POSTHOG_API_HOST,
  POSTHOG_PROJECT_KEY,
  POSTHOG_UI_HOST,
  analyticsEnabled,
  initAnalytics,
  posthog,
} from "./analytics/posthog";
