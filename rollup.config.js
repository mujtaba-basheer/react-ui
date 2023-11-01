import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import { visualizer } from "rollup-plugin-visualizer";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import scss from "rollup-plugin-sass";
import css from "rollup-plugin-import-css";
// import customPlugin from "./plugin.js";

const components = [{ name: "index", entry: "src/lib.tsx" }];

function createComponentConfig(component) {
  return {
    input: component.entry,
    output: [
      // {
      //   file: `dist/${component.name.toLowerCase()}.cjs`,
      //   format: 'cjs',
      //   sourcemap: true
      // },
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    ],
    plugins: [
      // customPlugin(),
      typescript(),
      peerDepsExternal(),
      json(),
      resolve({
        moduleDirectories: ["node_modules"],
        extensions: [".mjs", ".js", ".json", ".node", ".css"],
      }),
      commonjs(),
      postcss({
        extensions: [".scss", ".css"],
        plugins: [postcssImport()],
        // inject: true,
        extract: !true,
        minimize: true,
      }),
      // // scss(),
      terser(),
      // visualizer({
      //   // open: true,
      // }),
    ],
    external: [
      "react",
      "react-dom",
      // /^(!swiper)\.css$/,
      // /\.scss$/,
      // ""
    ],
  };
}

const rollupConfigs = components.map(createComponentConfig);

// rollupConfigs.push({
//   input: "dist/lib.d.ts",
//   output: [{ file: "dist/index.d.ts", format: "cjs" }],
//   plugins: [dts()],
//   external: (name) => {
//     if (name.includes("swiper") || name.endsWith("ss")) console.log({ name });
//     if (name.startsWith("swiper/css")) return false;
//     return name.endsWith(".css") || name.endsWith(".scss");
//   },
// });

export default rollupConfigs;
