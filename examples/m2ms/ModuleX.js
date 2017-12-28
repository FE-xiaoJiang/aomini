import React from 'react';
import connect from '../../modules/connect';

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
let SubModuleXHoC = connect(SubModuleX,function(state){
	return {
		updateCount:state.updateCount
	}
});

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
		let { m1Var,updateCount } = this.props;
		let subNum = Number(m1Var) || 0;
		return (
			<div>
				<p>---------ModuleX---------</p>
				兄弟节点Module1的值:{m1Var}
				<button onClick={this.updateX.bind(this)}>更新</button>
				{
					subNum <= 0 ? "":(
						Array(subNum).fill(1).map((item,i)=>{
							return (
								<SubModuleXHoC key={i} mIndex={i+1} />
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
		let { updateCount,setState } = this.props;
		setState({
			updateCount:Number(updateCount)+1
		})
	}
}
let ModuleXHoC = connect(ModuleX,function(state){
	return {
		updateCount:state.updateCount,
		m1Var:state.m1Var
	}
});

export default ModuleXHoC;