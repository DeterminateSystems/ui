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
    sourcemap: "inline",
  },
  jsx: {
    mode: "automatic",
  },
  external: [/node_modules/],
  plugins: [
    resolve(),
    ts({
      declaration: true,
      declarationDir: 'lib',
      exclude: ['**/*.stories.ts', '**/*.stories.d.ts']
    }),
    sass({
      output: "lib/index.css",
      api: "modern",
    }),
    cjs(),
  ],
});
