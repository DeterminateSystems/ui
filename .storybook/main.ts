import type { StorybookConfig } from "@storybook/react-vite";
import type { InlineConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    // "@whitespace/storybook-addon-html", // 7.0.0 (current as of 2025-08-06) is incompatible with storyboox 9.x
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig<InlineConfig, InlineConfig>(config, {
      server: {
        watch: {
          ignored: ["**/.direnv/**/*", "**/.jj/**/*", "**/node_modules/**/*"],
        },
      },
    });
  },
  core: {
    builder: "@storybook/builder-vite",
  },
};

export default config;
