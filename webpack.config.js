const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
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
      title: "development",
      template: path.join(__dirname,'./src/index.html'),
    }),
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    static: {
      publicPath: '/dist',
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    hot: true,
  }
};