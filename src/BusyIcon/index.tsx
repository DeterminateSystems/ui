import type { FC } from "react";

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

const widths: Record<BusyIconSize, string> = {
  sm: "ui:w-4",
  base: "ui:w-8",
  lg: "ui:w-12",
};

// Each segment's fill is driven by a custom property that the
// `busy-icon-pulse` and `busy-icon-finish` keyframes flip between colors.
const segment =
  "ui:transition-[fill] ui:duration-[calc(var(--busy-duration)/2)] ui:ease-linear";

const BusyIcon: FC<BusyIconProps> = ({
  size = "base",
  complete = false,
  ariaLabel = "Working",
}) => (
  <div
    className={clsx(
      "ui:inline-block ui:aspect-square ui:h-auto",
      widths[size],
      "ui:[--busy-duration:500ms]",
      "ui:[--busy-active:var(--ui-color-white)] ui:[--busy-inactive:var(--ui-color-gray)]",
      "ui:light:[--busy-active:var(--ui-color-black)] ui:light:[--busy-inactive:var(--ui-color-light)]",
      complete
        ? "ui:animate-busy-finish"
        : // Shorten the pending animation, but NOT the "complete" swipe
          "ui:animate-busy-pulse ui:motion-reduce:[--busy-duration:1ms] ui:motion-reduce:[animation-iteration-count:1]",
    )}
    role="status"
    aria-live="polite"
    aria-busy={!complete}
    aria-label={ariaLabel}
  >
    <svg
      aria-hidden="true"
      focusable="false"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      width="100%"
      height="100%"
      viewBox="0 0 104 104"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1,0,0,1,-0.0883418,-0.11004)">
        <g
          className="ui:fill-[var(--busy-start,transparent)]"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className={segment}
            d="M26.317,91L0,75.806L0,45.417L25.317,30.8L25.317,61.188L51.635,76.383L26.317,91Z"
          />
        </g>
        <g
          className="ui:fill-[var(--busy-step-0,transparent)]"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className={segment}
            d="M53.635,74.074L53.635,47.152L76.951,60.613L53.635,74.074Z"
          />
        </g>
        <g
          className="ui:fill-[var(--busy-step-1,transparent)]"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className={segment}
            d="M51.635,74.074L27.317,60.034L27.317,31.954L51.635,45.994L51.635,74.074Z"
          />
        </g>
        <g
          className="ui:fill-[var(--busy-step-2,transparent)]"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className={segment}
            d="M51.633,43.683L28.317,30.221L51.633,16.761L51.633,43.683Z"
          />
        </g>
        <g
          className="ui:fill-[var(--busy-step-3,transparent)]"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className={segment}
            d="M77.953,58.882L77.953,30.799L53.633,16.758L53.633,44.841L77.953,58.882Z"
          />
        </g>
        <g
          className="ui:fill-[var(--busy-end,transparent)]"
          transform="matrix(1,0,0,1,0.142464,6.30416)"
        >
          <path
            className={segment}
            d="M104.269,15.606L78.951,0.989L54.635,15.027L79.953,29.644L79.953,58.879L104.269,44.841L104.269,15.606Z"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default BusyIcon;
