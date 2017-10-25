import React from 'react';
import {connect} from 'react-redux';
import actions from './actions';
import { mapStateToPropsConnect,mapDispatchToPropsConnect } from './connectMaps';

/**
* siblings1
*/
class Module1 extends React.Component{
	constructor(){
		super();
		this.state = {
			m1Var:111
		};// = Object.assign({},store.bindContext(this));
	}
	render(){
		let { moduleQuantity } = this.props;
		return (
			<div>
				<p>--------Module1---------</p>
				<input type="number" value={moduleQuantity} onChange={this.setValue.bind(this)} />
			</div>
			)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Module1 did update")
	}
	setValue(e){
		console.log(e.target.value);
		let { setModuleQuantity } = this.props;
		setModuleQuantity(e.target.value);
	}
}
let Module1HoC = connect(mapStateToPropsConnect,mapDispatchToPropsConnect)(Module1);

export default Module1HoC;