import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: true,
      },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
};

export default config;
