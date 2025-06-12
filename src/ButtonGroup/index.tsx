import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export type ButtonGroupSize = "sm" | "base" | "lg";

export interface ButtonGroupProps {
  /**
   * The size of the button group (mostly affects spacing).
   */
  size?: ButtonGroupSize;
}

const ButtonGroup: FC<PropsWithChildren<ButtonGroupProps>> = ({
  children,
  size = "base",
}) => {
  return (
    <div
      className={clsx("button-group", {
        "button-group--sm": size === "sm",
        "button-group--base": size === "base",
        "button-group--lg": size === "lg",
      })}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
