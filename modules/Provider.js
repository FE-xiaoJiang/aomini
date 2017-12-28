import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component{
	getChildContext(){
		return {
			store:this.props.store
		}
	}
	constructor(props){
		super(props);
	}
	render(){
		return React.Children.only(this.props.children);
	}
}
Provider.childContextTypes = {
	store:PropTypes.object
}

export default Provider;