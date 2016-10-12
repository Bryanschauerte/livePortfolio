'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uuidTokenGenerator = require('uuid-token-generator');

var _uuidTokenGenerator2 = _interopRequireDefault(_uuidTokenGenerator);

var _PreviewThumb = require('./PreviewThumb');

var _PreviewThumb2 = _interopRequireDefault(_PreviewThumb);

var _LargeVersion = require('./LargeVersion');

var _LargeVersion2 = _interopRequireDefault(_LargeVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tokgen = new _uuidTokenGenerator2.default();

var MainView = function (_React$Component) {
  _inherits(MainView, _React$Component);

  function MainView(props) {
    _classCallCheck(this, MainView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MainView).call(this, props));

    _this.state = {
      activeItemTitle: null,
      loaded: _this.props.loaded,
      isBig: false

    };

    _this._handleItemRendering = _this._handleItemRendering.bind(_this);
    _this._colorHandling = _this._colorHandling.bind(_this);
    _this._handleActiveItemReset = _this._handleActiveItemReset.bind(_this);
    _this._setActiveItem = _this._setActiveItem.bind(_this);
    _this.handleStyle = _this.handleStyle.bind(_this);

    return _this;
  }

  _createClass(MainView, [{
    key: '_setActiveItem',
    value: function _setActiveItem(item) {
      var tState = this.state;
      if (item != this.state.activeItemTitle) {
        tState.activeItemTitle = item;
      }
      this.props.updateActiveItem();
      this.setState({ tState: tState });
    }
  }, {
    key: '_handleActiveItemReset',
    value: function _handleActiveItemReset() {
      this.props.updateActiveItem();
      this.setState({ activeItemTitle: null });
    }
  }, {
    key: '_colorHandling',
    value: function _colorHandling(type) {

      var types = this.props.typesAvaliable;
      var colorArray = ['#0B1968', '#0193b8', '#813772', '#01b826', '#b82601', '#062f4f'];
      var index = types.indexOf(type);
      if (index > colorArray.length - 1) {
        index = index - (colorArray.length - 1);
      }
      return colorArray[index];
    }
  }, {
    key: '_handleItemRendering',
    value: function _handleItemRendering(info) {

      return _react2.default.createElement(
        'div',
        { className: 'mainViewItem' },
        _react2.default.createElement(
          _PreviewThumb2.default,
          _extends({}, this.props, {
            setActive: this.props.setActive,
            isActive: this.state.activeItemTitle,
            setActiveItem: this._setActiveItem,
            displayInfo: info.contentItems,
            _colorHandling: this._colorHandling }),
          _react2.default.createElement(_LargeVersion2.default, _extends({
            displayInfo: info.contentItems,
            handleClose: this._handleActiveItemReset
          }, this.props))
        )
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: 'handleStyle',
    value: function handleStyle() {
      var isBig = this.props.isBig;

      var smallSize = {
        float: 'right',
        padding: "2%",
        height: this.props.windowHeight / 2.2,
        width: this.props.windowWidth * .46
      };
      var bigSize = {
        float: 'none',
        padding: "0%",
        height: '100%',
        width: '100%'
      };
      return isBig ? bigSize : smallSize;
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        {
          style: this.handleStyle() },
        this._handleItemRendering(this.props.itemToDisplay)
      );
    }
  }]);

  return MainView;
}(_react2.default.Component);

exports.default = MainView;