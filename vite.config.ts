import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "."),
      log4js: path.resolve(import.meta.dirname, "app/lib/log4js-stub.ts"),
    },
  },
  define: {
    "process.env": JSON.stringify({
      VITE_API_ENDPOINT: process.env.VITE_API_ENDPOINT ?? "http://localhost:6001",
    }),
  },
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    ignorePatterns: [
      "dist/**",
      "build/**",
      "storybook-static/**",
      "public/**",
      ".storybook/**",
      ".react-router/**",
    ],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-useless-escape": "off",
      "no-empty": "off",
      "no-cond-assign": "off",
      "no-extra-boolean-cast": "off",
      "no-fallthrough": "off",
      "no-sparse-arrays": "off",
      "no-unreachable": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "unicorn/no-useless-fallback-in-spread": "off",
      "unicorn/no-empty-file": "off",
      "@typescript-eslint/no-floating-promises": "off",
    },
    options: { typeAware: true, typeCheck: true },
  },
});
