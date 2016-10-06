"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GistAddition = function (_React$Component) {
  _inherits(GistAddition, _React$Component);

  function GistAddition(props) {
    _classCallCheck(this, GistAddition);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GistAddition).call(this, props));

    _this.state = {};
    _this._updateIframeContent = _this._updateIframeContent.bind(_this);
    _this._handleString = _this._handleString.bind(_this);
    return _this;
  }

  _createClass(GistAddition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateIframeContent();
    }
  }, {
    key: "_handleString",
    value: function _handleString() {

      var gistURL = this.props.gistId;
      var srcFromGist = "https://gist.github.com/Bryanschauerte/" + gistURL + ".js";
      return srcFromGist;
    }
  }, {
    key: "_updateIframeContent",
    value: function _updateIframeContent() {
      var gistUrl = this._handleString();
      var target = this.refs[this.props.gistId];
      var iframeWinDoc = target.contentDocument || target.contentWindow.document;
      var gistScript = "<script type='text/javascript' src=" + gistUrl + "></script>";
      var iframeHtml = "<html><body>" + gistScript + '</body></html>';
      iframeWinDoc.open();
      iframeWinDoc.writeln(iframeHtml);
      iframeWinDoc.close();
    }
  }, {
    key: "render",
    value: function render() {
      var framstyle = { width: '100%', height: '100%', fontSize: '1em' };
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "iframe",
          { ref: this.props.gistId, style: framstyle },
          _react2.default.createElement(
            "p",
            null,
            "Your browser does not support iframes.",
            _react2.default.createElement(
              "a",
              { target: "_blank", href: 'https://gist.github.com/Bryanschauerte/' + this.props.gistId + '.js' },
              "Click here to open in a new tab"
            )
          )
        )
      );
    }
  }]);

  return GistAddition;
}(_react2.default.Component);

GistAddition.propTypes = {
  gistId: _react2.default.PropTypes.string.isRequired
};

exports.default = GistAddition;
// <GistAddition gistId="6cb9664eb4411b04bc8dd3e2a0cf7cf6"/>