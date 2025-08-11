import { useContext, type FC, type ReactElement } from "react";
import ColorContext, {
  type ColorContextValue,
  type ColorScheme,
} from "../ColorContext";
import { nextSchemePreference } from "../ColorProvider";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

import "./index.scss";

export interface ColorSchemeToggleProps {}

const ColorSchemeToggle: FC<ColorSchemeToggleProps> = ({}) => {
  let colorSchemeCtx = useContext(ColorContext);

  return (
    <button
      className="color-scheme-toggle"
      aria-label="Toggle light/dark/auto mode"
      onClick={() => {
        colorSchemeCtx.setPreference(
          nextSchemePreference(colorSchemeCtx.preference),
        );
      }}
    >
      <div
        className={`color-scheme-toggle__icon color-scheme-toggle__icon--${colorSchemeCtx.scheme}`}
      >
        {iconForContext(colorSchemeCtx)}
      </div>
    </button>
  );
};

function iconForContext(context: ColorContextValue): ReactElement {
  switch (context.preference) {
    case "auto":
      return <AutoIcon colorScheme={context.scheme} />;
    case "light":
      return <IoSunnySharp height="auto" width="auto" />;

    case "dark":
      return <IoMoonSharp height="auto" width="auto" />;
  }
}

interface AutoIconProps {
  readonly colorScheme: ColorScheme;
}

const AutoIcon: FC<AutoIconProps> = ({ colorScheme }) => (
  <svg
    width="auto"
    height="auto"
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinecap="square"
    strokeMiterlimit="10"
    stroke="currentColor"
    fill="currentColor"
  >
    <title>Auto theme icon</title>
    <g id="auto" transform="matrix(1,0,0,1,0,2)">
      <g transform="matrix(1.71429,0,0,1.71429,-0.285714,-2.09374)">
        <path
          d="M10.188,6.694L10.188,5.995C10.188,3.681 8.307,1.805 5.988,1.805C4.71,1.803 3.5,2.385 2.703,3.383M1.8,5.305L1.8,6.004C1.8,8.32 3.68,10.195 6,10.195C7.273,10.193 8.48,9.617 9.281,8.627"
          fill="none"
          fillRule="nonzero"
          strokeWidth="0.75px"
        />
      </g>
      <g transform="matrix(1.71429,0,0,1.71429,-0.285714,-2.09374)">
        <path
          d="M0.75,6L1.781,4.969L2.859,6M11.25,6L10.219,7.031L9.141,6"
          fill="none"
          fillRule="nonzero"
          strokeWidth="0.75px"
        />
      </g>
    </g>
    {colorScheme == "dark" && (
      <g transform="matrix(0.761905,0,0,0.761905,5.42857,5.42857)">
        <g id="moon">
          <path
            d="M3.577,2.971C3.577,2.198 3.691,1.416 3.981,0.75C2.052,1.59 0.75,3.56 0.75,5.798C0.75,8.809 3.191,11.25 6.202,11.25C8.44,11.25 10.41,9.948 11.25,8.019C10.584,8.309 9.802,8.423 9.029,8.423C6.018,8.423 3.577,5.982 3.577,2.971Z"
            fillRule="nonzero"
          />
        </g>
      </g>
    )}
    {colorScheme == "light" && (
      <g transform="matrix(0.742029,0,0,0.742029,5.54783,5.54783)">
        <g id="sun">
          <path
            id="Sun"
            d="M5.484,0.609L6.516,0.609L6.516,2.766L5.484,2.766L5.484,0.609ZM5.484,9.234L6.516,9.234L6.516,11.391L5.484,11.391L5.484,9.234ZM7.922,3.348L9.447,1.824L10.176,2.553L8.652,4.077L7.922,3.348ZM1.824,9.447L3.348,7.922L4.078,8.652L2.553,10.176L1.824,9.447ZM9.234,5.484L11.391,5.484L11.391,6.516L9.234,6.516L9.234,5.484ZM0.609,5.484L2.766,5.484L2.766,6.516L0.609,6.516L0.609,5.484ZM7.923,8.652L8.652,7.923L10.176,9.447L9.447,10.176L7.923,8.652ZM1.823,2.553L2.553,1.824L4.077,3.348L3.348,4.077L1.823,2.553ZM6,8.391C4.689,8.391 3.609,7.311 3.609,6C3.609,4.689 4.689,3.609 6,3.609C7.311,3.609 8.391,4.689 8.391,6C8.389,7.311 7.311,8.389 6,8.391Z"
            fillRule="nonzero"
          />
        </g>
      </g>
    )}
  </svg>
);

export default ColorSchemeToggle;
