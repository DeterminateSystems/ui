export const allModes = {
  light: {
    simulatedSystemColorScheme: "light",
  },

  dark: {
    simulatedSystemColorScheme: "dark",
  },

  mobile_minimum: {
    simulatedSystemColorScheme: "light",
    viewport: "minimum",
  },

  mobile_small: {
    simulatedSystemColorScheme: "light",
    viewport: "small",
  },

  tablet_medium: {
    simulatedSystemColorScheme: "light",
    viewport: "medium",
  },

  desktop_large: {
    simulatedSystemColorScheme: "light",
    viewport: "large",
  },

  desktop_xlarge: {
    simulatedSystemColorScheme: "light",
    viewport: "xlarge",
  },

  desktop_xxlarge: {
    simulatedSystemColorScheme: "light",
    viewport: "xxlarge",
  },
} as const;
