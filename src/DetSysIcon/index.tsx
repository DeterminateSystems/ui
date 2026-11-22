import { type FC } from "react";

import brandmark from "./brandmark.svg";

export interface DetSysIconProps {
  /** Defaults to `base`. */
  size?: "sm" | "base" | "lg";

  /**
   * Text alternative. Leave it out when the mark is decorative; set it when
   * the mark is the only content of a link or button.
   */
  alt?: string;
}

const sizes: Record<NonNullable<DetSysIconProps["size"]>, string> = {
  sm: "h-6 w-full",
  base: "h-9 w-full",
  lg: "h-12 w-full",
};

function svgToDataUri(svg: string) {
  if (svg.startsWith("data:image/svg+xml")) {
    // In Storybook, the svg renders automatically correctly...
    // but under rollup, it isn't data URI'd.
    return svg;
  }

  const encoded = encodeURIComponent(svg)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  return `data:image/svg+xml;utf8,${encoded}`;
}

const DetSysIcon: FC<DetSysIconProps> = ({ size = "base", alt = "" }) => {
  return (
    <img
      className={sizes[size]}
      src={svgToDataUri(brandmark)}
      alt={alt}
      role={alt ? undefined : "presentation"}
    />
  );
};

export default DetSysIcon;
