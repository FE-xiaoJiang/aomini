import React from 'react';
import connect from '../../modules/connect';

/**
* siblings1
*/
class Module1 extends React.Component{
	constructor(){
		super();
		this.state = {};// = Object.assign({},store.bindContext(this));
	}
	render(){
		let { m1Var } = this.props;
		return (
			<div>
				<p>--------Module1---------</p>
				<input type="number" value={m1Var} onChange={this.setValue.bind(this)} />
			</div>
			)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Module1 did update")
	}
	setValue(e){
		let { setState } = this.props;
		console.log(e.target.value);
		setState({
			m1Var:e.target.value
		})
	}
}
let Module1HoC = connect(Module1,function(state){
	return{
		m1Var:state.m1Var
	}
});

export default Module1HoC;