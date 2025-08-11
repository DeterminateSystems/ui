import { useContext, type FC, type ReactElement } from "react";
import ColorContext, { type ColorContextValue } from "../ColorContext";
import { nextSchemePreference } from "../ColorProvider";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { AutoIconLight, AutoIconDark } from "./AutoIcon";
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
      switch (context.scheme) {
        case "light":
          return <AutoIconLight height="auto" width="auto" />;
        case "dark":
          return <AutoIconDark height="auto" width="auto" />;
      }
    case "light":
      return <IoSunnySharp height="auto" width="auto" />;

    case "dark":
      return <IoMoonSharp height="auto" width="auto" />;
  }
}

export default ColorSchemeToggle;
