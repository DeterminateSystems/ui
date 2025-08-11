import React from "react";
import type { ColorScheme } from "../ColorContext";

function darkModeMatcher(): MediaQueryList | undefined {
  const media = window?.matchMedia?.("(prefers-color-scheme: dark)");
  if (!media) {
    return undefined;
  }

  return media;
}

function getSchemeFromMatcher(matcher: MediaQueryList): ColorScheme {
  return matcher.matches ? "dark" : "light";
}

function getSchemeFromEvent(event: MediaQueryListEvent): ColorScheme {
  return event.matches ? "dark" : "light";
}

function querySystemColorScheme(): ColorScheme | undefined {
  const media = darkModeMatcher();
  if (!media) {
    return undefined;
  }

  return getSchemeFromMatcher(media);
}

function useSystemColorScheme() {
  const [systemColorScheme, setSystemColorScheme] = React.useState(
    querySystemColorScheme,
  );

  React.useEffect(() => {
    const media = darkModeMatcher();

    if (!media) {
      return;
    }

    function handleChange(event: MediaQueryListEvent) {
      setSystemColorScheme(getSchemeFromEvent(event));
    }

    // just in case the preference changed before the event listener was attached
    setSystemColorScheme(getSchemeFromMatcher(media));
    media.addEventListener("change", handleChange);
    return function cleanup() {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return systemColorScheme;
}

export default useSystemColorScheme;
