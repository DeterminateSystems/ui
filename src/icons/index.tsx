import { type FC, type ReactNode } from "react";

/**
 * The line icons the library draws itself, on a 24px grid. Each takes a
 * `className` for size and color and is hidden from screen readers; the
 * control around it says what it means.
 */
export interface IconProps {
  /** Sets the size and color. Without it the icon is 24px. */
  className?: string;

  /** Line weight, in units of the 24px grid. */
  strokeWidth?: number;
}

const Icon: FC<IconProps & { children: ReactNode }> = ({
  className = "ui:size-6",
  strokeWidth = 1.75,
  children,
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

/** Two overlapping sheets: copy. */
export const CopyIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
  </Icon>
);

/** A check mark: done. */
export const CheckIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);

/** Three bars: open the menu. */
export const MenuIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </Icon>
);

/** A sun: the light color scheme. */
export const SunIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Icon>
);

/** A crescent moon: the dark color scheme. */
export const MoonIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);

/** A monitor: follow the system's color scheme. */
export const MonitorIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </Icon>
);
