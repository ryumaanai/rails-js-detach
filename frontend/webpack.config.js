const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('../public/assets'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            publocPath: 'assets/images',
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackManifestPlugin()
  ],
  target: ['web', 'es5'],
  devServer: {}
};