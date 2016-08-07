/**
 * Imports
 */
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}
const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
})

/**
 * Plugins
 */
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.html'),
  filename: 'index.html',
  inject: 'body',
})

/**
 * Config
 */

const base = {
  entry: [
    PATHS.app, // the javascript entry point
  ],
  // the directory/filename the bundle is built to
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]' },
    ],
  },
  resolve: {
    root: path.resolve('./app'), // allows just "containers" instead of "../containers"
  },
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [ HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin() ],
}

const productionConfig = {
  devtool: 'cheap-module-inline-source-map',
  plugins: [ HtmlWebpackPluginConfig, productionPlugin ],
}

export default Object.assign(
  {},
  base,
  isProduction === true ? productionConfig : developmentConfig
)
