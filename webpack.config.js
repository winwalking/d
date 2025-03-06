const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: production ? "production" : "development",
  devtool: production ? "hidden-source-map" : "eval",
  entry: "./src/routes/index.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: production ? "bundle.[contenthash].js" : "bundle.js",
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@scss": path.resolve(__dirname, "./src/assets/scss"),
      assets: path.resolve(__dirname, "./src/assets"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".jpg", ".png", ".svg"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: production
          ? {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }],
                  "@babel/preset-typescript",
                ],
              },
            }
          : "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|webm|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "media",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.svg$/,
        issuer: /\.(css|scss)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "media",
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./src/routes/index.html",
    }),
    new CleanWebpackPlugin(), // 빌드 폴더 정리
    production &&
      new MiniCssExtractPlugin({
        filename: "styles.[contenthash].css",
      }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      ),
    }),
    !production && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: production,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(), // CSS 파일 최적화
    ],
  },
  devServer: {
    port: 84,
    historyApiFallback: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://127.0.0.1:8000", // API 서버 경로
        changeOrigin: true,
      },
    ],
  },
};
