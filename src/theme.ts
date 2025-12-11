import type { ColorScheme } from "./ColorContext";

export function themeForScheme(scheme: ColorScheme): string {
  return `color-scheme--${scheme}`;
}

export function applyTheme(root: Element, scheme: ColorScheme) {
  const classes = root.classList;
  const [next, previous]: [ColorScheme, ColorScheme] =
    scheme === "light" ? ["light", "dark"] : ["dark", "light"];

  classes.add(themeForScheme(next));
  classes.remove(themeForScheme(previous));
}
