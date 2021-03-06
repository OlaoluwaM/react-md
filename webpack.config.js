const path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    rules: [{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'output.js',
  },
  mode: 'development',
};
