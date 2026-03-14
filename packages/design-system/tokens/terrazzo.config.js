import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import js from "@terrazzo/plugin-js";
import tailwind from "@terrazzo/plugin-tailwind";

export default defineConfig({
  tokens: [
    "./src/primitives/colors.json",
    "./src/semantics/colors.json",
    "./src/semantics/easings.json",
    "./src/semantics/typography.json",
  ],
  outDir: "./dist/",
  plugins: [
    css({
      skipBuild: true,
      legacyHex: true,
    }),
    js({ js: true }),
    tailwind({
      filename: "tailwind.css",
      theme: {
        /** @see https://terrazzo.app/docs/cli/integrations/tailwind/#theme */

        color: ["color.*"],
        font: ["typography.font-family.*"],
        ease: ["ease.*"],
      },
      modeVariants: [{ variant: "dark", mode: "dark" }],
    }),
  ],
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  },
});
