import React from 'react';
import SubModule21 from './SubModule21';
import SubModule22 from './SubModule22';
import connect from '../../libs/connect';

/**
* siblings2
*/
class Module2 extends React.Component{
	constructor(){
		super();
		this.state = {};// = Object.assign({},store.bindContext(this));
	}
	render(){
		let { m1Var } = this.props;
		return (
			<div>
				<p>---------Module2---------</p>
				兄弟节点Module1的值:{m1Var}
				<SubModule21 />
				<SubModule22 />
			</div>
			)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Module2 did update")
	}
}
let Module2HoC = connect(Module2);

export default Module2HoC;