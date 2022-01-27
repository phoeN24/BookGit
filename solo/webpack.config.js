const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:{
    rules: [
      {
        test: /\.?js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },

      },
      {
        test: /\.css$/i,
        use:["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
    }),
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
  }
};