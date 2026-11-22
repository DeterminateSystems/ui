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
   * with `--ds-toggle-color-dark` and `--ds-toggle-color-light`.
   */
  colors?: { dark?: string; light?: string };
}

const variants: Record<ColorSchemeToggleVariant, string> = {
  muted:
    "text-ds-gray-light hover:text-ds-white light:text-ds-gray-600 light:hover:text-ds-gray-900",
  colored:
    "text-(--ds-toggle-color-dark,var(--color-ds-sky-blue)) light:text-(--ds-toggle-color-light,var(--color-ds-ocean-blue))",
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
          "--ds-toggle-color-dark": colors?.dark,
          "--ds-toggle-color-light": colors?.light,
        } as CSSProperties
      }
      className={clsx(
        "box-border inline-flex size-9 cursor-pointer items-center justify-center rounded-md",
        "transition-[color,background-color] duration-300 motion-reduce:transition-none",
        "hover:bg-ds-surface-3 light:hover:bg-ds-gray-100",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-ocean-blue",
        variants[variant],
      )}
    >
      <Icon className="size-5" strokeWidth={2} />
    </button>
  );
};

const icons: Record<ColorSchemePreference, FC<IconProps>> = {
  light: SunIcon,
  dark: MoonIcon,
  auto: MonitorIcon,
};

export default ColorSchemeToggle;
