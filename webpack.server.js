const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  target: "node",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "server.js"
  },
  resolve: {
    alias: {
      "@app": "src/app",
      "@infra": "src/infra",
      "@config": "src/config",
      "@utils": "src/utils",
      "@src": "src",
      "@test": "test" 
    },
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "public"),
          to: resolve(__dirname, "dist/public")
        },
        {
          from: resolve(__dirname, "views"),
          to: resolve(__dirname, "dist/views")
        }
      ]
    })
  ]
}
