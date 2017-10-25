import React from 'react';

/**
* siblings1
*/
class Module1 extends React.Component{
	constructor(){
		super();
		this.state = {
			moduleQuantity:900
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
		// this.setState({
		// 	moduleQuantity:e.target.value
		// })
		let { setModuleQuantity } = this.props;
		setModuleQuantity(e.target.value);
	}
}

export default Module1;