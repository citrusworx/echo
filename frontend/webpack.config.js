const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: "echo.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
			test: /\.(ts|tsx)$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
				}
			},
			exclude: /node_modules/,
			},
			{
			test: /\.css$/,
			use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
		
		}),
	],
	devServer: {
		historyApiFallback: true,
		port: 2009,
	},
};
