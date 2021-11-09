/* eslint-disable import/no-extraneous-dependencies  */

const path = require('path')
const webpack = require('webpack')
const packageJson = require('./package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: 'production',
  stats: { colors: true },
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devtool: false,
  watch: false,
  watchOptions: { ignored: '/node_modules' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              '@babel/plugin-proposal-do-expressions',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-function-bind',
              '@babel/plugin-proposal-function-sent',
              '@babel/plugin-proposal-json-strings',
              '@babel/plugin-proposal-logical-assignment-operators',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-optional-chaining',
              ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
              '@babel/plugin-proposal-throw-expressions',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: /fonts/,
        exclude: /images/,
        use: {
          loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        include: /images/,
        exclude: /fonts/,
        use: {
          loader: 'url-loader?limit=100000&name=images/[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      app: path.resolve(__dirname, './src/app'),
      actions: path.resolve(__dirname, './src/actions'),
      configurations: path.resolve(__dirname, './src/configurations'),
      constants: path.resolve(__dirname, './src/constants'),
      reducers: path.resolve(__dirname, './src/reducers'),
      sagas: path.resolve(__dirname, './src/sagas'),
      utils: path.resolve(__dirname, './src/utils'),
      style: path.resolve(__dirname, './style')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({ VERSION: JSON.stringify(packageJson.version) }),
    new CopyWebpackPlugin({ patterns: [{ from: 'src/index.html' }] }),
    new MiniCssExtractPlugin({ filename: 'styles.css' })
  ]
}
