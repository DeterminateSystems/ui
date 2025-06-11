import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonColors, ButtonSizes } from "./";

const meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: {
      description: "The button's color scheme",
      options: [...ButtonColors],
    },
    size: {
      description: "The button's size",
      option: [...ButtonSizes],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Make clicks visible in the inspector
const onClick = action("click");

export const All = () => (
  <>
    <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
      <Button size="sm" color="primary" onClick={onClick}>
        Primary small
      </Button>
      <Button size="base" color="primary" onClick={onClick}>
        Primary base
      </Button>
      <Button size="lg" color="primary" onClick={onClick}>
        Primary large
      </Button>
      <Button size="sm" color="primary" outlined onClick={onClick}>
        Primary small outlined
      </Button>
      <Button size="base" color="primary" outlined onClick={onClick}>
        Primary base outlined
      </Button>
      <Button size="lg" color="primary" outlined onClick={onClick}>
        Primary large outlined
      </Button>
    </div>
    <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
      <Button size="sm" color="secondary" onClick={onClick}>
        Secondary small
      </Button>
      <Button size="base" color="secondary" onClick={onClick}>
        Secondary base
      </Button>
      <Button size="lg" color="secondary" onClick={onClick}>
        Secondary large
      </Button>
      <Button size="sm" color="secondary" outlined onClick={onClick}>
        Secondary small outlined
      </Button>
      <Button size="base" color="secondary" outlined onClick={onClick}>
        Secondary base outlined
      </Button>
      <Button size="lg" color="secondary" outlined onClick={onClick}>
        Secondary large outlined
      </Button>
    </div>
    <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
      <Button size="sm" color="success" onClick={onClick}>
        Success small
      </Button>
      <Button size="base" color="success" onClick={onClick}>
        Success base
      </Button>
      <Button size="lg" color="success" onClick={onClick}>
        Success large
      </Button>
      <Button size="sm" color="success" outlined onClick={onClick}>
        Success small outlined
      </Button>
      <Button size="base" color="success" outlined onClick={onClick}>
        Success base outlined
      </Button>
      <Button size="lg" color="success" outlined onClick={onClick}>
        Success large outlined
      </Button>
    </div>
    <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
      <Button size="sm" color="info" onClick={onClick}>
        Info small
      </Button>
      <Button size="base" color="info" onClick={onClick}>
        Info base
      </Button>
      <Button size="lg" color="info" onClick={onClick}>
        Info large
      </Button>
      <Button size="sm" color="info" outlined onClick={onClick}>
        Info small outlined
      </Button>
      <Button size="base" color="info" outlined onClick={onClick}>
        Info base outlined
      </Button>
      <Button size="lg" color="info" outlined onClick={onClick}>
        Info large outlined
      </Button>
    </div>
    <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
      <Button size="sm" color="warning" onClick={onClick}>
        Warning small
      </Button>
      <Button size="base" color="warning" onClick={onClick}>
        Warning base
      </Button>
      <Button size="lg" color="warning" onClick={onClick}>
        Warning large
      </Button>
      <Button size="sm" color="warning" outlined onClick={onClick}>
        Warning small outlined
      </Button>
      <Button size="base" color="warning" outlined onClick={onClick}>
        Warning base outlined
      </Button>
      <Button size="lg" color="warning" outlined onClick={onClick}>
        Warning large outlined
      </Button>
    </div>
    <div style={{ display: "flex", gap: 8, padding: "1rem 0" }}>
      <Button size="sm" color="danger" onClick={onClick}>
        Danger small
      </Button>
      <Button size="base" color="danger" onClick={onClick}>
        Danger base
      </Button>
      <Button size="lg" color="danger" onClick={onClick}>
        Danger large
      </Button>
      <Button size="sm" color="danger" outlined onClick={onClick}>
        Danger small outlined
      </Button>
      <Button size="base" color="danger" outlined onClick={onClick}>
        Danger base outlined
      </Button>
      <Button size="lg" color="danger" outlined onClick={onClick}>
        Danger large outlined
      </Button>
    </div>
  </>
);

export const BasePrimary: Story = {
  args: {
    children: "Base primary",
    size: "base",
    color: "primary",
    onClick,
  },
};

export const BaseSecondary: Story = {
  args: {
    children: "Base secondary",
    size: "base",
    color: "secondary",
    onClick,
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    size: "base",
    color: "success",
    onClick,
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    size: "base",
    color: "info",
    onClick,
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    size: "base",
    color: "warning",
    onClick,
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    size: "base",
    color: "danger",
    onClick,
  },
};

export const PrimaryBaseOutlined: Story = {
  args: {
    children: "Primary outlined",
    size: "base",
    color: "primary",
    outlined: true,
    onClick,
  },
};

export const SecondarySmallOutlined: Story = {
  args: {
    children: "Secondary small outlined",
    size: "sm",
    color: "secondary",
    outlined: true,
    onClick,
  },
};

export const SmallSecondary: Story = {
  args: {
    children: "Small secondary",
    size: "sm",
    color: "secondary",
    onClick,
  },
};

export const LargePrimary: Story = {
  args: {
    children: "Large primary",
    size: "lg",
    color: "primary",
    onClick,
  },
};
