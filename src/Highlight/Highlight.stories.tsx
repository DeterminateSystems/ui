import type { Meta, StoryObj } from "@storybook/react";

import Highlight from "./";

const meta = {
  title: "Atoms/Highlight",
  component: Highlight,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    language: {
      control: "select",
      options: ["shell", "yaml", "terraform", "text"],
    },
    code: { control: "text" },
    inline: { control: "boolean" },
  },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shell: Story = {
  args: {
    language: "shell",
    code: "curl -fsSL https://install.determinate.systems/nix | sh -s -- install --determinate",
  },
};

export const ShellInline: Story = {
  args: {
    language: "shell",
    code: "curl -fsSL https://install.determinate.systems/nix | sh -s -- install --determinate",
    inline: true,
  },
};

export const Yaml: Story = {
  args: {
    language: "yaml",
    code: `on:
  pull_request:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  nix-ci:
    runs-on: ubuntu-latest
    # Include this block to log in to FlakeHub and access private flakes
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: DeterminateSystems/determinate-nix-action@v3
      - uses: DeterminateSystems/flakehub-cache-action@main
      - uses: DeterminateSystems/nix-flake-checker-action@main
      - run: nix flake check`,
  },
};

export const YamlInline: Story = {
  args: {
    language: "yaml",
    code: `on:
  pull_request:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  nix-ci:
    runs-on: ubuntu-latest
    # Include this block to log in to FlakeHub and access private flakes
    permissions:
      id-token: write
      contents: read
    steps:
      - uses: actions/checkout@v4
      - uses: DeterminateSystems/determinate-nix-action@v3
      - uses: DeterminateSystems/flakehub-cache-action@main
      - uses: DeterminateSystems/nix-flake-checker-action@main
      - run: nix flake check`,
    inline: true,
  },
};
