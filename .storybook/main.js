module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-mock",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.watchOptions = {
      aggregateTimeout: 200,
      poll: 1000,
    };
    return config;
  },
  typescript: { reactDocgen: "none" },
  env: (config) => ({
    ...config,
    apiBaseUrl: "http://warm-basin-81949.herokuapp.com/api",
  }),
};
