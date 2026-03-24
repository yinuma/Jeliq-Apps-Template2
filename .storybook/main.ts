import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  staticDirs: ["../public"],

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  // Use a separate Vite config that excludes the React Router plugin
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: ".storybook/vite.config.ts",
      },
    },
  },
};

export default config;
