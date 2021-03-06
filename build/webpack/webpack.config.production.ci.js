/*
  Configures webpack to build only assets required
  for integration environments, in production mode.
*/

const webpack = require('webpack');
const merge = require('webpack-merge');

const { source, sourceAll } = require('../lib/path-helpers');
const productionWorkflow = require('./workflow/production');

const { entries } = require(source('fc-config')); // eslint-disable-line


// remove the styleguide dll references
const modify = (config) => {
  config.plugins = config.plugins.slice(1);
  return config;
};


module.exports = modify(merge(productionWorkflow, {
  entry: sourceAll(entries.ci),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.CI_MODE': true
    })
  ]
}));
