/**
 * Class lists shared by more than one component.
 */

/**
 * Centers content and caps its width at the current breakpoint, with a gutter
 * on each side. Spelled out, not Tailwind's `container`, because applications
 * are free to redefine that utility.
 */
export const container =
  "mx-auto w-full px-3 sm:max-w-160 md:max-w-192 lg:max-w-256 xl:max-w-320";

/** A bare, icon-only button. A direct `<svg>` child is drawn as a 24px outline icon. */
export const svgButton = [
  "box-border inline-flex size-8 cursor-pointer items-center justify-center p-1",
  "text-ds-white hover:text-ds-white-dim focus:text-ds-white-dim",
  "light:text-ds-ink light:hover:text-ds-ink-soft light:focus:text-ds-ink-soft",
  "[&>svg]:size-6 [&>svg]:fill-none [&>svg]:stroke-2",
].join(" ");
