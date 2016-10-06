'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuidTokenGenerator = require('uuid-token-generator');

var _uuidTokenGenerator2 = _interopRequireDefault(_uuidTokenGenerator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _HoverHOC = require('./HoverHOC');

var _HoverHOC2 = _interopRequireDefault(_HoverHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tokgen = new _uuidTokenGenerator2.default();

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Preview).call(this, props));

    _this.state = {
      isLoaded: false,
      showLarge: false,
      activeItem: null,
      hoveringItem: null

    };
    _this._handleSize = _this._handleSize.bind(_this);
    _this._handleItemRendering = _this._handleItemRendering.bind(_this);
    _this._handleClick = _this._handleClick.bind(_this);
    _this._handleMouseEnter = _this._handleMouseEnter.bind(_this);
    _this._handleMouseLeave = _this._handleMouseLeave.bind(_this);

    return _this;
  }

  _createClass(Preview, [{
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(target) {

      this.setState({ hoveringItem: target });
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave() {

      this.setState({ hoveringItem: null });
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(target) {
      var currentState = this.state.activeItem;
      this.setState({
        activeItem: target
      });
      this.props.getItemTarget(target);
    }
  }, {
    key: '_handleSize',
    value: function _handleSize() {

      var height = Math.floor(this.props.windowHeight);
      var width = Math.floor(this.props.windowWidth);
      var sendingW = width / 3;
      var sendingH = sendingW * .5;
      var returnSize = { height: sendingH, width: sendingW };
      return returnSize;
    }
  }, {
    key: '_handleItemRendering',
    value: function _handleItemRendering(info) {
      var _this2 = this;

      var thumbDimensions = this._handleSize();
      var infostuff = info.map(function (item) {

        var enter = _this2._handleMouseEnter.bind(null, item.contentItems.title);
        return _react2.default.createElement(
          'li',
          {
            onClick: _this2._handleClick.bind(null, item),
            onMouseEnter: enter,
            onMouseLeave: _this2._handleMouseLeave,
            key: tokgen.generate()

          },
          _this2.state.hoveringItem != item.contentItems.title ? _react2.default.createElement(
            'p',
            { className: 'previewLIHighlight' },
            item.contentItems.title,
            ' ',
            _react2.default.createElement(
              'span',
              null,
              item.contentItems.type
            )
          ) : _react2.default.createElement(
            'p',
            { className: 'previewLI' },
            item.contentItems.title,
            ': EDIT THIS'
          )
        );
      });
      return infostuff;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        isLoaded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var contents = this.props.infoArray;
      var items = this._handleItemRendering(this.props.infoArray);

      return _react2.default.createElement(
        'div',
        { className: 'previewListContainer' },
        _react2.default.createElement(
          'h3',
          { className: 'previewTitle' },
          'Select contents to edit or create new'
        ),
        _react2.default.createElement(
          'ul',
          null,
          items
        )
      );
    }
  }]);

  return Preview;
}(_react2.default.Component);

exports.default = Preview;