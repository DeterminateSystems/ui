import React from "react";

import type { Preview } from "@storybook/react";

import "../lib/index.min.css";

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

function withAllPreferredColorSchemes(Story, context) {
  console.log(context);
  let { preferredColorScheme } = context.globals;

  function Flex(props) {
    return (
      <div
        {...props}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2rem",
        }}
      />
    );
  }

  return (
    <>
      {preferredColorScheme !== "dark" && (
        <Flex className="color-scheme--light">
          <Story />
        </Flex>
      )}
      {preferredColorScheme !== "light" && (
        <Flex className="color-scheme--dark">
          <Story />
        </Flex>
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
