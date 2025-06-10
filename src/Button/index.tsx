import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export type ButtonSize = "sm" | "base" | "lg";
export type ButtonColors = "primary" | "secondary";

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
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
