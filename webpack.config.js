const inProduction = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCss = () => {
	if (inProduction) {
		return ExtractTextPlugin.extract({
			use: [
				{
					loader: 'css-loader',
					options: {
						minimize: true,
					}
				},
				{
					loader: 'sass-loader',
				},
			]
		});
	}
	return ['style-loader', 'css-loader', 'sass-loader'];
}

module.exports = {
	mode: inProduction ? 'production' : 'development',
	entry: {
		load: ['./src/load'],
		defer: ['./src/defer'],
	},
	module: {
		rules: [
			{
				test: /\.s?(c|a)ss$/,
				use: extractCss(),
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
						},
					}
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin('styles.css'),
	],
	externals: [
		{
			jquery: 'window.jQuery',
		},
	],
}

if (!inProduction) {
	module.exports.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	);
	module.exports.entry.load.push(
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client?reload=true'
	);
}
