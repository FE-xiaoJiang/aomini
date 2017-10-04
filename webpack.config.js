
var baseConfig = require('./webpack/webpack.product.js');

module.exports = (env) => {
	return baseConfig({
		entry:{
			index:"./examples/m2ms/index.js"
		}
		,htmls:[{
					template:"./examples/m2ms/index.html"
					,chunks:["index"]
					,filename:"index.html"
				}]
		,relative:"../"
		,env:env
	})
}
