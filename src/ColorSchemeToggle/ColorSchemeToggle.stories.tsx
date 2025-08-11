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

export const AutoOnDark: Story = {
  parameters: {
    preferredColorScheme: "auto",
    simulatedColorScheme: "dark",
  },
  decorators: [withColorScheme],
  play: async ({ canvas, userEvent }) => {
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--dark",
    );

    await userEvent.click(canvas.getByLabelText("Dark mode (automatic)"));
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--dark",
    );

    await userEvent.click(canvas.getByLabelText("Dark mode"));
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--light",
    );

    await userEvent.click(canvas.getByLabelText("Light mode"));
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--dark",
    );

    canvas.getByLabelText("Dark mode (automatic)");
  },
};

export const AutoOnLight: Story = {
  parameters: {
    preferredColorScheme: "auto",
    simulatedColorScheme: "light",
  },
  decorators: [withColorScheme],
  play: async ({ canvas, userEvent }) => {
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--light",
    );

    await userEvent.click(canvas.getByLabelText("Light mode (automatic)"));
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--dark",
    );

    await userEvent.click(canvas.getByLabelText("Dark mode"));
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--light",
    );

    await userEvent.click(canvas.getByLabelText("Light mode"));
    expect(canvas.getByTestId("color-scheme__icon")?.classList).toContain(
      "color-scheme-toggle__icon--light",
    );

    canvas.getByLabelText("Light mode (automatic)");
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
