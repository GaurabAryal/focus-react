let path = require('path');
let srcPath = path.join(__dirname, 'src');
let buildPath = path.join(__dirname, 'dist');
let webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
          },
          {
            loader: 'file-loader'
          },
          {
            loader: 'url-loader'
          }
      ]
  },
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
],
};
