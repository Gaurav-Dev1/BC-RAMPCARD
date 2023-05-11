const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devServer: {
    port: 5000,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev'),
    }),
  ],
}
