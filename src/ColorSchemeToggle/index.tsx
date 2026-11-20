import { useContext, type CSSProperties, type FC } from "react";
import clsx from "clsx";
import ColorContext, { type ColorSchemePreference } from "../ColorContext";
import { nextSchemePreference } from "../ColorProvider";
import { MonitorIcon, MoonIcon, SunIcon, type IconProps } from "../icons";

export type ColorSchemeToggleVariant = "muted" | "colored";

export interface ColorSchemeToggleProps {
  /**
   * `muted` (the default) is a quiet gray that brightens on hover.
   * `colored` is sky blue in the dark scheme and ocean blue in the light one,
   * unless `colors` says otherwise.
   */
  variant?: ColorSchemeToggleVariant;

  /**
   * Colors for the `colored` variant, one per color scheme, as any CSS color.
   * They can also be set from a stylesheet, on the toggle or any ancestor,
   * with `--ui-toggle-color-dark` and `--ui-toggle-color-light`.
   */
  colors?: { dark?: string; light?: string };
}

const variants: Record<ColorSchemeToggleVariant, string> = {
  muted:
    "ui:text-muted ui:hover:text-white ui:light:text-gray-light ui:light:hover:text-gray-dark",
  colored:
    "ui:text-(--ui-toggle-color-dark,var(--ui-color-sky-blue)) ui:light:text-(--ui-toggle-color-light,var(--ui-color-ocean-blue))",
};

/** What each preference is called in the toggle's label. */
const names: Record<ColorSchemePreference, string> = {
  light: "light",
  dark: "dark",
  auto: "system",
};

/** One button that cycles light → dark → system. */
const ColorSchemeToggle: FC<ColorSchemeToggleProps> = ({
  variant = "muted",
  colors,
}) => {
  const { preference, setPreference } = useContext(ColorContext);
  const next = nextSchemePreference(preference);
  const Icon = icons[preference];

  return (
    <button
      type="button"
      onClick={() => setPreference(next)}
      aria-label={`Theme: ${names[preference]}. Switch to ${names[next]}`}
      title={`Theme: ${names[preference]}`}
      style={
        {
          "--ui-toggle-color-dark": colors?.dark,
          "--ui-toggle-color-light": colors?.light,
        } as CSSProperties
      }
      className={clsx(
        "ui:box-border ui:inline-flex ui:size-9 ui:cursor-pointer ui:items-center ui:justify-center ui:rounded-md",
        "ui:transition-[color,background-color] ui:duration-300 ui:motion-reduce:transition-none",
        "ui:hover:bg-surface ui:light:hover:bg-gray-wash",
        "ui:focus-visible:outline-2 ui:focus-visible:outline-offset-2 ui:focus-visible:outline-ocean-blue",
        variants[variant],
      )}
    >
      <Icon className="ui:size-5" strokeWidth={2} />
    </button>
  );
};

const icons: Record<ColorSchemePreference, FC<IconProps>> = {
  light: SunIcon,
  dark: MoonIcon,
  auto: MonitorIcon,
};

export default ColorSchemeToggle;
