import React from 'react';
import PropTypes from 'prop-types';

function initMapStateToProps(state){
	return {};
}

let connect = function(wrappedCompo,mapStateToProps){
	class ConnectHoC extends React.Component{
		constructor(props,context){
			super();
			this.store = context.store;
			
			this.mapStateToProps = mapStateToProps;
			this.newProps = {
				setState : this.store.setState.bind(this.store)
			}
			mapStateToProps = mapStateToProps ? mapStateToProps : initMapStateToProps;//自定义state to props
		}
		render(){
			var mapStateToProps = this.mapStateToProps || initMapStateToProps;
			let props = mapStateToProps && mapStateToProps(this.store.getState());
			props = Object.assign(this.newProps,props,this.props);
			return React.createElement(wrappedCompo,props);
		}
		componentWillUnmount(){
			this.store.unbindContext(this);
		}
		componentDidMount(){
			//兼容react-hot-reload，否则直接在构造函数中绑定即可
			if(mapStateToProps){
				this.store.bindContext(this);
			}
		}
		setState_n(bs_state,context){
			let newState = Object.assign(this.store.state,bs_state);
			this.setState(bs_state);
		}
	}
	ConnectHoC.contextTypes = {
		store:PropTypes.object
	}

	return ConnectHoC;
}

export default connect;