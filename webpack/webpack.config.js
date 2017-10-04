
var path = require('path');





module.exports = (config)=>{
	//js目录
	//


	return {
		entry:Object.assign({
			index:"index.js"
		},config.entry),
		output:{
			filename:'[name].[hash].js',
			path:path.resolve(__dirname,config.relative,'build'),
			chunkFilename:[name].[hash].chunk.js
		},
		plugins:[
			
		]
	};
};