import React, { useState } from "react";

import type { Preview, StoryContext } from "@storybook/react-vite";

import "../lib/index.min.css";
import ColorProvider from "../src/ColorProvider";
import type { ColorScheme } from "../src/ColorContext";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import { allModes } from "./modes";

const preview: Preview = {
  decorators: [withSimulatedColorSchemes],

  parameters: {
    chromatic: {
      modes: allModes,
    },

    viewport: {
      options: MINIMAL_VIEWPORTS,
    },

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
    simulatedSystemColorScheme: ColorScheme;
  }>
> = ({ children, simulatedSystemColorScheme }) => {
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
          simulatedSystemColorScheme={simulatedSystemColorScheme}
          preferredColorScheme="auto"
          useLocalStorage={false}
          root={root}
        >
          {children}
        </ColorProvider>
      )}
    </div>
  );
};

function withSimulatedColorSchemes(Story: React.FC, context: StoryContext) {
  const { simulatedSystemColorScheme } = context.globals;
  const { manageColorProvider = true } = context.parameters;

  if (!manageColorProvider) {
    return <Story />;
  }

  return (
    <>
      {simulatedSystemColorScheme !== "dark" && (
        <Wrapper simulatedSystemColorScheme="light">
          <Story />
        </Wrapper>
      )}
      {simulatedSystemColorScheme !== "light" && (
        <Wrapper simulatedSystemColorScheme="dark">
          <Story />
        </Wrapper>
      )}
    </>
  );
}

export const globalTypes = {
  simulatedSystemColorScheme: {
    name: "Color scheme",
    description: "Select the light or dark theme",
    defaultValue: "light",
    toolbar: {
      icon: "contrast",
      items: ["light", "dark", "light & dark"],
      dynamicTitle: true,
    },
  },
};

export default preview;
