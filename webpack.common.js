/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new WebpackPwaManifest({
      name: 'RestoMantap',
      short_name: 'RestoMantap',
      description: 'RestoMantap adalah website yang memberikan informasi mengenai berbagai macam restoran yang pastinya mantap',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#000000',
      theme_color: '#D83A56',
      crossorigin: 'use-credentials',
      icons: [{
        src: path.resolve('src/public/logo/logo.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        purpose: 'maskable',
      }],
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/'),
      }],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
