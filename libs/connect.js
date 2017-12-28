'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function initMapStateToProps(state) {
	return {};
}

var connect = function connect(wrappedCompo, mapStateToProps) {
	var ConnectHoC = function (_React$Component) {
		_inherits(ConnectHoC, _React$Component);

		function ConnectHoC(props, context) {
			_classCallCheck(this, ConnectHoC);

			var _this = _possibleConstructorReturn(this, (ConnectHoC.__proto__ || Object.getPrototypeOf(ConnectHoC)).call(this));

			_this.store = context.store;

			_this.mapStateToProps = mapStateToProps;
			_this.newProps = {
				setState: _this.store.setState.bind(_this.store)
			};
			mapStateToProps = mapStateToProps ? mapStateToProps : initMapStateToProps; //自定义state to props
			return _this;
		}

		_createClass(ConnectHoC, [{
			key: 'render',
			value: function render() {
				var mapStateToProps = this.mapStateToProps || initMapStateToProps;
				var props = mapStateToProps && mapStateToProps(this.store.getState());
				props = Object.assign(this.newProps, props, this.props);
				return _react2.default.createElement(wrappedCompo, props);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.store.unbindContext(this);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//兼容react-hot-reload，否则直接在构造函数中绑定即可
				if (mapStateToProps) {
					this.store.bindContext(this);
				}
			}
		}, {
			key: 'setState_n',
			value: function setState_n(bs_state, context) {
				var newState = Object.assign(this.store.state, bs_state);
				this.setState(bs_state);
			}
		}]);

		return ConnectHoC;
	}(_react2.default.Component);

	ConnectHoC.contextTypes = {
		store: _propTypes2.default.object
	};

	return ConnectHoC;
};

exports.default = connect;