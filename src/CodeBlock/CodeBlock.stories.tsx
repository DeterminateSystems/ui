import type { Meta, StoryObj } from "@storybook/react";

import CodeBlock from "./";
import { HighlightLanguages } from "../hooks/useHighlight";

const meta = {
  title: "Molecules/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    language: {
      control: "select",
      options: [...HighlightLanguages],
    },
    code: { control: "text" },
    allowCopy: { control: "boolean" },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InstallDeterminate: Story = {
  args: {
    language: "shell",
    code: "curl -fsSL https://install.determinate.systems/nix | sh -s -- install --determinate",
    title: "Install Determinate",
    allowCopy: true,
  },
};

export const UseActions: Story = {
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
    title: "Use in GitHub Actions",
    allowCopy: true,
  },
};
