import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export type ButtonSize = "sm" | "lg";

export interface ButtonProps {
  /**
   * The button's size.
   */
  size?: ButtonSize;

  /**
   * The button's color scheme.
   */
  color?: "black" | "white" | "dark-blue" | "red" | "blue-a";

  /**
   * Aria label for the button.
   */
  ariaLabel?: string;

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
  size = "sm",
  color = "white",
  ariaLabel = "Button",
  onClick,
}) => (
  <button
    type="button"
    className={clsx(
      "button",
      size === "sm" && "button--sm",
      size === "lg" && "button--lg",
      color === "black" && "button--black",
      color === "white" && "button--white",
      color === "dark-blue" && "button--dark-blue",
      color === "red" && "button--red",
      color === "blue-a" && "button--blue-a",
    )}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
