const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
	mode: "production",
	entry: "./src/index.tsx",
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "js/[name].[fullhash:8].js",
	},
	devServer: {
		port: 8080,
		open: false,
		hot: true,
		static: {
			directory: path.join(),
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/,
				exclude: /\.module\.less$/,
				use: [
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							sourceMap: false,
						},
					},
					{
						loader: "less-loader",
						options: {
							sourceMap: false,
						},
					},
				],
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							sourceMap: false,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false,
						},
					},
				],
			},
			{
				test: /\.png/,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/src/index.html"),
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin({ openAnalyzer: false }),
		new ForkTsCheckerWebpackPlugin(),
		new ESLintPlugin(),
	],
}
