/**
 * Class lists shared by more than one component.
 */

/** A bare, icon-only button. A direct `<svg>` child is drawn as a 24px outline icon. */
export const svgButton = [
  "ui:box-border ui:inline-flex ui:size-8 ui:cursor-pointer ui:items-center ui:justify-center ui:p-1",
  "ui:text-white ui:hover:text-white-dim ui:focus:text-white-dim",
  "ui:light:text-black ui:light:hover:text-black-soft ui:light:focus:text-black-soft",
  "ui:[&>svg]:size-6 ui:[&>svg]:fill-none ui:[&>svg]:stroke-2",
].join(" ");
