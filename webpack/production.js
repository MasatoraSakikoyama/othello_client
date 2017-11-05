var webpack = require('webpack');

module.exports = {
  plugins: [
　　new webpack.DefinePlugin({
　　　'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
　　}),
    new webpack.ProvidePlugin({
        //$: "jquery",
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
    }),
  ],
};
