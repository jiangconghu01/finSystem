const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
console.log(process.env.NODE_ENV);
module.exports = {
    // context: path.resolve(__dirname, '../src'), // webpack查找相对路径文件时候会以该路径为基础路径
    entry: {
        jquery: 'jquery',
        echarts: 'echarts',
        axios: 'axios',
        vue: 'vue',
        czxt: ['babel-polyfill', './index.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // publicPath: '/'  //生产环境对应的路径前缀
    },
    resolve: {
        extensions: [
            '.js', '.vue', '.json'
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                lib1: {
                    chunks: 'all',
                    name: 'jquery',
                    enforce: true
                },
                lib2: {
                    chunks: 'all',
                    name: 'echarts',
                    enforce: true
                },
                lib3: {
                    chunks: 'all',
                    name: 'vue',
                    enforce: true
                },
                lib4: {
                    chunks: 'all',
                    name: 'axios',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'czxt.html',
            template: 'template/index.html',
            chunk: ['vue', 'axios', 'czxt'],
            excludeChunks: ['jquery', 'echarts'],
            minify: {
                collapseWhitespace: false
            },
            hash: true
        }),
    ],
    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },

            {
                test: /\.scss$/,
                use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:8]'
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};