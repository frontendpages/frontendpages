import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";
import tanstack from "ultracite/oxlint/tanstack";
import tanstackJsPlugins from "ultracite/oxlint/tanstack/js-plugins";

const jsPlugins = selectJsPlugins(["react-doctor"]);

const ignoreVarlock = ["**/env.ts", "**/env.d.ts"];

export default defineConfig({
  ignorePatterns: [...(core.ignorePatterns ?? []), ...ignoreVarlock],
  extends: [
    core,
    react,
    tanstack,
    next,
    nextJsPlugins,
    tanstackJsPlugins,
    // shadcn,
    jsPlugins,
  ],
  jsPlugins: [...(jsPlugins.jsPlugins ?? []), ...(shadcn.jsPlugins ?? [])],
  settings: jsPluginSettings,
  rules: {
    "func-style": "off",
    "sort-keys": "off",
    "react/function-component-definition": "allow",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        variables: false,
        classes: true,
        allowNamedExports: false,
      },
    ],
  },
});
