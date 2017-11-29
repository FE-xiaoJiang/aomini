var path = require("path"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	webpack = require("webpack"),
	Clean = require('clean-webpack-plugin');
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	preplugins = [];
const resolve = require('./resolve');

const BUILD = 'build',
	  DEV = 'dev';
module.exports = (config)=>{
	let env = config.env;
	let outputDir = +env.production ? BUILD : DEV;
	+env.production ? preplugins.push(new Clean([BUILD],{
                        root:path.join(__dirname,config.relative)
                      })):"";
	+env.production ? preplugins.push(new webpack.optimize.UglifyJsPlugin({
				        minimize: true,
				        compress: {
				          warnings: false,
				          // drop_console: true
				        },
				        output: {
				          comments: false
				        }
				    })):"";
	let htmls = (config.htmls || []).map((item)=>htmlHelper(item));
	return {
		entry:Object.assign({
			index:'index.js'
		},config.entry)
		,output:Object.assign({
					filename:+env.production ? '[name].[hash].js' : '[name].js',
					path:path.resolve(__dirname,config.relative,outputDir)
				},config.output)
		,resolve:Object.assign(resolve,config.resolve)
		,module:{
			rules:[{
				test:/\.css$/,
				exclude:/(node_modules)/,
				use:ExtractTextPlugin.extract({
	                use: 'css-loader'
	            })
			}
			,{
				test:/\.less$/,
				exclude:/(node_modules)/,
				use: ExtractTextPlugin.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "less-loader"
	                }],
	                // use style-loader in development
	                fallback: "style-loader"
	            })
			}
			,{
				test:/\.js$/,
				exclude:/(node_modules)/,
				loader: 'babel-loader'
			}]
		}
		,devServer:{
			contentBase:outputDir,
			port:8080
		}
		,devtool:+env.production?'cheap-source-map':'source-map'
		,plugins:preplugins.concat([
				    new ExtractTextPlugin(+env.production?'[name].[contenthash:8].css':'[name].css',{
						allChunks:true
					})
					// ,new HtmlWebpackPlugin({
					// 	template:config.template,
					// 	filename:config.filename,
					// 	chunks:[config.chunks]
					// })
				].concat(htmls))

	}
}

let htmlHelper = (htmlConfig)=>{
	return new HtmlWebpackPlugin({
		template:htmlConfig.template
		,filename:htmlConfig.filename
		,chunks:htmlConfig.chunks
		,inject:htmlConfig.inject || "body"
	})
}