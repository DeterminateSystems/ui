import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export const SEVERITIES = ["Unknown", "Low", "Medium", "High", "Critical"] as const;

export type Severity = (typeof SEVERITIES)[number];

export interface SeverityBadgeProps {
  severity: Severity;
}

/**
 * A `<Button />` represents a standard clickable button. It serves as the base component for our many button types.
 */
const SeverityBadge: FC<PropsWithChildren<SeverityBadgeProps>> = ({
  severity
}) => (
  <div
    className={clsx("severity-badge", {
      "severity-badge--unknown": severity === "Unknown",
      "severity-badge--low": severity === "Low",
      "severity-badge--medium": severity === "Medium",
      "severity-badge--high": severity === "High",
      "severity-badge--critical": severity === "Critical",
    })}
  >{severity}</div>
);

export default SeverityBadge;
