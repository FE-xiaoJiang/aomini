import React from 'react';
import connect from '../../modules/connect';

/**
* Module2的子组件
*/
class SubModule21 extends React.Component{
	constructor(){
		super();
		this.state = {};//= Object.assign({},store.bindContext(this));
	}
	render(){
		return (
			<div>
				<p>-------SubModule21--------</p>
				<button onClick={this.clean.bind(this)}>清空Module1的值</button>
			</div>
			)
	}
	clean(){
		let { setState } = this.props;
		setState({
			m1Var:""
		})
	}
}
let SubModule21HoC = connect(SubModule21);

export default SubModule21HoC;