import React from 'react';
import PropTypes from 'prop-types';
import * as _ from './util';
let connectSeries = 1;

function makeSelectorStateful(mapStateToProps,props){
	mapStateToProps = mapStateToProps ? mapStateToProps : initMapStateToProps;
	let selector = {
		mergeProps:mapStateToProps(props),//用于初始化
		run:function runComponentSelector(props) {
			// selector.shouldComponentUpdate
			let mergeProps = mapStateToProps(props);
			if(_._deepEqual(mergeProps,this.mergeProps)){
				this.shouldComponentUpdate = false;
			}else{
				this.shouldComponentUpdate = true;
				this.mergeProps = mergeProps;
			}
		}
	}
	return selector;
}

function initMapStateToProps(state){
	return {};
}

let connect = function(wrappedCompo,mapStateToProps,hocName){
	let prevMergeProps = void 0;
	class ConnectHoC extends React.Component{
		constructor(props,context){
			super();
			this.store = context.store;
			this.compSeries = connectSeries++;
			
			this.mapStateToProps = mapStateToProps;
			this.initSelector(mapStateToProps);
			this.newProps = {
				setState : this.store.setState.bind(this.store)
			}
			// mapStateToProps = mapStateToProps ? mapStateToProps : initMapStateToProps;//自定义state to props
		}
		initSelector(mapStateToProps){
			this.selector = makeSelectorStateful(mapStateToProps,this.store.getState());
		}
		shouldComponentUpdate(nextProps, nextState){
			// console.log(hocName," component ",this.compSeries," should upodate:",this.selector.shouldComponentUpdate);
			return (this.selector.shouldComponentUpdate || true) || !_._deepEqual(this.props,nextProps);
		}
		render(){
			// var mapStateToProps = this.mapStateToProps || initMapStateToProps;
			// let props = mapStateToProps && mapStateToProps(this.store.getState());
			let props = this.selector.mergeProps;
			props = Object.assign({},this.newProps,props,this.props);
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
		onStateChange(state){
			this.selector.run(state);
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