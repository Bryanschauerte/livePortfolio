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

var SubmitBTN = function (_React$Component) {
  _inherits(SubmitBTN, _React$Component);

  function SubmitBTN(props) {
    _classCallCheck(this, SubmitBTN);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitBTN).call(this, props));

    _this.state = {
      btnDisabled: false,
      sendingData: false,
      dataBack: false
    };
    _this._handleClick = _this._handleClick.bind(_this);
    _this._calculateStyle = _this._calculateStyle.bind(_this);

    return _this;
  }

  _createClass(SubmitBTN, [{
    key: '_calculateStyle',
    value: function _calculateStyle() {
      var style = void 0;
      if (this.state.btnDisabled) {
        style = { backgroundColor: 'grey' };
      }
      if (this.state.sendingData) {
        style = { backgroundColor: 'blue' };
      }
      if (this.state.dataBack) {
        style = { backgroundColor: 'green' };
      }
      return style;
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      // e.preventDefault();
      this.props.submit();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      this.setState({
        btnDisabled: nextProps.btnState.makingRequest,
        sendingData: nextProps.btnState.makingRequest,
        dataBack: nextProps.btnState.result
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var requestStatus = this.props.btnState.makingRequest;
      var isDisabled = this.state.btnDisabled;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            style: this._calculateStyle(),
            disabled: isDisabled, onClick: this._handleClick },
          this.props.label
        )
      );
    }
  }]);

  return SubmitBTN;
}(_react2.default.Component);

exports.default = SubmitBTN;