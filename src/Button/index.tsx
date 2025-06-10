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
   * An optional HTML identifier for the button.
   */
  id?: string;

  /**
   * The button's color scheme.
   */
  color?: "black" | "white" | "dark-blue" | "red" | "blue-a";

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
  id,
  color = "white",
  onClick,
}) => (
  <button
    type="button"
    id={id}
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
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
