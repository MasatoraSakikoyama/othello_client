var path = require('path');
var webpack = require('webpack');

module.exports = {
  plugins: [
　　new webpack.DefinePlugin({
　　　'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
　　}),
    new webpack.ProvidePlugin({
        //$: "jquery",
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname.replace('webpack', ''), 'dist'),
    compress: true,
    index: 'dist/index.html',
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: true,
  },
};
