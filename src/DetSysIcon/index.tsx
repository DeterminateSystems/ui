import { type FC } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import "./index.scss";
import brandmark from "./brandmark.svg";

export interface DetSysIconProps {
  size: "sm" | "base" | "lg";
}

const DetSysIcon: FC<DetSysIconProps> = ({ size }) => {
  return <img className={`brandmark--${size}`} src={brandmark} />;
};

export default DetSysIcon;
