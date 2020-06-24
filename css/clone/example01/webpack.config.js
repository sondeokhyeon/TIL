const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "style", "scss", "style.scss"),
  output: {
    path: path.resolve(__dirname, "style", "css"),
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
