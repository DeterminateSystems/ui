import React from "react";

export type ColorScheme = "light" | "dark";

export interface ColorContextValue {
  readonly scheme: ColorScheme;
  readonly setScheme: (scheme: ColorScheme) => void;
}

const ColorContext = React.createContext<ColorContextValue>(null!);

export default ColorContext;
