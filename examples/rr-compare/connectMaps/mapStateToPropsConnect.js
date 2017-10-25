export function mapStateToPropsConnect(state){
	return {
		moduleQuantity:state.moduleQuantity,
		updateCount:state.updateCount
	}
}