import type { Meta, StoryObj } from "@storybook/react";

import ButtonGroup from "./";
import { Button } from "..";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Atoms/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Make clicks visible in the inspector
const onClick = action("click");

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <>
        <Button size="sm" color="primary" onClick={onClick}>
          Primary
        </Button>

        <Button size="sm" color="secondary" onClick={onClick}>
          Primary
        </Button>
      </>
    ),
  },
};

export const Base: Story = {
  args: {
    size: "base",
    children: (
      <>
        <Button size="base" color="primary" onClick={onClick}>
          Primary
        </Button>

        <Button size="base" color="secondary" onClick={onClick}>
          Primary
        </Button>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: (
      <>
        <Button size="lg" color="primary" onClick={onClick}>
          Primary
        </Button>

        <Button size="lg" color="secondary" outlined onClick={onClick}>
          Primary
        </Button>
      </>
    ),
  },
};

export const SmallButtonsWithLargeGap: Story = {
  args: {
    size: "lg",
    children: (
      <>
        <Button size="sm" color="primary" onClick={onClick}>
          Primary
        </Button>

        <Button size="sm" color="secondary" outlined onClick={onClick}>
          Primary
        </Button>
      </>
    ),
  },
};
