const merge = require('webpack-merge')
const common = require('./webpack.common.js')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // new UglifyJSPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[chunkhash:8][name].style.css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.style\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: 'bundle_analyzer_report.html'
    })
  ]

})
