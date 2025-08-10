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

import { default as useSystemColorScheme } from "../hooks/useSystemColorScheme";

// License notes: a lot of the code having to do with runtime reactive switching came from GitHub's MIT code:
// https://github.com/primer/react/blob/e1268ff35acf48561adef9e55f8add39f69924eb/packages/react/src/ThemeProvider.tsx#L146

export interface ColorProviderProps {
  /** Root element for this color context. Defaults to the HTML `<body>` element, but can be scoped more narrowly for testing. */
  root?: Element;

  /** (For testing) Which color scheme to use instead of querying the system? */
  simulatedSystemColorScheme?: ColorScheme;

  /** (For testing) Which color scheme does the user prefer? */
  preferredColorScheme?: ColorSchemePreference;
}

function computeInitialColorSchemePreference(
  preferredColorScheme?: ColorSchemePreference,
): ColorSchemePreference {
  // In case we're doing server-side rendering, just render `dark` be done with it.
  if (typeof window === "undefined") {
    return "dark";
  }

  if (preferredColorScheme) {
    return preferredColorScheme;
  }

  // TODO: read from local storage
  return "auto";
}

// Helper component for
const ColorProvider: React.FC<PropsWithChildren<ColorProviderProps>> = ({
  simulatedSystemColorScheme,
  preferredColorScheme,
  root = document.body,
  children,
}) => {
  const systemColorScheme =
    simulatedSystemColorScheme ?? useSystemColorScheme();

  const [preference, setPreference] = useState(() =>
    computeInitialColorSchemePreference(preferredColorScheme),
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
  systemColorScheme?: ColorScheme,
): ColorScheme {
  switch (preferredScheme) {
    case "auto":
      if (systemColorScheme) {
        return systemColorScheme;
      }
      return "dark";
    default:
      return preferredScheme;
  }
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
