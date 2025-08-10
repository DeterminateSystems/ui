import React, { useState } from "react";

import type { Preview, StoryContext } from "@storybook/react-vite";

import "../lib/index.min.css";
import ColorProvider from "../src/ColorProvider";
import type { ColorScheme } from "../src/ColorContext";

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
  React.PropsWithChildren<{ emulatedSystemColorScheme: ColorScheme }>
> = ({ children, emulatedSystemColorScheme }) => {
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

  return (
    <>
      {emulatedSystemColorScheme !== "dark" && (
        <Wrapper emulatedSystemColorScheme="light">
          <Story />
        </Wrapper>
      )}
      {emulatedSystemColorScheme !== "light" && (
        <Wrapper emulatedSystemColorScheme="dark">
          <Story />
        </Wrapper>
      )}
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
