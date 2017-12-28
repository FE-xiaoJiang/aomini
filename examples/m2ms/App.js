import React from 'react';
import Module1 from './Module1';
import Module2 from './Module2';
import ModuleX from './ModuleX';
import connect from '../../modules/connect';

/**
* 入口组件
*/
class App extends React.Component{
	constructor(){
		super();
		this.name = "App";
		// store.bindContext(this);
	}
	render(){
		let { removeModule1 } = this.props;
		return (
			<div>
				{removeModule1?"":<Module1 />}
				<Module2 />
				<ModuleX />
			</div>
			)
	}
}
let AppHoC = connect(App,function(state){
	return {
		removeModule1:state.removeModule1
	}
});

export default AppHoC;