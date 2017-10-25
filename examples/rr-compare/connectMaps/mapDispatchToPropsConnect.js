import actions from '../actions';

export function mapDispatchToPropsConnect(dispatch){
	return {
		setModuleQuantity:function(options){
			dispatch(actions["setModuleQuantity_action"](options));
		},
		updateX:function(options){
			dispatch(actions["update_action"](options));
		}
	}
}