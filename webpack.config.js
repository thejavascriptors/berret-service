const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};