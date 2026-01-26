import type { FC, PropsWithChildren } from "react";

import "./index.scss";
import clsx from "clsx";

export const STATUSES = ["Identified", "Waiting", "Affected", "Not affected", "Ignored", "Fixed" ] as const;

export type Status = (typeof STATUSES)[number];

export interface DSPStatusBadgeProps {
  status: Status;
}

/**
 * A `<Button />` represents a standard clickable button. It serves as the base component for our many button types.
 */
const DSPStatusBadge: FC<PropsWithChildren<DSPStatusBadgeProps>> = ({
  status
}) => (
  <div
    className={clsx(
      "dsp-status-badge", {
      "dsp-status-badge--identified": status === "Identified",
      "dsp-status-badge--waiting": status === "Waiting",
      "dsp-status-badge--affected": status === "Affected",
      "dsp-status-badge--not-affected": status === "Not affected",
      "dsp-status-badge--ignored": status === "Ignored",
      "dsp-status-badge--fixed": status === "Fixed",
    })}
  >{status}</div>
);

export default DSPStatusBadge;
