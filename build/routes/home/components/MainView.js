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
      loaded: _this.props.loaded

    };

    _this._handleItemRendering = _this._handleItemRendering.bind(_this);
    _this._colorHandling = _this._colorHandling.bind(_this);
    _this._handleActiveItemReset = _this._handleActiveItemReset.bind(_this);
    _this._setActiveItem = _this._setActiveItem.bind(_this);

    return _this;
  }

  _createClass(MainView, [{
    key: '_setActiveItem',
    value: function _setActiveItem(item) {
      this.props.scrollMe();
      if (item != this.state.activeItemTitle) {
        this.setState({
          activeItemTitle: item
        });
      }
    }
  }, {
    key: '_handleActiveItemReset',
    value: function _handleActiveItemReset() {
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
      var _this2 = this;

      if (info.length > 0 && this.props.showItems) {

        var infostuff = info.map(function (item, index) {

          return _react2.default.createElement(
            _PreviewThumb2.default,
            _extends({}, _this2.props, {
              isActive: _this2.state.activeItemTitle,
              setActiveItem: _this2._setActiveItem,
              displayInfo: item.contentItems,
              _colorHandling: _this2._colorHandling }),
            _react2.default.createElement(_LargeVersion2.default, _extends({
              displayInfo: item.contentItems,
              handleClose: _this2._handleActiveItemReset
            }, _this2.props))
          );
        });
        return infostuff;
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'mainViewContainer' },
        this.props.loaded ? this._handleItemRendering(this.props.dataBaseContents) : null
      );
    }
  }]);

  return MainView;
}(_react2.default.Component);

exports.default = MainView;