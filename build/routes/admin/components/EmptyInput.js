'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyInput = function (_React$Component) {
  _inherits(EmptyInput, _React$Component);

  function EmptyInput(props) {
    _classCallCheck(this, EmptyInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EmptyInput).call(this, props));

    _this.state = {
      name: _this.props.name,
      value: _this.props.stateValue,
      indexNum: _this.props.indexNum,
      isHovering: false,
      smallable: _this.props.smallable,
      focused: false
    };
    _this._handleChange = _this._handleChange.bind(_this);
    _this._handlePassBack = _this._handlePassBack.bind(_this);
    _this._getStateValue = _this._getStateValue.bind(_this);
    _this._handleMouseEnter = _this._handleMouseEnter.bind(_this);
    _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);
    _this._handlefocus = _this._handlefocus.bind(_this);
    _this._handleBlur = _this._handleBlur.bind(_this);
    return _this;
  }

  _createClass(EmptyInput, [{
    key: '_handleBlur',
    value: function _handleBlur(event) {

      event.preventDefault();
      if (this.props.isPreview) {
        this.props._handleInputDataChangePass(this.state, true);
      }
      this.props._handleInputDataChangePass(this.state);
      this.setState({ focused: false });
    }
  }, {
    key: '_handlefocus',
    value: function _handlefocus(event) {

      event.preventDefault();
      this.setState({ focused: true });
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      event.preventDefault();
      this.setState({ isHovering: false });
    }
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {
      event.preventDefault();
      this.setState({ isHovering: true });
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: '_handlePassBack',
    value: function _handlePassBack() {
      if (this.props.isPreview) {
        this.props._handleInputDataChangePass(this.state, true);
      }
      this.props._handleInputDataChangePass(this.state);
    }
  }, {
    key: '_getStateValue',
    value: function _getStateValue() {
      var value = this.state.value;
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      var emptyInputClasses = (0, _classnames2.default)({
        'emptyInputDefault': this.props.smallable,
        'emptyInputShowtime': this.state.isHovering || this.state.focused || !this.props.smallable
      });
      var emptyTextAreaClasses = (0, _classnames2.default)({
        'emptyTextAreaDefault': this.props.smallable,
        'emptyTextAreaShowtime': this.state.isHovering || this.state.focused || !this.props.smallable
      });

      return _react2.default.createElement(
        'div',
        {
          onMouseEnter: this._handleMouseEnter,
          onMouseLeave: this._handleMouseLeave,
          className: 'emptyInputContainer' },
        _react2.default.createElement(
          'label',
          null,
          this.props.label
        ),
        this.props.isTextArea ? _react2.default.createElement('textarea', {
          className: emptyTextAreaClasses,
          type: 'text',
          onBlur: this._handleBlur,
          onFocus: this._handlefocus,
          value: this.state.value || this.props.stateValue,
          onChange: this._handleChange
        }) : _react2.default.createElement('input', {
          className: emptyInputClasses,
          onBlur: this._handleBlur,
          onFocus: this._handlefocus,
          type: 'text',
          value: this.state.value || this.props.stateValue,
          onChange: this._handleChange
        })
      );
    }
  }]);

  return EmptyInput;
}(_react2.default.Component);

EmptyInput.defaultProps = {
  indexNum: 'NA',
  showfeilds: false,
  isTextArea: true,
  smallable: true
};

exports.default = EmptyInput;