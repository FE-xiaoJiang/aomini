import React from 'react';
import Module1 from './Module1';
import Module2 from './Module2';
import connect from './libs/connect';

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
		let { store } = this.props;
		return (
			<div>
				{store.state.removeModule1?"":<Module1 />}
				<Module2 />
			</div>
			)
	}
}
let AppHoC = connect(App);

export default AppHoC;