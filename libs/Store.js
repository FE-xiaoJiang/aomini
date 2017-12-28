"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* 统一状态管理对象
*/
var store = {
	//目标组件对象
	contexts: [],
	//state数据
	state: {
		m1Var: "111",
		updateCount: 1
	},
	listeners: [],
	//注册绑定组件与状态数据，用于setState
	bindContext: function bindContext(_context) {
		this.contexts.push(_context);
		return this.state;
	},
	unbindContext: function unbindContext(_context) {
		for (var i = 0; i < this.contexts.length; i++) {
			if (this.contexts[i] === _context) {
				this.contexts[i] = null;
				// console.log(_context);
			}
		}
	},
	subscribe: function subscribe(fn) {},
	dispatch: function dispatch() {},
	setState: function setState(_state) {
		this.state = Object.assign({}, this.state, _state);
		var context;
		for (var i = 0; i < this.contexts.length; i++) {
			context = this.contexts[i];
			if (context && context.mapStateToProps) {
				_react2.default.Component.prototype.setState.call(context, this.state);
			}
		}
	},
	getState: function getState() {
		return this.state;
	}
};

exports.default = store;