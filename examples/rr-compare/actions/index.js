let actions = [
	{
		type:"update_action",
		text:"更新模块次数"
	},
	{
		type:"setModuleQuantity_action",
		text:"设置模块个数"
	}
]

let actionCreators = {};

actions.map((item)=>{
	actionCreators[item.type] = (data)=>{
		return Object.assign({},item,{
			data:data
		})
	}
})

export default actionCreators;