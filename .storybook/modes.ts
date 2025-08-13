export const allModes = {
  light: {
    preferredColorScheme: "light",
  },

  dark: {
    preferredColorScheme: "dark",
  },

  mobile_small: {
    preferredColorScheme: "light",
    viewport: "mobile1",
  },

  mobile_large: {
    preferredColorScheme: "light",
    viewport: "mobile2",
  },

  tablet: {
    preferredColorScheme: "light",
    viewport: "tablet",
  },

  desktop: {
    preferredColorScheme: "light",
    viewport: "desktop",
  },
} as const;
