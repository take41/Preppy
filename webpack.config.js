// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
      publicPath: '/build/',  
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s?css/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  devServer: {
      //bundle.js is in memory
    port: 8080,
    publicPath: "/build",
    proxy: {
        '/api': 'http://localhost:3000'
    },
    hot: true,
  },
};
