const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src')
const OUT_DIR = path.resolve(__dirname, 'public')
// const CSS_DIR = path.join(__dirname, 'client', 'src', 'components', 'css')

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: OUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      {
      test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.tff$/,
        use: ["url-loader", "file-loader"]
      }
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};