import React, { useState } from "react";

import type { Preview, StoryContext } from "@storybook/react-vite";

import "../lib/index.min.css";
import ColorProvider from "../src/ColorProvider";
import type { ColorScheme, ColorSchemePreference } from "../src/ColorContext";

const preview: Preview = {
  decorators: [withAllPreferredColorSchemes],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
};

// Helper to force a story's color scheme context
const Wrapper: React.FC<
  React.PropsWithChildren<{
    emulatedSystemColorScheme: ColorScheme;
    preferredColorScheme: ColorSchemePreference;
  }>
> = ({ children, emulatedSystemColorScheme, preferredColorScheme }) => {
  // Stash the <div> element as a ref. Using state forces a re-render when the
  // element changes, so it's a better choice than createRef would be.
  const [root, setRoot] = useState<HTMLElement | null>(null);

  return (
    <div
      ref={setRoot}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {root !== null && (
        <ColorProvider
          simulatedSystemColorScheme={emulatedSystemColorScheme}
          preferredColorScheme={preferredColorScheme}
          root={root}
        >
          {children}
        </ColorProvider>
      )}
    </div>
  );
};

function withAllPreferredColorSchemes(Story: React.FC, context: StoryContext) {
  const { emulatedSystemColorScheme } = context.globals;
  const { enumerateColorSchemePreferences } = context.parameters;

  const showPreferenceHeader = enumerateColorSchemePreferences === true;
  const preferenceOpts: ColorSchemePreference[] =
    enumerateColorSchemePreferences === true
      ? ["auto", "light", "dark"]
      : ["auto"];

  return (
    <>
      {emulatedSystemColorScheme !== "dark" &&
        preferenceOpts.map((opt) => (
          <div key={opt}>
            {showPreferenceHeader && (
              <strong>
                system color scheme: light, preferred scheme: {opt}
              </strong>
            )}
            <Wrapper
              emulatedSystemColorScheme="light"
              preferredColorScheme={opt}
            >
              <Story />
            </Wrapper>
          </div>
        ))}
      {emulatedSystemColorScheme !== "light" &&
        preferenceOpts.map((opt) => (
          <div key={opt}>
            {showPreferenceHeader && (
              <strong>
                system color scheme: dark, preferred scheme: {opt}
              </strong>
            )}
            <Wrapper
              emulatedSystemColorScheme="dark"
              preferredColorScheme={opt}
            >
              <Story />
            </Wrapper>
          </div>
        ))}
    </>
  );
}

export const globalTypes = {
  preferredColorScheme: {
    name: "Preferred color scheme",
    description: "Select the light or dark theme",
    defaultValue: "light & dark",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark", "light & dark"],
      dynamicTitle: true,
    },
  },
};

export default preview;
