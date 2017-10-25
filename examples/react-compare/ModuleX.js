import React from 'react';


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
// let SubModuleXHoC = connect(mapStateToPropsConnect,mapDispatchToPropsConnect)(SubModuleX);

/**
* siblings2
*/
class ModuleX extends React.Component{
	constructor(){
		super();
		this.startTime = 0;
		this.state = {
			updateCount:1
		};
	}
	render(){
		let {moduleQuantity} = this.props;
		let { updateCount } = this.state;
		console.log("&&&&&&&&&&&",updateCount)
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
								<SubModuleX key={i} mIndex={i+1} updateCount={updateCount} />
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
		let { updateCount } = this.state;
		this.setState({
			updateCount:updateCount+1
		});
	}
}

export default ModuleX;