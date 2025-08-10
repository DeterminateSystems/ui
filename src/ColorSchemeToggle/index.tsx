import { useContext, type FC, type ReactElement } from "react";
import ColorContext, { type ColorContextValue } from "../ColorContext";
import { nextSchemePreference } from "../ColorProvider";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import AutoIcon from "./AutoIcon";
import "./index.scss";

export interface ColorSchemeToggleProps {}

const ColorSchemeToggle: FC<ColorSchemeToggleProps> = ({}) => {
  const colorSchemeCtx = useContext(ColorContext);

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
      switch (context.scheme) {
        case "light":
          return <AutoIconLight height="100%" width="100%" />;
        case "dark":
          return <AutoIconDark height="100%" width="100%" />;
      }
    case "light":
      return <IoSunnySharp height="100%" width="100%" />;
    case "dark":
      return <IoMoonSharp height="100%" width="100%" />;
  }
}

export default ColorSchemeToggle;
