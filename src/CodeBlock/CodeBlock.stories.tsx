import type { Meta, StoryObj } from "@storybook/react-vite";

import CodeBlock from "./";
import { highlightLanguages } from "../hooks/useHighlight";

const meta = {
  title: "Molecules/CodeBlock",
  component: CodeBlock,
  argTypes: {
    language: {
      control: "select",
      options: [...highlightLanguages],
    },
    kind: {
      control: "select",
      options: ["snippet", "file"],
    },
    code: { control: "text" },
    allowCopy: { control: "boolean" },
  },
  args: {
    kind: "snippet",
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
export const GithubCI: Story = {
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
    title: ".github/workflows/nix-ci.yaml",
    kind: "file",
    allowCopy: true,
    allowDownload: true,
  },
};

export const AWS: Story = {
  args: {
    language: "terraform",
    code: `data "aws_ami" "detsys_nixos" {
  owners      = ["535002876703"]
  most_recent = true

  filter {
    name   = "name"
    values = ["determinate/nixos/epoch-1/*"]
  }

  filter {
    name   = "architecture"
    values = ["x86_64"] # or "ARM64" for Graviton
  }
}`,
    title: "aws_ami.tf",
    kind: "file",
  },
};
