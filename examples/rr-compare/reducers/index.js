// import {combineReducers} from 'redux';

module.exports = function(state,action){
	switch(action.type){
		case 'update_action':{
			console.log(action.data)
			return Object.assign({},state,{
						updateCount:action.data || 1
					});
		}
		case 'setModuleQuantity_action':{
			console.log("**************",action.data)
			return Object.assign({},state,{
						moduleQuantity:action.data
					})
		}
		default:
			return {};
	}
}