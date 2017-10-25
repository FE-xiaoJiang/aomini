
var baseConfig = require('./webpack/webpack.product.js');

module.exports = (env) => {
	return baseConfig({
		entry:{
			index:"./examples/m2ms/index.js",
			reactCompareIndex:'./examples/react-compare/index.js',
			rrCompareIndex:'./examples/rr-compare/index.js'
		}
		,htmls:[{
					template:"./examples/m2ms/index.html"
					,chunks:["index"]
					,filename:"index.html"
				},{
					template:"./examples/react-compare/index.html"
					,chunks:["reactCompareIndex"]
					,filename:"reactCompareIndex.html"
				},{
					template:"./examples/rr-compare/index.html"
					,chunks:["rrCompareIndex"]
					,filename:"rrCompareIndex.html"
				}]
		,relative:"../"
		,env:env
	})
}
