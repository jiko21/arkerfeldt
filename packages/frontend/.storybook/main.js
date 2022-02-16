const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': path.join(process.cwd(), 'node_modules/@emotion/react'),
          '@emotion/styled': path.join(process.cwd(), 'node_modules/@emotion/styled'),
          'emotion-theming': path.join(process.cwd(), 'node_modules/@emotion/react'),
          '@': path.join(process.cwd(), 'src'),
        }
      }
    }
  }
}
