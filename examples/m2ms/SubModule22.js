import React from 'react';
import connect from './libs/connect';

/**
* Module2的子组件
*/
class SubModule22 extends React.Component{
	constructor(){
		super();
		this.state = {};//= Object.assign({},store.bindContext(this));
	}
	render(){
		return (
			<div>
				<p>-------SubModule22--------</p>
				<button onClick={this.removeModule1.bind(this)}>移除Module1组件</button>
				<button onClick={this.addModule1.bind(this)}>添加Module1组件</button>
			</div>
			)
	}
	removeModule1(){
		let { store } = this.props;
		store.setState({
			removeModule1:1
		})
	}
	addModule1(){
		let { store } = this.props;
		store.setState({
			removeModule1:0
		})
	}
}
let SubModule22HoC = connect(SubModule22);

export default SubModule22HoC;