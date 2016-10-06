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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tokgen = new _uuidTokenGenerator2.default();

var SvgGenerator = function (_React$Component) {
  _inherits(SvgGenerator, _React$Component);

  function SvgGenerator(props) {
    _classCallCheck(this, SvgGenerator);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SvgGenerator).call(this, props));

    _this._generateTriangle = _this._generateTriangle.bind(_this);
    _this._generateSize = _this._generateSize.bind(_this);
    _this._generateBackground = _this._generateBackground.bind(_this);
    _this._generateCircles = _this._generateCircles.bind(_this);
    return _this;
  }

  _createClass(SvgGenerator, [{
    key: '_generateSize',
    value: function _generateSize(percentDec) {

      var height = this.props.dimensions.height;
      var width = this.props.dimensions.width;
      var Th = height * percentDec;
      var Tw = width * percentDec;
      var triangleA = Th * Tw * 2.5;
      var area = height * width;
      var numberNeeded = area / triangleA;
      var config = { numberNeeded: numberNeeded, triH: Th, triW: Tw, colorTwo: "#1976d2", colorOne: "#c12b2b" };

      return config;
    }
  }, {
    key: '_generateTriangle',
    value: function _generateTriangle(configObj) {

      var width = configObj.triW;
      var height = configObj.triH;
      var colorOne = configObj.colorOne; //background-color

      return _react2.default.createElement(
        'svg',
        { key: tokgen.generate(), height: width, width: width },
        _react2.default.createElement(
          'g',
          { transform: 'rotate(45)' },
          _react2.default.createElement('rect', { width: '200%', stroke: 'black', strokeWidth: '3%', height: '200%', fill: colorOne })
        )
      );
    }
  }, {
    key: '_generateBackground',
    value: function _generateBackground(percentDec) {
      var configObj = this._generateSize(percentDec);

      var backgroundG = [];
      for (var i = configObj.numberNeeded; i > 0; i--) {
        backgroundG.push(this._generateTriangle(configObj));
      }
      return backgroundG;
    }
  }, {
    key: '_generateCircles',
    value: function _generateCircles() {

      var inputColorObj = {
        center: "#01b826",
        topCenter: "#0B1968",
        topLeft: "#0193b8",
        topRight: "#813772",
        bottomRight: "#b82601",
        bottomLeft: "#062f4f"
      };

      var center = inputColorObj.center;
      var topCenter = inputColorObj.topCenter;
      var topLeft = inputColorObj.topLeft;
      var topRight = inputColorObj.topRight;
      var bottomRight = inputColorObj.bottomRight;
      var bottomLeft = inputColorObj.bottomLeft;
      var showBackgAni = this.props.showBackgAni;


      var internals = [];

      for (var l = 1; l <= 10; l++) {
        var temp = l * 5;
        temp += "%";
        internals.push(_react2.default.createElement('circle', { key: tokgen.generate(), cx: '50%', cy: '50%', r: temp, fillOpacity: '.3', fill: center, className: showBackgAni ? "SVGCcenter" : null }));
      }

      //Top-Center
      for (var n = 1; n <= 9; n++) {
        var _temp = 10 * (n + 1);
        _temp += "%";
        internals.push(_react2.default.createElement('circle', { key: tokgen.generate(), cx: '50%', cy: '-10%', r: _temp, fillOpacity: '.2', fill: topCenter, className: showBackgAni ? "SVGCtopCenter" : null }));
      }

      // Top-Left
      for (var i = 1; i <= 7; i++) {
        var _temp2 = i * 10;
        _temp2 += "%";
        internals.push(_react2.default.createElement('circle', { key: tokgen.generate(), cx: '0', cy: '0', r: _temp2, fillOpacity: '.2', fill: topLeft, className: showBackgAni ? "SVGtopLeft" : null }));
      }

      // Top-Right
      for (var j = 1; j <= 7; j++) {
        var _temp3 = j * 10;
        _temp3 += "%";
        internals.push(_react2.default.createElement('circle', { key: tokgen.generate(), cx: '100%', cy: '0', r: _temp3, fillOpacity: '.1', fill: topRight, className: showBackgAni ? "SVGtopRight" : null }));
      }

      // Bottom-Right
      for (var k = 1; k <= 7; k++) {
        var _temp4 = k * 10;
        _temp4 += "%";
        internals.push(_react2.default.createElement('circle', { key: tokgen.generate(), cx: '100%', cy: '100%', r: _temp4, fillOpacity: '.1', fill: bottomRight, className: showBackgAni ? "SVGbottomRight" : null }));
      }

      // Bottom-Left
      for (var m = 1; m <= 7; m++) {
        var _temp5 = m * 10;
        _temp5 += "%";
        internals.push(_react2.default.createElement('circle', { key: tokgen.generate(), cx: '0%', cy: '100%', r: _temp5, fillOpacity: '.1', fill: bottomLeft, className: showBackgAni ? "SVGbottomLeft" : null }));
      }
      var returnCircles = [];
      returnCircles.push(_react2.default.createElement(
        'svg',
        { key: tokgen.generate(), id: 'TopSVGCirles', height: '100%', width: '100%' },
        internals
      ));

      return returnCircles;
    }
  }, {
    key: 'render',
    value: function render() {
      var dimensions = this.props.dimensions;
      var backgroundStyle = { stroke: 'blue', strokeWidth: 3 };

      return _react2.default.createElement(
        'div',
        { key: tokgen.generate(), className: 'svgContainer', style: { height: this.props.windowHeight, width: this.props.windowWidth } },
        this._generateCircles()
      );
    }
  }]);

  return SvgGenerator;
}(_react2.default.Component);

SvgGenerator.defaultProps = { width: 800, height: 600 };;

exports.default = SvgGenerator;