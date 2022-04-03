const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],

  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        angular: {
          title: 'Angular Storybook (development)',
          url: 'http://localhost:6007',
        },
        react: {
          title: 'React Storybook (development)',
          url: 'http://localhost:6008',
        },
      };
    } else {
      return {
        angular: {
          title: 'Angular Storybook',
          url: 'https://jdelemar.github.io/component-monorepo',
        },
        react: {
          title: 'React Storybook',
          url: 'https://jdelemar.github.io/storybook-react',
        },
      };
    }
  },

  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
