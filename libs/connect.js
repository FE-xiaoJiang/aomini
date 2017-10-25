import React from 'react';
import PropTypes from 'prop-types';

function mapStateToProps(state){
	return {

	}
}

let connect = function(wrappedCompo,mapStateToProps){
	class ConnectHoC extends React.Component{
		constructor(props,context){
			super();
			this.store = context.store;
			this.store.bindContext(this);
		}
		render(){
			// let props = mapStateToProps && mapStateToProps(this.store.getState());
			// props = Object.assign(props,this.props);
			// let arr = [...this.props]
			// console.log(...this.props)
			return React.createElement(wrappedCompo,Object.assign({store:this.store},this.props));
		}
		componentWillUnmount(){
			this.store.unbindContext(this);
		}
	}
	ConnectHoC.contextTypes = {
		store:PropTypes.object
	}

	return ConnectHoC;
}

export default connect;