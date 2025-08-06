import React, {
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import ColorContext, {
  type ColorContextValue,
  type ColorScheme,
} from "../ColorContext";

export interface ColorProviderProps {
  /** Root element for this color context. Defaults to the HTML `<body>` element, but can be scoped more narrowly for testing. */
  root?: Element;

  /** Which color scheme to use by default. If omitted, queries the CSS engine. */
  initialColorScheme?: ColorScheme;
}

function computeInitialColorScheme(initial?: ColorScheme): ColorScheme {
  if (typeof initial !== "undefined") {
    return initial;
  }

  // In case we're doing server-side rendering, just render `dark` be done with it.
  if (typeof window === "undefined") {
    return "dark";
  }

  // TODO: read from local storage
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

// Helper component for
const ColorProvider: React.FC<PropsWithChildren<ColorProviderProps>> = ({
  initialColorScheme,
  root = document.body,
  children,
}) => {
  const [scheme, setScheme] = useState(() =>
    computeInitialColorScheme(initialColorScheme),
  );

  // Since we're pretty high up in the component tree, we want to be extremely
  // careful about re-rendering. Memoization ensures that the object only
  // changes when the scheme does.
  const value = useMemo<ColorContextValue>(
    () => ({ scheme, setScheme }),
    [scheme],
  );

  // Switch body classes depending on the chosen scheme
  useEffect(() => {
    const classes = root.classList;
    const [next, previous] =
      scheme === "light" ? ["light", "dark"] : ["dark", "light"];

    classes.add(`color-scheme--${next}`);
    classes.remove(`color-scheme--${previous}`);
  }, [scheme]);

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export default ColorProvider;
