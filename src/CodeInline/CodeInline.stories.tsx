import type { Meta, StoryObj } from "@storybook/react-vite";

import CodeInline from "./";

const meta = {
  title: "Molecules/CodeInline",
  component: CodeInline,
  argTypes: {
    code: { control: "text" },
  },
  render: (props) => (
    <div style={{ gap: "2em", display: "flex", flexDirection: "column" }}>
      <p>
        Here is a sample you can copy: <CodeInline {...props} />
      </p>
      <p>
        Here is a sample you can copy <CodeInline {...props} /> except it's in
        the middle.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate{" "}
        <CodeInline {...props} /> velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <ul>
        <li>
          Set Frizzle to <CodeInline {...props} />
        </li>
        <li>
          Set Frizzle to <CodeInline {...props} /> but in the middle
        </li>
      </ul>
    </div>
  ),
} satisfies Meta<typeof CodeInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NixFlakeCheck: Story = {
  args: {
    code: "nix flake check .#",
  },
};

export const OktaOIDCUrl: Story = {
  args: {
    code: "https://api.flakehub.com/login/okta?tenant=YOURDOMAIN.okta.com",
  },
};
