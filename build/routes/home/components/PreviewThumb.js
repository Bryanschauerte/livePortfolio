'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreviewThumb = function (_React$Component) {
  _inherits(PreviewThumb, _React$Component);

  function PreviewThumb(props) {
    _classCallCheck(this, PreviewThumb);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PreviewThumb).call(this, props));

    _this.state = {
      isHovering: false,
      isClicked: _this.props.isBig,
      imageArray: null,
      isLoaded: false
    };
    _this._mouseEntered = _this._mouseEntered.bind(_this);
    _this._mouseLeft = _this._mouseLeft.bind(_this);
    _this._handleClick = _this._handleClick.bind(_this);
    _this._handleImages = _this._handleImages.bind(_this);
    _this.handleStringForUrlArray = _this.handleStringForUrlArray.bind(_this);
    _this._buttonStyle = _this._buttonStyle.bind(_this);
    _this._handleSummary = _this._handleSummary.bind(_this);
    _this._setSize = _this._setSize.bind(_this);
    _this._classNameAddition = _this._classNameAddition.bind(_this);
    _this.renderPreview = _this.renderPreview.bind(_this);

    return _this;
  }

  _createClass(PreviewThumb, [{
    key: '_setSize',
    value: function _setSize() {
      var sizeOb = {
        minHeight: this.props.height / 2,
        minwidth: this.props.width / 3
      };
      return sizeOb;
    }
  }, {
    key: '_buttonStyle',
    value: function _buttonStyle(isInverted, type) {
      var color = this.props._colorHandling(type);

      var style = {
        backgroundColor: color,
        border: "1px solid " + '#ffffff',
        color: '#ffffff',
        textAlign: "center",
        fontFamily: 'Roboto',
        boxShadow: "0 0 0 2px " + color,
        borderRadius: '2px',
        letterSpacing: '.4em',
        textShadow: '1px 1px 3px',
        cursor: 'pointer',
        transition: "background-color 250ms ease-in-out",
        alignSelf: 'center',
        width: '60%',
        marginTop: "2%"

      };

      var invStyle = {
        width: '60%',
        backgroundColor: '#ffffff',
        border: "1px solid " + color,
        textAlign: "center",
        fontFamily: 'Roboto',
        color: color,
        boxShadow: "0 0 0 2px #ffffff",
        borderRadius: '2px',
        letterSpacing: '.4em',
        textShadow: '1px 1px 3px',
        cursor: 'pointer',
        transition: "background-color 250ms ease-in-out",
        alignSelf: 'center',
        marginTop: "2%"

      };
      return isInverted ? invStyle : style;
    }
  }, {
    key: 'handleStringForUrlArray',
    value: function handleStringForUrlArray(string) {
      return Array.isArray(string) ? string : string.split(', ');
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(x) {
      this.props.handleScroll();
      var title = this.props.displayInfo.title;
      this.props.setActiveItem(title);
      this.props.closeSide();
      var current = this.state.isClicked;
      this.setState({
        isClicked: !current,
        isHovering: false
      });
    }
  }, {
    key: '_mouseEntered',
    value: function _mouseEntered(event) {

      event.preventDefault();
      this.setState({ isHovering: true });
    }
  }, {
    key: '_mouseLeft',
    value: function _mouseLeft(event) {

      event.preventDefault();
      this.setState({ isHovering: false });
    }
  }, {
    key: '_handleImages',
    value: function _handleImages(imageUrl) {

      return _react2.default.createElement('img', {
        src: imageUrl,
        height: this.props.windowHeight * .2,
        width: 'auto' });
    }
  }, {
    key: '_handleSummary',
    value: function _handleSummary() {

      var list = this.props.displayInfo.main.map(function (item, index) {
        if (item.subheader) {
          return _react2.default.createElement(
            'li',
            { key: Math.random() },
            item.subheader
          );
        }
      });

      return list;
    }
  }, {
    key: '_classNameAddition',
    value: function _classNameAddition(addition) {
      var classesSmash = (0, _classnames2.default)(addition, {
        hereHere: true,
        goGone: this.props.isActive != (this.props.displayInfo.title || null)

      });
      return classesSmash;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isLoaded: true });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        isClicked: nextProps.isBig
      });
    }
  }, {
    key: 'renderPreview',
    value: function renderPreview() {

      var mainContainerStyle = (0, _classnames2.default)({
        previewThumbContainer: true,
        fadeOut: !this.state.isLoaded,
        fadeIn: this.state.isLoaded

      });

      var imageStyle = this._handleImages(this.handleStringForUrlArray(this.props.displayInfo.previewContents.imageArrayPreview));
      var listSummary = this._handleSummary();

      return _react2.default.createElement(
        'div',
        {
          onMouseEnter: this._mouseEntered,
          onMouseLeave: this._mouseLeft,
          className: mainContainerStyle,
          style: { minHeight: this.props.windowHeight * .48 } },
        _react2.default.createElement(
          'div',
          { className: this._classNameAddition("seperator") },
          !this.state.isHovering ? _react2.default.createElement(
            'div',
            { className: 'previewImage' },
            imageStyle
          ) : null,
          _react2.default.createElement(
            'div',
            { className: this._classNameAddition("previewTextContainer") },
            _react2.default.createElement(
              'h2',
              null,
              this.props.displayInfo.previewContents.previewTitle
            ),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'em',
                null,
                this.props.displayInfo.previewContents.previewHeader
              )
            ),
            this.state.isHovering ? _react2.default.createElement(
              'ul',
              { className: 'previewThumbList' },
              _react2.default.createElement(
                'h4',
                null,
                'Contents:'
              ),
              listSummary
            ) : null,
            this.state.isHovering ? _react2.default.createElement(
              'div',
              { className: 'previewFooter' },
              _react2.default.createElement(
                'h3',
                null,
                this.props.displayInfo.previewContents.previewFooter
              )
            ) : null
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this._classNameAddition("previewThumbBtn"),
            onMouseEnter: this._mouseEntered,
            onClick: this._handleClick,
            style: this.state.isHovering ? this._buttonStyle(true, this.props.displayInfo.type) : this._buttonStyle(false, this.props.displayInfo.type) },
          'VIEW THIS ',
          this.props.displayInfo.type.toUpperCase()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.isClicked ? this.props.children : this.renderPreview()
      );
    }
  }]);

  return PreviewThumb;
}(_react2.default.Component);

exports.default = PreviewThumb;