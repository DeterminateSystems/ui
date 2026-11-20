import type { Meta, StoryContext, StoryObj } from "@storybook/react-vite";

import ColorSchemeToggle from ".";
import ColorProvider from "../ColorProvider";
import { useState } from "react";
import "../../lib/index.min.css";
import { expect } from "storybook/test";

const meta = {
  title: "Atoms/ColorSchemeToggle",
  component: ColorSchemeToggle,
  parameters: {
    manageColorProvider: false,
  },
} satisfies Meta<typeof ColorSchemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {};

function withColorScheme(Story: React.FC, context: StoryContext) {
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
          preferredColorScheme={context.parameters.preferredColorScheme}
          simulatedSystemColorScheme={context.parameters.simulatedColorScheme}
          useLocalStorage={false}
          root={root}
        >
          <Story />
        </ColorProvider>
      )}
    </div>
  );
}

const labels = {
  system: "Theme: system. Switch to light",
  light: "Theme: light. Switch to dark",
  dark: "Theme: dark. Switch to system",
};

export const AutoOnDark: Story = {
  parameters: {
    preferredColorScheme: "auto",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
  play: async ({ canvas, canvasElement, userEvent }) => {
    const scheme = (name: string) =>
      canvasElement.querySelector(`.color-scheme--${name}`);

    expect(scheme("dark")).not.toBeNull();

    await userEvent.click(canvas.getByLabelText(labels.system));
    expect(scheme("light")).not.toBeNull();

    await userEvent.click(canvas.getByLabelText(labels.light));
    expect(scheme("dark")).not.toBeNull();

    await userEvent.click(canvas.getByLabelText(labels.dark));
    expect(scheme("dark")).not.toBeNull();

    // The clicks leave the toggle focused; drop the focus ring from the snapshot
    canvas.getByLabelText(labels.system).blur();
  },
};

export const AutoOnLight: Story = {
  parameters: {
    preferredColorScheme: "auto",
    simulatedColorScheme: "light",
  },
  decorators: [withColorScheme],
  play: async ({ canvas, canvasElement, userEvent }) => {
    const scheme = (name: string) =>
      canvasElement.querySelector(`.color-scheme--${name}`);

    expect(scheme("light")).not.toBeNull();

    await userEvent.click(canvas.getByLabelText(labels.system));
    expect(scheme("light")).not.toBeNull();

    await userEvent.click(canvas.getByLabelText(labels.light));
    expect(scheme("dark")).not.toBeNull();

    await userEvent.click(canvas.getByLabelText(labels.dark));
    expect(scheme("light")).not.toBeNull();

    // The clicks leave the toggle focused; drop the focus ring from the snapshot
    canvas.getByLabelText(labels.system).blur();
  },
};

export const PrefersLightOnLight: Story = {
  parameters: {
    preferredColorScheme: "light",
    simulatedColorScheme: "light",
  },
  decorators: [withColorScheme],
};

export const PrefersLightOnDark: Story = {
  parameters: {
    preferredColorScheme: "light",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
};

export const PrefersDarkOnDark: Story = {
  parameters: {
    preferredColorScheme: "dark",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
};

export const PrefersDarkOnLight: Story = {
  parameters: {
    preferredColorScheme: "dark",
    simulatedColorScheme: "light",
  },
  decorators: [withColorScheme],
};

export const ColoredOnDark: Story = {
  args: { variant: "colored" },
  parameters: {
    preferredColorScheme: "dark",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
};

export const ColoredOnLight: Story = {
  args: { variant: "colored" },
  parameters: {
    preferredColorScheme: "light",
    simulatedColorScheme: "light",
  },
  decorators: [withColorScheme],
};

export const ColoredAuto: Story = {
  args: { variant: "colored" },
  parameters: {
    preferredColorScheme: "auto",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
};

export const CustomColorsOnDark: Story = {
  args: {
    variant: "colored",
    colors: { dark: "#faa61a", light: "#cd1e88" },
  },
  parameters: {
    preferredColorScheme: "dark",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
};

export const CustomColorsOnLight: Story = {
  args: {
    variant: "colored",
    colors: { dark: "#faa61a", light: "#cd1e88" },
  },
  parameters: {
    preferredColorScheme: "light",
    simulatedColorScheme: "light",
  },
  decorators: [withColorScheme],
};
