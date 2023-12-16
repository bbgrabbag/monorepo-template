import config from '@repo/storybook/config'

export default {
  ...config,
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};