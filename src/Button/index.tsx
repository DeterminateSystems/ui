import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export interface ButtonProps {
  /**
   * The button's color scheme.
   */
  color?: "black" | "white";

  /**
   * Aria label for the button.
   */
  ariaLabel?: string;

  /**
   * Handler to fire when the button is clicked.
   */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

/**
 * A `<Button />` represents a standard clickable button. It serves as the base components for our many button types.
 */
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color = "white",
  ariaLabel = "Button",
  onClick,
}) => (
  <button
    type="button"
    className={clsx(
      "button",
      color === "black" && "button--black",
      color === "white" && "button--white",
    )}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
