"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodePenHandler = function CodePenHandler(props) {
  //  url: //codepen.io/BSchauerte/embed/xOBqQz/?height=265&theme-id=0&default-tab=js,result&embed-version=2
  var urlHelper = function urlHelper(url) {
    var target = /\height\b=\d+/gi;
    var newHeight = "height=" + props.style.height; //default 265
    var editedUrl = url.replace(target, newHeight);
    return editedUrl;
  };

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "iframe",
      { width: props.style.width,
        height: props.style.height,
        scrolling: "no",
        src: urlHelper(props.iframeSrc),
        frameBorder: "no",
        allowTransparency: "true",
        allowFullScreen: "true",
        style: props.style },
      _react2.default.createElement(
        "a",
        { href: props.penHref },
        "See this pen"
      ),
      " by (",
      _react2.default.createElement(
        "a",
        { href: props.userPen },
        "@BSchauerte"
      ),
      ") on",
      _react2.default.createElement(
        "a",
        { href: "http://codepen.io" },
        "CodePen"
      ),
      "."
    )
  );
};

CodePenHandler.propTypes = {
  iframeSrc: _react2.default.PropTypes.string.isRequired,
  penHref: _react2.default.PropTypes.string.isRequired,
  userPen: _react2.default.PropTypes.string.isRequired,
  style: _react2.default.PropTypes.object.isRequired
};
exports.default = CodePenHandler;