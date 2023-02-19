import typescript from "rollup-plugin-typescript2";
import { builtinModules } from "module";
import glob from "glob";
import cleanup from "rollup-plugin-cleanup";
import prettier from "rollup-plugin-prettier";

import packageJson from "./package.json" assert { type: "json" };
import prettierConfig from "./.prettierrc.json" assert { type: "json" };

/** @type {import('rollup').RollupOptions} */
const config = {
  input: [...glob.sync("./src/index.ts")],
  external: [
    ...builtinModules,
    ...Object.keys({ ...packageJson.devDependencies, ...packageJson.dependencies })
  ],
  output: [
    {
      dir: "./dist",
      format: "commonjs",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].js",
      compact: true,
      generatedCode: {
        constBindings: true,
        arrowFunctions: true,
        objectShorthand: true
      },
      externalLiveBindings: false,
      minifyInternalExports: true
    },
    {
      dir: "./dist",
      format: "module",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].mjs",
      compact: true,
      generatedCode: {
        constBindings: true,
        arrowFunctions: true,
        objectShorthand: true
      },
      externalLiveBindings: false,
      minifyInternalExports: true
    }
  ],
  treeshake: {
    unknownGlobalSideEffects: false,
    moduleSideEffects: false,
    correctVarValueBeforeDeclaration: false,
    preset: "smallest",
    annotations: false,
    propertyReadSideEffects: false
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    cleanup({
      extensions: ["js", "ts", "mjs"],
      comments: ["jsdoc"],
      compactComments: true
    }),
    prettier({
      ...prettierConfig,
      parser: "babel-ts"
    })
  ]
};

export default config;
