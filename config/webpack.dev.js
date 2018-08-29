const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        index: 'czxt.html',
        compress: true,
        hot: true,
        host: '127.0.0.1',
        port: 8090
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});