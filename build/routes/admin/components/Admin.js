'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Creation = require('./Creation');

var _Creation2 = _interopRequireDefault(_Creation);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admin = function (_React$Component) {
  _inherits(Admin, _React$Component);

  function Admin(props) {
    _classCallCheck(this, Admin);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Admin).call(this, props));

    _this.state = {

      mode: "adding",
      dataBaseContents: [],
      selected: null,
      isLoaded: false,
      token: null
    };

    _this._changeMode = _this._changeMode.bind(_this);
    _this._requestAllContents = _this._requestAllContents.bind(_this);
    _this._handleSelectItem = _this._handleSelectItem.bind(_this);
    _this._handleFeildRendering = _this._handleFeildRendering.bind(_this);
    _this.checkTokenStatus = _this.checkTokenStatus.bind(_this);

    return _this;
  }

  _createClass(Admin, [{
    key: '_handleFeildRendering',
    value: function _handleFeildRendering(hasSelected) {
      var emptyData = {
        title: '',
        footer: '',
        techStack: '',
        link: '',
        type: '',
        beenSaved: false,
        main: [{
          subheader: '',
          links: '',
          contents: '',
          linksPresent: '',
          containsCodePen: false,
          containsMedia: '',
          mediaTitle: '',
          problem: '',
          solution: '',
          conclusion: ''
        }],

        previewContents: {
          previewTitle: '',
          previewHeader: '',
          previewFooter: '',
          previewExtra: '',
          imageArrayPreview: ''
        }

      };
      return hasSelected ? this.state.selected : { contentItems: emptyData };
    }
  }, {
    key: '_handleSelectItem',
    value: function _handleSelectItem(previewItem) {

      this.setState({
        selected: previewItem

      });
    }
  }, {
    key: '_requestAllContents',
    value: function _requestAllContents() {
      var _this2 = this;

      _axios2.default.get('/maincontents').then(function (response) {

        var dbReturn = response.data;
        _this2.setState({
          dataBaseContents: dbReturn,
          isLoaded: true
        });
      });
    }
  }, {
    key: 'checkTokenStatus',
    value: function checkTokenStatus() {
      var tempState = this.state;
      var token = sessionStorage.getItem('jwtToken');
      if (token) {
        tempState.token = token;
      }
      this.setState(tempState);
    }
  }, {
    key: '_changeMode',
    value: function _changeMode() {
      var currentState = this.state;

      if (currentState.mode == 'adding') {
        currentState.mode = "reviewing";
      } else if (currentState.mode == 'reviewing') {

        currentState.mode = 'adding';
      }

      this.setState({ currentState: currentState });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkTokenStatus();
      this._requestAllContents();
      // ask to log in and if not right, send back to home
    }
  }, {
    key: 'render',
    value: function render() {

      var contents = this.state.dataBaseContents;
      var adminIndex = 0;
      var itemToEdit = this._handleFeildRendering(this.state.selected);

      var navBtnsClasses = (0, _classnames2.default)({
        'adminNavBtns': true
      });

      return _react2.default.createElement(
        'div',
        { className: 'adminContainer' },
        _react2.default.createElement(
          'div',
          { className: 'adminSections' },
          _react2.default.createElement(
            'div',
            { className: 'adminCreationContainer' },
            _react2.default.createElement(
              'div',
              { className: 'adminCreationInnerContainer' },
              this.state.isLoaded ? _react2.default.createElement(_Creation2.default, { reload: this._requestAllContents, feilds: itemToEdit }) : null
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'adminPreviewContainer' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_Login2.default, null)
            ),
            this.state.isLoaded ? _react2.default.createElement(_Preview2.default, {
              getItemTarget: this._handleSelectItem,
              showItems: 'true',
              infoArray: contents }) : null
          ),
          _react2.default.createElement('div', null)
        )
      );
    }
  }]);

  return Admin;
}(_react2.default.Component);

exports.default = Admin;