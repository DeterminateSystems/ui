export const allModes = {
  light: {
    simulatedSystemColorScheme: "light",
  },

  dark: {
    simulatedSystemColorScheme: "dark",
  },

  mobile_small: {
    simulatedSystemColorScheme: "light",
    viewport: "mobile1",
  },

  mobile_large: {
    simulatedSystemColorScheme: "light",
    viewport: "mobile2",
  },

  tablet: {
    simulatedSystemColorScheme: "light",
    viewport: "tablet",
  },

  desktop: {
    simulatedSystemColorScheme: "light",
    viewport: "desktop",
  },
} as const;
