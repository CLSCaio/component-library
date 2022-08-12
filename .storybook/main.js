const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  framework: '@storybook/react',
  features: {
    postcss: false,
  },
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
}
