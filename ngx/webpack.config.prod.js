var webpack = require('webpack');
var CleanWebpackPlugin = require("clean-webpack-plugin");

var path = require('path');
var dist = path.resolve(__dirname, "dist");

module.exports = {

	output: {
		filename: "static/js/[name].[hash:6].prod.min.js",
		path: dist
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
						"awesome-typescript-loader",
						"angular2-template-loader",
						"angular-router-loader?aot=true&genDir=gen/aot"
				]
			}
		]
	},

	plugins: [

		new webpack.NoEmitOnErrorsPlugin(),

		// defines the sequence for script injection
		new webpack.optimize.CommonsChunkPlugin(
			{
					name: ["app", "vendor", "polyfills"]
			}
		),

		new CleanWebpackPlugin(
			[
				"./static",
				"./*",
			],
			{
				root: dist,
				verbose: true
			}
		),

		new webpack.optimize.UglifyJsPlugin(
			{
				compress: {
					warnings: false
				},
				output: {
					comments: false
				},
				sourceMap: {
					warnings: false
				}
			}
		),
	]
}