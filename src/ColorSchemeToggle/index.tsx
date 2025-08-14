import { useContext, type FC } from "react";
import ColorContext, { type ColorSchemePreference } from "../ColorContext";
import { nextSchemePreference } from "../ColorProvider";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import AutoIcon from "./AutoIcon";
import "./index.scss";

const icons = {
  light: <IoSunnySharp aria-label="Light mode" height="100%" width="100%" />,
  dark: <IoMoonSharp aria-label="Dark mode" height="100%" width="100%" />,
  auto: <AutoIcon height="100%" width="100%" />,
};

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
        data-testid="color-scheme__icon"
        className={`color-scheme-toggle__icon color-scheme-toggle__icon--${colorSchemeCtx.scheme}`}
      >
        <Icon preference={colorSchemeCtx.preference} />
      </div>
    </button>
  );
};

export interface IconProps {
  preference: ColorSchemePreference;
}

const Icon: FC<IconProps> = ({ preference }) => {
  return icons[preference];
};

export default ColorSchemeToggle;
