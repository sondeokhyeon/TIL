const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  entry: {
    app: {
      import: "./src/index",
    },
  },
  cache: false,
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".mjs"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remote.js",
      exposes: {
        "./Button": "./src/Button",
      },
      shared: {
        react: {
          singleton: true,
          version: "0",
          requiredVersion: false,
        },
        "react-dom": {
          requiredVersion: false,
          singleton: true,
          version: "0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
