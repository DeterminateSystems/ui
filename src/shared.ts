import { action } from "@storybook/addon-actions";

// Corresponds to the $sizes map in Sass
export const sizes = ["sm", "base", "lg"] as const;

/**
 * Semantic sizes within the design system.
 */
export type Size = (typeof sizes)[number];

// Corresponds to the $colors map in Sass
export const colors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
] as const;

/**
 * Semantic colors within the design system.
 */
export type Color = (typeof colors)[number];

export const highlightLanguages = [
  "shell",
  "terraform",
  "text",
  "yaml",
] as const;

/**
 * Languages understood by the UI system's highlighter. The `text` option prevents highlighting.
 */
export type HighlightLanguage = (typeof highlightLanguages)[number];

export const makeClickVisible = action("click");
