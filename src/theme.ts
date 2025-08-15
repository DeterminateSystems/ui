import type { ColorScheme } from "./ColorContext";

export function themeForScheme(scheme: ColorScheme): string {
  return `color-scheme--${scheme}`;
}

export function applyTheme(root: Element, scheme: ColorScheme) {
  const classes = root.classList;

  if (classes === undefined) {
    console.log("classList on the root is null. Assuming we're doing SSR.")
    return;
  }

  const [next, previous]: [ColorScheme, ColorScheme] =
    scheme === "light" ? ["light", "dark"] : ["dark", "light"];

  classes.add(themeForScheme(next));
  classes.remove(themeForScheme(previous));
}
