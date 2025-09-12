import { type FC } from "react";

import "./index.scss";
import brandmark from "./brandmark.svg";

export interface DetSysIconProps {
  size: "sm" | "base" | "lg";
}

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

const DetSysIcon: FC<DetSysIconProps> = ({ size }) => {
  return (
    <img
      className={`brandmark--${size}`}
      src={svgToDataUri(brandmark)}
      alt=""
      role="presentation"
    />
  );
};

export default DetSysIcon;
