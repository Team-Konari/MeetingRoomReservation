const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: 'CracoAlias',
      options: {
        source: 'jsconfig',
        jsConfigPath: 'jsconfig.paths.json',
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
