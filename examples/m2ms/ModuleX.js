import React from 'react';
import connect from '../../libs/connect';

class SubModuleX extends React.Component{
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { store, mIndex, updateCount } = this.props;
		return <div>sub module {mIndex},update count:{updateCount}</div>
	}
	componentDidUpdate(prevProps, prevState) {
		// console.log("SubModuleX did update")
	}
}
let SubModuleXHoC = connect(SubModuleX);

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
		let { store } = this.props;
		let subNum = Number(store.state.m1Var);
		return (
			<div>
				<p>---------ModuleX---------</p>
				兄弟节点Module1的值:{store.state.m1Var}
				<button onClick={this.updateX.bind(this)}>更新</button>
				{
					subNum <= 0 ? "":(
						Array(subNum).fill(1).map((item,i)=>{
							return (
								<SubModuleXHoC key={i} mIndex={i+1} updateCount={store.state.updateCount} />
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
		let { store } = this.props;
		store.setState({
			updateCount:Number(store.state.updateCount)+1
		})
	}
}
let ModuleXHoC = connect(ModuleX);

export default ModuleXHoC;