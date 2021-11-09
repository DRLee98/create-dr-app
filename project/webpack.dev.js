/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
      filename: 'index.html'
    })
  ]
});
