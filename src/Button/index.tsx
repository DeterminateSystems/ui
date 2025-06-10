import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export type ButtonSize = "sm" | "base" | "lg";
export type ButtonColors =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger";

export interface ButtonProps {
  /**
   * An optional HTML identifier for the button.
   */
  id?: string;

  /**
   * The button's size.
   */
  size?: ButtonSize;

  /**
   * The button's color scheme.
   */
  color?: ButtonColors;

  /**
   * Whether the button is outlined.
   */
  outlined?: boolean;

  /**
   * Whether the button changes color upon hover.
   */
  hover?: boolean;

  /**
   * Handler to fire when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A `<Button />` represents a standard clickable button. It serves as the base components for our many button types.
 */
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  id,
  size = "base",
  color = "primary",
  outlined = false,
  hover = true,
  onClick,
}) => (
  <button
    type="button"
    id={id}
    className={clsx("button", {
      "button--sm": size === "sm",
      "button--base": size === "base",
      "button--lg": size === "lg",
      "button--primary": color === "primary",
      "button--secondary": color === "secondary",
      "button--success": color === "success",
      "button--info": color === "info",
      "button--warning": color === "warning",
      "button--danger": color === "danger",
      "button--outlined": outlined,
      "button--hover": hover,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
