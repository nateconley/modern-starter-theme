const browserSync          = require('browser-sync').create();
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig        = require('./webpack.config');
const bundler              = webpack(webpackConfig);

browserSync.init({

	proxy: {
		target:  'http://sandbox.dev',
		middleware: [
			webpackDevMiddleware(bundler, {
				stats: { colors: true },
			}),
			webpackHotMiddleware(bundler),
		],
	},

	files: [
		'**/*.php',
	],

});
