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
        host: '0.0.0.0',
        port: 8090,
        proxy: {

            '/czxt/*': {
                //target: 'http://134.98.100.73:9090',
                target: 'http://134.96.188.185:9000',
                //changeOrigin: true,
                secure: false,
                // auth: 'admin': '1q2w3e4r'
            }
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});