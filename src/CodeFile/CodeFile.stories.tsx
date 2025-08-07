import type { Meta, StoryObj } from "@storybook/react";

import CodeFile from "./";
import { highlightLanguages } from "../hooks/useHighlight";

const meta = {
  title: "Molecules/CodeFile",
  component: CodeFile,
  argTypes: {
    language: {
      control: "select",
      options: [...highlightLanguages],
    },
    code: { control: "text" },
    filename: { control: "text" },
    allowCopy: { control: "boolean" },
    allowDownload: { control: "boolean" },
  },
} satisfies Meta<typeof CodeFile>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    filename: ".github/workflows/nix-ci.yaml",
    download: "github-nix-ci.yaml",
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
    filename: "aws_ami.tf",
    allowCopy: true,
    allowDownload: true,
  },
};
