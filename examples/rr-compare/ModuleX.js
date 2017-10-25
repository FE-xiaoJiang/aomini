import React from 'react';
import {connect} from 'react-redux';
import actions from './actions';
import { mapStateToPropsConnect,mapDispatchToPropsConnect } from './connectMaps';


class SubModuleX extends React.Component{
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { mIndex, updateCount } = this.props;
		return <div>sub module {mIndex},update count:{updateCount}</div>
	}
	componentDidUpdate(prevProps, prevState) {
		// console.log("SubModuleX did update")
	}
}
let SubModuleXHoC = connect(mapStateToPropsConnect,mapDispatchToPropsConnect)(SubModuleX);

/**
* siblings2
*/
class ModuleX extends React.Component{
	constructor(){
		super();
		this.startTime = 0;
		this.state = {
			updateCount:1
		};// = Object.assign({},store.bindContext(this));
	}
	render(){
		let {moduleQuantity, updateCount} = this.props;
		let subNum = Number(moduleQuantity || 0);
		return (
			<div>
				<p>---------ModuleX---------</p>
				兄弟节点Module1的值:{moduleQuantity}
				<button onClick={this.updateX.bind(this)}>更新</button>
				{
					subNum <= 0 ? "":(
						Array(subNum).fill(1).map((item,i)=>{
							return (
								<SubModuleXHoC key={i} mIndex={i+1} updateCount={updateCount} />
							)
						})
					)
				}
			</div>
			)
	}
	componentWillUpdate(nextProps, nextState) {
		this.startTime = new Date().getTime();
		console.log("ModuleX will update")
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("ModuleX did update using time:",new Date().getTime() - this.startTime)
	}
	updateX(){
		let { updateX, updateCount } = this.props;
		updateX(updateCount+1);
	}
}
let ModuleXHoC = connect(mapStateToPropsConnect,mapDispatchToPropsConnect)(ModuleX);

export default ModuleXHoC;