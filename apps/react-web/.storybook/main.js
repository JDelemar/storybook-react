// const path = require('path');

const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],

  staticDirs: [
    {
      from: '../src/assets',
      to: '/assets',
    },
  ],

  // attempt to fix stories.json not found 404 error
  // see https://github.com/storybookjs/storybook/discussions/12336
  features: {
    buildStoriesJson: true,
  },

  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed
    
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    return config;
  },
};
