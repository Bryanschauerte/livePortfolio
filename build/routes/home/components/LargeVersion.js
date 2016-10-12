'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CodePenHandler = require('./CodePenHandler');

var _CodePenHandler2 = _interopRequireDefault(_CodePenHandler);

var _GistAddition = require('./GistAddition');

var _GistAddition2 = _interopRequireDefault(_GistAddition);

var _ImageSlider = require('./ImageSlider');

var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LargeVersion = function (_React$Component) {
  _inherits(LargeVersion, _React$Component);

  function LargeVersion(props) {
    _classCallCheck(this, LargeVersion);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LargeVersion).call(this, props));

    _this.state = {};
    _this._handleClose = _this._handleClose.bind(_this);
    _this._handleStringForUrl = _this._handleStringForUrl.bind(_this);
    _this.wrapLinks = _this.wrapLinks.bind(_this);
    return _this;
  }

  _createClass(LargeVersion, [{
    key: '_handleStringForUrl',
    value: function _handleStringForUrl(string) {
      var index = arguments.length <= 1 || arguments[1] === undefined ? 'all' : arguments[1];


      var arr = string.split(', ');
      if (index != 'all') {
        return arr[index];
      }
      return arr;
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.handleClose();
    }
  }, {
    key: 'wrapLinks',
    value: function wrapLinks(string, linkArray) {

      if (!linkArray) {
        return string;
      }

      var searchTarget = /(##)/g;
      var stringTolinkArray = this._handleStringForUrl(linkArray);
      var num = 0;
      var indexOfArr = 0;
      var linkedString = string.replace(searchTarget, function () {

        var firstOne = num % 2 == 0;
        var aStartTag = '<a rel=\'external\' target=\'_blank\' href=\'' + stringTolinkArray[indexOfArr] + '\'>';
        var aEndTage = '</a>';
        num += 1;
        if (firstOne) {
          indexOfArr += 1;
        }
        return firstOne ? aStartTag : aEndTage;
      });

      return linkedString;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'LV_OuterCont' },
        _react2.default.createElement(
          'div',
          { className: 'LV_innerContents' },
          _react2.default.createElement(
            'div',
            { className: 'LS_titleOuter' },
            this.props.displayInfo.title
          ),
          _react2.default.createElement('div', {
            className: 'closeBtn fa fa-compress fa-2x',
            onClick: this.props.handleClose }),
          this.props.displayInfo.main.map(function (contentItem, index) {
            return _react2.default.createElement(
              'div',
              { className: 'LS_contents', key: Math.random() * index },
              _react2.default.createElement(
                'div',
                { className: 'LScontentItems' },
                contentItem.subHeader ? _react2.default.createElement(
                  'div',
                  { className: 'innerContents_headerContents' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    contentItem.subHeader
                  )
                ) : null,
                contentItem.problem ? _react2.default.createElement(
                  'div',
                  { className: 'problemSolution' },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'h2',
                        null,
                        'Problem:'
                      ),
                      ' ',
                      contentItem.problem
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'h2',
                        null,
                        'Solution:'
                      ),
                      ' ',
                      contentItem.solution
                    )
                  )
                ) : null,
                contentItem.subheader ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'h1',
                    null,
                    contentItem.subheader
                  )
                ) : null,
                contentItem.contents ? _react2.default.createElement(
                  'div',
                  { className: 'paragraph' },
                  _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: _this2.wrapLinks(contentItem.contents, contentItem.linksPresent) } })
                ) : null,
                contentItem.containsCodePen ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_CodePenHandler2.default, {
                    style: { height: 265, width: "100%" },
                    iframeSrc: _this2._handleStringForUrl(contentItem.containsCodePen, 0),
                    userPen: 'http://codepen.io/BSchauerte',
                    penHref: _this2._handleStringForUrl(contentItem.containsCodePen, 1) }),
                  _react2.default.createElement(
                    'h4',
                    null,
                    contentItem.mediaTitle
                  )
                ) : null,
                contentItem.gistId ? _react2.default.createElement(
                  'div',
                  { className: 'addSideMargin' },
                  _react2.default.createElement(_GistAddition2.default, { gistId: contentItem.gistId }),
                  _react2.default.createElement(
                    'h4',
                    null,
                    contentItem.mediaTitle
                  )
                ) : null,
                contentItem.containsMedia == 'video' ? _react2.default.createElement(
                  'div',
                  { className: 'addSideMargin' },
                  _react2.default.createElement(
                    'div',
                    { className: 'paragraph' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      contentItem.mediaTitle
                    )
                  ),
                  _react2.default.createElement('video', {
                    src: contentItem.links,
                    width: '100%',
                    type: 'video/mp4',
                    controls: true })
                ) : null,
                contentItem.containsMedia == 'images' ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'paragraph' },
                    _react2.default.createElement(
                      'h1',
                      null,
                      contentItem.mediaTitle
                    )
                  ),
                  _react2.default.createElement(_ImageSlider2.default, { size: { height: 'auto', width: '50%' },
                    images: _this2._handleStringForUrl(contentItem.links) })
                ) : null
              ),
              contentItem.conclusion ? _react2.default.createElement(
                'div',
                { className: 'LScontentItems' },
                _react2.default.createElement(
                  'p',
                  { className: 'paragraph' },
                  contentItem.conclusion
                )
              ) : null
            );
          }),
          this.props.displayInfo.footer ? _react2.default.createElement(
            'div',
            { className: 'footer' },
            _react2.default.createElement(
              'div',
              { className: 'footerDisplay' },
              _react2.default.createElement(
                'h4',
                null,
                this.props.displayInfo.footer
              )
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: 'mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site',
                    target: '_top' },
                  _react2.default.createElement('i', { className: 'fa fa-envelope fa-2x', 'aria-hidden': 'true' })
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: this.props.displayInfo.linkSource, target: '_blank' },
                  _react2.default.createElement('i', { className: 'fa fa-github-square fa-2x', 'aria-hidden': 'true' })
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://www.linkedin.com/in/bryanschauerte',
                    target: '_blank' },
                  _react2.default.createElement('i', { className: 'fa fa-linkedin fa-2x', 'aria-hidden': 'true' })
                )
              )
            )
          ) : null
        )
      );
    }
  }]);

  return LargeVersion;
}(_react2.default.Component);

exports.default = LargeVersion;