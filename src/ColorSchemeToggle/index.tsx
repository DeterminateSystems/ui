import { type FC, useContext, useMemo } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import ColorContext, { type ColorSchemePreference } from "../ColorContext";
import { nextSchemePreference } from "../ColorProvider";
import AutoIcon from "./AutoIcon";
import "./index.scss";

const icons = {
	light: <IoSunnySharp aria-label="Light mode" height="100%" width="100%" />,
	dark: <IoMoonSharp aria-label="Dark mode" height="100%" width="100%" />,
	auto: <AutoIcon height="100%" width="100%" />,
};

const ColorSchemeToggle: FC = () => {
	const ctx = useContext(ColorContext);

  const icon = useMemo(() => icons[ctx.preference], [ctx.preference]);

	return (
		<button
      type="button"
			className="color-scheme-toggle"
			aria-label="Toggle light/dark/auto mode"
			onClick={() => {
				ctx.setPreference(
					nextSchemePreference(ctx.preference),
				);
			}}
		>
			<div
				data-testid="color-scheme__icon"
				className={`color-scheme-toggle__icon color-scheme-toggle__icon--${ctx.scheme}`}
			>
				{icon}
			</div>
		</button>
	);
};

export interface IconProps {
	preference: ColorSchemePreference;
}

export default ColorSchemeToggle;
