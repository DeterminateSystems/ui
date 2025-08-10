import React, {
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import ColorContext, {
  type ColorContextValue,
  type ColorScheme,
  type ColorSchemePreference,
} from "../ColorContext";

// License notes: a lot of the code having to do with runtime reactive switching came from GitHub's MIT code:
// https://github.com/primer/react/blob/e1268ff35acf48561adef9e55f8add39f69924eb/packages/react/src/ThemeProvider.tsx#L146

export interface ColorProviderProps {
  /** Root element for this color context. Defaults to the HTML `<body>` element, but can be scoped more narrowly for testing. */
  root?: Element;

  /** (For testing) Which color scheme to use instead of querying the system? */
  simulatedSystemColorScheme?: ColorScheme;
}

function querySystemColorScheme(): ColorScheme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function computeInitialColorSchemePreference(): ColorSchemePreference {
  // In case we're doing server-side rendering, just render `dark` be done with it.
  if (typeof window === "undefined") {
    return "dark";
  }

  // TODO: read from local storage
  return "auto";
}

// Helper component for
const ColorProvider: React.FC<PropsWithChildren<ColorProviderProps>> = ({
  simulatedSystemColorScheme,
  root = document.body,
  children,
}) => {
  const systemColorScheme =
    simulatedSystemColorScheme ?? useSystemColorScheme();

  const [preference, setPreference] = useState(() =>
    computeInitialColorSchemePreference(),
  );
  const [scheme, setScheme] = useState(() =>
    resolveColorScheme(preference, systemColorScheme),
  );

  // Apply the theme super early so we don't get a FOUC
  applyTheme(root, scheme);

  // Since we're pretty high up in the component tree, we want to be extremely
  // careful about re-rendering. Memoization ensures that the object only
  // changes when the scheme or preference does.
  const value = useMemo<ColorContextValue>(
    () => ({ scheme, setScheme, preference, setPreference }),
    [preference, scheme],
  );

  // Switch body classes depending on the chosen scheme
  useEffect(() => {
    setScheme(resolveColorScheme(preference, systemColorScheme));
  }, [preference, systemColorScheme, setScheme]);

  // Switch body classes depending on the chosen scheme
  useEffect(() => {
    applyTheme(root, scheme);
  }, [scheme]);

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

function applyTheme(root: Element, scheme: ColorScheme) {
  const classes = root.classList;
  const [next, previous] =
    scheme === "light" ? ["light", "dark"] : ["dark", "light"];

  classes.add(`color-scheme--${next}`);
  classes.remove(`color-scheme--${previous}`);
}

function resolveColorScheme(
  preferredScheme: ColorSchemePreference,
  systemColorScheme: ColorScheme,
) {
  switch (preferredScheme) {
    case "auto":
      return systemColorScheme;
    default:
      return preferredScheme;
  }
}

function useSystemColorScheme() {
  const [systemColorScheme, setSystemColorScheme] = React.useState(
    querySystemColorScheme,
  );

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const media = window?.matchMedia?.("(prefers-color-scheme: dark)");

    function matchesMediaToColorScheme(matches: boolean) {
      return matches ? "dark" : "light";
    }

    function handleChange(event: MediaQueryListEvent) {
      const isDark = event.matches;
      setSystemColorScheme(matchesMediaToColorScheme(isDark));
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (media) {
      // just in case the preference changed before the event listener was attached
      const isNight = media.matches;
      setSystemColorScheme(matchesMediaToColorScheme(isNight));
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (media.addEventListener !== undefined) {
        media.addEventListener("change", handleChange);
        return function cleanup() {
          media.removeEventListener("change", handleChange);
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      else if (media.addListener !== undefined) {
        media.addListener(handleChange);
        return function cleanup() {
          media.removeListener(handleChange);
        };
      }
    }
  }, []);

  return systemColorScheme;
}

const nextSchemePreference = (
  preference: ColorSchemePreference,
): ColorSchemePreference => {
  switch (preference) {
    case "auto":
      return "dark";
    case "dark":
      return "light";
    case "light":
      return "auto";
  }
};

export { nextSchemePreference };
export default ColorProvider;
