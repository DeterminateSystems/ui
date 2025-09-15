import type { FC } from "react";

import "./index.scss";
import clsx from "clsx";

export type BusyIconSize = "sm" | "base" | "lg";

export interface BusyIconProps {
  /**
   * The BusyIcon's size.
   */
  size?: BusyIconSize;

  complete?: boolean;
  /**
   * Screen reader label when pending.
   * Defaults to "Working".
   */
  ariaLabel?: string;
}

const BusyIcon: FC<BusyIconProps> = ({
  size = "base",
  complete = false,
  ariaLabel = "Working",
}) => (
  <div
    className={clsx(
      "busy-icon",
      `busy-icon--${size}`,
      complete ? "busy-icon--complete" : "busy-icon--pending",
    )}
    role="status"
    aria-live="polite"
    aria-busy={!complete}
    aria-label={ariaLabel}
  >
    <svg
      aria-hidden="true"
      focusable="false"
      className="busy-icon__svg"
      width="100%"
      height="100%"
      viewBox="0 0 104 104"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="busy-icon__loader"
        transform="matrix(1,0,0,1,-0.0883418,-0.11004)"
      >
        <g
          className="busy-icon__start"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className="busy-icon__path"
            d="M26.317,91L0,75.806L0,45.417L25.317,30.8L25.317,61.188L51.635,76.383L26.317,91Z"
          />
        </g>
        <g
          className="busy-icon__step-0"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className="busy-icon__path"
            d="M53.635,74.074L53.635,47.152L76.951,60.613L53.635,74.074Z"
          />
        </g>
        <g
          className="busy-icon__step-1"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className="busy-icon__path"
            d="M51.635,74.074L27.317,60.034L27.317,31.954L51.635,45.994L51.635,74.074Z"
          />
        </g>
        <g
          className="busy-icon__step-2"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className="busy-icon__path"
            d="M51.633,43.683L28.317,30.221L51.633,16.761L51.633,43.683Z"
          />
        </g>
        <g
          className="busy-icon__step-3"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className="busy-icon__path"
            d="M77.953,58.882L77.953,30.799L53.633,16.758L53.633,44.841L77.953,58.882Z"
          />
        </g>
        <g
          className="busy-icon__end"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className="busy-icon__path"
            d="M104.269,15.606L78.951,0.989L54.635,15.027L79.953,29.644L79.953,58.879L104.269,44.841L104.269,15.606Z"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default BusyIcon;
