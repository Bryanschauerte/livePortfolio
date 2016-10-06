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

var ImageSlider = function (_React$Component) {
  _inherits(ImageSlider, _React$Component);

  function ImageSlider(props) {
    _classCallCheck(this, ImageSlider);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageSlider).call(this, props));

    _this.state = {
      currentIndex: 0,
      imageHovering: false,
      isLoaded: null
    };
    _this._handleLeftClick = _this._handleLeftClick.bind(_this);
    _this._handleRightClick = _this._handleRightClick.bind(_this);
    _this.mouseEntered = _this.mouseEntered.bind(_this);
    _this.mouseLeft = _this.mouseLeft.bind(_this);
    _this._handleStyle = _this._handleStyle.bind(_this);
    _this._handleRendering = _this._handleRendering.bind(_this);
    _this._changeLoadState = _this._changeLoadState.bind(_this);
    return _this;
  }

  _createClass(ImageSlider, [{
    key: '_handleStyle',
    value: function _handleStyle() {
      var size = this.props.size;
      var biggerSize = {
        height: this.props.size.height * 2,
        width: this.props.size.width * 2 };

      return this.state.imageHovering ? biggerSize : size;
    }
  }, {
    key: 'mouseEntered',
    value: function mouseEntered(event) {
      event.preventDefault();
      this.setState({ imageHovering: true });
    }
  }, {
    key: 'mouseLeft',
    value: function mouseLeft(event) {
      event.preventDefault();
      this.setState({ imageHovering: false });
    }
  }, {
    key: '_handleLeftClick',
    value: function _handleLeftClick(event) {
      event.preventDefault();
      var index = this.state.currentIndex;
      index == 0 ? this.setState({ currentIndex: this.props.images.length - 1 }) : this.setState({ currentIndex: index -= 1 });
    }
  }, {
    key: '_handleRightClick',
    value: function _handleRightClick(event) {
      event.preventDefault();
      var index = this.state.currentIndex;
      index == this.props.images.length - 1 ? this.setState({ currentIndex: 0 }) : this.setState({ currentIndex: index += 1 });
    }
  }, {
    key: '_changeLoadState',
    value: function _changeLoadState() {
      this.setState({ isLoaded: true });
    }
  }, {
    key: '_handleRendering',
    value: function _handleRendering() {

      var size = this.props.size;
      var biggerSize = {
        height: this.props.size.height * 2,
        width: this.props.size.width * 2 };
      var images = this.props.images;
      var length = this.props.images.length;
      var arrowClass = (0, _classnames2.default)({
        arrows: true,
        noShow: images && images.length <= 1
      });

      return this.props.images.length ? _react2.default.createElement(
        'div',
        { onMouseEnter: this.mouseEntered,
          onMouseLeave: this.mouseLeft },
        _react2.default.createElement(
          'div',
          { className: 'imageSliderContainer' },
          _react2.default.createElement('img', {
            className: 'sliderImage',
            style: this._handleStyle(),
            onLoad: this._changeLoadState,
            src: images[this.state.currentIndex] }),
          _react2.default.createElement(
            'div',
            { className: 'arrowContainer' },
            _react2.default.createElement(
              'div',
              { className: arrowClass },
              _react2.default.createElement('i', { onClick: this._handleLeftClick,
                className: 'fa fa-arrow-left fa-2x',
                'aria-hidden': 'true' }),
              _react2.default.createElement('i', { onClick: this._handleRightClick,
                className: 'fa fa-arrow-right fa-2x', 'aria-hidden': 'true' })
            )
          )
        )
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {

      var imageClass = (0, _classnames2.default)({
        imageLoading: true,
        imageDoneLoading: this.state.isLoaded

      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: imageClass },
          this._handleRendering()
        )
      );
    }
  }]);

  return ImageSlider;
}(_react2.default.Component);

exports.default = ImageSlider;