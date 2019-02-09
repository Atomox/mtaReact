var webpack = require('webpack');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
//	mode: 'production',
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.svg$/,
				loader: 'raw-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new webpack.DefinePlugin(
			{
				'process.env.NODE_ENV': JSON.stringify("production")
			}
		)],
	devtool: 'cheap-module-eval-source-map',
};
