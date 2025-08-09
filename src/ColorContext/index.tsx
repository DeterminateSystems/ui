import React from "react";

export type ColorSchemePreference = "auto" | ColorScheme;
export type ColorScheme = "light" | "dark";

export interface ColorContextValue {
  readonly preference: ColorSchemePreference;
  readonly scheme: ColorScheme;
  readonly setPreference: (preference: ColorSchemePreference) => void;
  readonly setScheme: (scheme: ColorScheme) => void;
}

const ColorContext = React.createContext<ColorContextValue>(null!);

export default ColorContext;
