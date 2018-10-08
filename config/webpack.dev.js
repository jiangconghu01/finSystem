const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    index: 'czxt.html',
    compress: true,
    hot: true,
    host: '0.0.0.0',
    // port: 9000,
    port: 7001,
    proxy: {

      '/czxt_war/*': {
        // target: 'http://134.96.245.118:7001',
        target: 'http://134.96.188.185:9000',
        // changeOrigin: true,
        secure: false
        // auth: 'admin': '1q2w3e4r'
      }
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
