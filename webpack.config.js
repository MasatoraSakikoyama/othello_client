var path = require('path');
var webpack = require('webpack');

var config = require('./webpack/' + process.env.NODE_ENV);

module.exports = Object.assign(config, {
  entry: './src/index.js',
  output: {
    filename: 'reversi.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /mode_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            failOnError: true,
          },
        }],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }],
      },
      {
        test: /(index|404|500)\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
      },
    ],
  },
});
