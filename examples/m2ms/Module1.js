import React from 'react';
import connect from '../../libs/connect';

/**
* siblings1
*/
class Module1 extends React.Component{
	constructor(){
		super();
		this.state = {};// = Object.assign({},store.bindContext(this));
	}
	render(){
		let { store } = this.props;
		return (
			<div>
				<p>--------Module1---------</p>
				<input type="number" value={store.state.m1Var} onChange={this.setValue.bind(this)} />
			</div>
			)
	}
	setValue(e){
		let { store } = this.props;
		console.log(e.target.value);
		store.setState({
			m1Var:e.target.value
		})
	}
}
let Module1HoC = connect(Module1);

export default Module1HoC;