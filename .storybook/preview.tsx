import React, { useState } from "react";

import type { Preview, StoryContext } from "@storybook/react-vite";

import "../lib/index.min.css";
import ColorProvider from "../src/ColorProvider";
import type { ColorScheme } from "../src/ColorContext";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import { allModes } from "./modes";

const preview: Preview = {
  decorators: [withAllPreferredColorSchemes],

  parameters: {
    chromatic: {
      modes: {
        light: allModes["light"],
        dark: allModes["dark"],
        mobile1: allModes["mobile1"],
        mobile2: allModes["mobile2"],
        tablet: allModes["tablet"],
        desktop: allModes["desktop"],
      },
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
const Wrapper: React.FC<React.PropsWithChildren<{ scheme: ColorScheme }>> = ({
  children,
  scheme,
}) => {
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
        <ColorProvider initialColorScheme={scheme} root={root}>
          {children}
        </ColorProvider>
      )}
    </div>
  );
};

function withAllPreferredColorSchemes(Story: React.FC, context: StoryContext) {
  const { preferredColorScheme } = context.globals;

  return (
    <>
      {preferredColorScheme !== "dark" && (
        <Wrapper scheme="light">
          <Story />
        </Wrapper>
      )}
      {preferredColorScheme !== "light" && (
        <Wrapper scheme="dark">
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
