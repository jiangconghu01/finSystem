const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const config = {
  entry: {
    czxt: ['babel-polyfill', './src/index.js'],
    ennergy: ['babel-polyfill', './src/eneryAnalysis.js']
    // echarts: 'echarts',
    // vue: 'vue',
    // axios: 'axios'
  },
  output: {
    filename: isDev ? 'js/[name].bundle.js' : 'js/[chunkhash:8].[name].bundle.js',
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
    runtimeChunk: {
      'name': 'manifest'
    },
    // splitChunks: {
    //   cacheGroups: {
    //     default: false,
    //     vendors: false,
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'initial',
    //       enforce: true,
    //       priority: 10,
    //       name: 'vendor'
    //     },
    //     common: {
    //       chunks: 'all',
    //       minChunks: 2,
    //       name: 'common',
    //       enforce: true,
    //       priority: 5
    //     }
    //   }
    // }

    splitChunks: {
      maxInitialRequests: 8,
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
        },
        element: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          name: 'element-ui',
          enforce: true
        },
        iview: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]iview[\\/]/,
          name: 'element-ui',
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
      chunks: ['czxt', 'manifest', 'echarts', 'vue', 'axios', 'element-ui'],
      // excludeChunks: ['log'],
      minify: {
        collapseWhitespace: false
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      title: 'ennergy',
      filename: 'ennergyanalysis.html',
      template: 'template/energyAnalysis.html',
      chunks: ['ennergy', 'manifest', 'echarts', 'vue', 'axios', 'iview'],
      // excludeChunks: ['czxt', 'axios', 'echarts'],
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
      include: path.resolve(__dirname, '../src/energycomponents'),
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]-[local]-[hash:base64:8]'
          }
        },
        'postcss-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/css/energyanalysis.scss')
            ]
          }

        }
      ]
    },
    {
      test: /\.scss$/,
      exclude: path.resolve(__dirname, '../src/energycomponents'),
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
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
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024 * 8, // 8k一下的图片转为bs64编码
          name: 'resources/[name].[hash:8].[ext]'
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
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
