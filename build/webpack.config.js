const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../', 'dist')
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		},
        extensions: ['.js', '.vue', '.json'],
    },
    devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /iframe\.html$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
    	new VueLoaderPlugin(),
    	new HtmlWebpackPlugin({
    		template: path.resolve(__dirname, 'template.html')
    	})
    ]
};