'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverHOC = function HoverHOC(WrappedComponent, props) {

  return function (_React$Component) {
    _inherits(HoverHOC, _React$Component);

    function HoverHOC(props) {
      _classCallCheck(this, HoverHOC);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HoverHOC).call(this, props));

      _this.state = {
        isHovering: false,
        isClicked: false

      };
      _this._mouseEntered = _this._mouseEntered.bind(_this);
      _this._mouseLeft = _this._mouseLeft.bind(_this);
      _this._handleClick = _this._handleClick.bind(_this);

      return _this;
    }

    _createClass(HoverHOC, [{
      key: '_handleClick',
      value: function _handleClick() {

        var current = this.state.isClicked;
        this.setState({
          isClicked: !current
        });
      }
    }, {
      key: '_mouseEntered',
      value: function _mouseEntered(event) {
        event.preventDefault();
        this.setState({ isHovering: true });
      }
    }, {
      key: '_mouseLeft',
      value: function _mouseLeft(event) {
        event.preventDefault();
        this.setState({ isHovering: false });
      }
    }, {
      key: 'render',
      value: function render() {

        var props = Object.assign({}, this.props, {
          _mouseEntered: this._mouseEntered.bind(this),
          _mouseLeft: this._mouseLeft.bind(this),
          _handleClick: this._handleClick.bind(this)
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(WrappedComponent, props)
        );
      }
    }]);

    return HoverHOC;
  }(_react2.default.Component);
};

exports.default = HoverHOC;