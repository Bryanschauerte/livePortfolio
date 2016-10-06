'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgGenerator = require('./SvgGenerator');

var _SvgGenerator2 = _interopRequireDefault(_SvgGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      windowWidth: null,
      windowHeight: null
    };
    _this._handleResize = _this._handleResize.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: '_handleResize',
    value: function _handleResize(e) {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      window.addEventListener('resize', this._handleResize);
      this._handleResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var currentLocation = this.props.location.pathname;
      var windowWidth = this.state.windowWidth;
      var windowHeight = this.state.windowHeight;

      return _react2.default.createElement(
        'div',
        { className: 'appding' },
        _react2.default.cloneElement(children, {
          windowWidth: windowWidth,
          windowHeight: windowHeight
        }),
        _react2.default.createElement(_SvgGenerator2.default, { windowHeight: windowHeight, showBackgAni: currentLocation == '/', windowWidth: windowWidth })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;