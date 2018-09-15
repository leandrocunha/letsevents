const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'file-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lets Events',
      template: 'src/templates/index.html',
    }),
    new ImageMinPlugin({
      externalImages: {
        context: 'src',
        sources: glob.sync('src/images/**/*'),
        destination: 'dist',
      },
    }),
  ],
};
