export const allModes = {
  light: {
    preferredColorScheme: "light",
  },

  dark: {
    preferredColorScheme: "dark",
  },

  mobile1: {
    preferredColorScheme: "light",
    viewport: "mobile1",
  },

  mobile2: {
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
