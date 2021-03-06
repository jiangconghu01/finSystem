const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
console.log(process.env)
const config = {
  entry: {
    czxt: ['babel-polyfill', './src/index.js'],
    log: ['./src/log.js']
    // echarts: 'echarts',
    // vue: 'vue',
    // axios: 'axios'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
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
        echarts: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          name: 'echarts',
          enforce: true
        },
        vue: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]vue[\\/]/,
          name: 'vue',
          enforce: true
        },
        axios: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]axios[\\/]/,
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
      chunk: ['czxt', 'echarts', 'vue', 'axios'],
      excludeChunks: ['log'],
      minify: {
        collapseWhitespace: false
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'log',
      filename: 'log.html',
      template: 'template/log.html',
      chunk: ['log', 'vue'],
      excludeChunks: ['czxt', 'axios', 'echarts'],
      minify: {
        collapseWhitespace: false
      },
      hash: true
    })
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
          plugins: ['transform-runtime', 'transform-object-rest-spread']
        }
      }
    },

    {
      test: /\.scss$/,
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
          // options: {
          //     modules: true,
          //     localIdentName: '[name]-[local]-[hash:base64:8]'
          // }
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
      // include: path.join(__dirname, 'src'),
      // exclude: /node_modules/
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: 'resources/[name].[hash:8].[ext]'
        }
      }]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: 'resources/[name].[hash:8].[ext]'
        }
      }]
    }
    ]
  }
}
if (!isDev) {
  config.output['publicPath'] = '/czxt/dist/'
}; // 生产环境对应的路径前缀
module.exports = config
