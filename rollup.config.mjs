// @ts-check

import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import ts from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import sass from "rollup-plugin-sass";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  jsx: {
    mode: "automatic",
  },
  external: [/node_modules\/react\//],
  plugins: [
    resolve(),
    ts({
      declaration: true,
      declarationDir: "lib",
      exclude: ["**/*.stories.ts", "**/*.stories.d.ts"],
    }),
    sass({
      api: "modern",
      options: {
        style: "compressed",
      },
      output: "lib/index.min.css",
    }),
    cjs(),
  ],
});
