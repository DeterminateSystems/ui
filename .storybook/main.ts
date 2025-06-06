import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;