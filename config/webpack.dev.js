const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        index: 'czxt.html',
        compress: true,
        hot: true,
        host: '127.0.0.1',
        port: 8090,
        // proxy: {
        //     '/czxt/*': {
        //         // target: 'http://rap2api.taobao.org/app/mock/18550',
        //         // target: 'http://134.96.245.118:7001/',
        //         target: 'http://localhost:3000/',
        //         changeOrigin: true,
        //         secure: false,
        //     }
        // }
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});