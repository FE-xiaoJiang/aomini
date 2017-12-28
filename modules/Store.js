import React from 'react';

/**
* 统一状态管理对象
*/
let store = {
	//目标组件对象
	contexts:[],
	//state数据
	state:{
		m1Var:"111",
		updateCount:1
	},
	listeners:[],
	//注册绑定组件与状态数据，用于setState
	bindContext(_context){
		this.contexts.push(_context);
		return this.state;
	},
	unbindContext(_context){
		for(let i = 0; i < this.contexts.length; i++){
			if(this.contexts[i] === _context){
				this.contexts[i] = null;
				// console.log(_context);
			}
		}
	},
	subscribe(fn){

	},
	dispatch(){

	},
	setState(_state){
		this.state = Object.assign({},this.state,_state);
		var context;
		for(let i = 0; i < this.contexts.length; i++){
			context = this.contexts[i];
			if(context && context.mapStateToProps){
				React.Component.prototype.setState.call(context,this.state);
			}
		}
	},
	getState(){
		return this.state;
	}
}

export default store;