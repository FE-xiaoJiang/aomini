import React from 'react';
import PropTypes from 'prop-types';

let connect = function(wrappedCompo){
	class ConnectHoC extends React.Component{
		constructor(props,context){
			super();
			this.store = context.store;
			this.store.bindContext(this);
		}
		render(){
			return React.createElement(wrappedCompo,{store:this.store});
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