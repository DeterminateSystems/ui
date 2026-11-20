import type { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import ClipboardIcon from "../ClipboardIcon";
import {
  CheckIcon,
  CopyIcon,
  MenuIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
  type IconProps,
} from ".";

const icons: Record<string, FC<IconProps>> = {
  CopyIcon,
  CheckIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
  MonitorIcon,
};

const meta = {
  title: "Atoms/Icons",
  // The gallery is the documentation; an autodocs page would only repeat it
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

/** Every line icon, at the default 24px. */
export const All: StoryObj = {
  render: () => (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(7rem, 1fr))",
        gap: "1.5rem",
        width: "100%",
        margin: 0,
        padding: 0,
        listStyle: "none",
      }}
    >
      {Object.entries(icons).map(([name, Icon]) => (
        <li
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.75rem",
          }}
        >
          <Icon />
          <code>{name}</code>
        </li>
      ))}
    </ul>
  ),
};

/** The copy icon, which becomes a check once the value has been copied. */
export const Clipboard: StoryObj<typeof ClipboardIcon> = {
  render: (args) => <ClipboardIcon {...args} />,
  args: { copied: false },
  argTypes: { copied: { control: "boolean" } },
};

export const ClipboardCopied: StoryObj<typeof ClipboardIcon> = {
  ...Clipboard,
  args: { copied: true },
};
