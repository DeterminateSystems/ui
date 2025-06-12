import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";
import type { Color, Size } from "../shared";

export interface ButtonProps {
  /**
   * An optional HTML identifier for the button.
   */
  id?: string;

  /**
   * The button's size.
   */
  size?: Size;

  /**
   * The button's color scheme.
   */
  color?: Color;

  /**
   * Whether the button is outlined.
   */
  outlined?: boolean;

  /**
   * Handler to fire when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A `<Button />` represents a standard clickable button. It serves as the base component for our many button types.
 */
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  id,
  size = "base",
  color = "primary",
  outlined = false,
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
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
