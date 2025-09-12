// @ts-check

import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import sass from "rollup-plugin-sass";
import svg from "rollup-plugin-svg-import";
import ts from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

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
    svg({
      stringify: true,
    }),
    resolve(),
    ts({
      declaration: true,
      declarationDir: "lib",
      exclude: ["lib/**/*", "**/*.stories.ts", "**/*.stories.d.ts"],
      noEmitOnError: true,
    }),
    sass({
      api: "modern",
      options: {
        style: "compressed",
      },
      exclude: ["./src/sass/preflight.scss"],
      output: "lib/index.min.css",
    }),
    sass({
      api: "modern",
      options: {
        style: "compressed",
      },
      include: ["./src/sass/preflight.scss"],
      output: "lib/reset.min.css",
    }),
    cjs(),
  ],
});
