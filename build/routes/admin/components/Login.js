'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

    _this.state = {
      username: '',
      password: '',
      jwt: null,
      loginStatus: null
    };
    _this.checkLocalStorage = _this.checkLocalStorage.bind(_this);
    _this.loginUserFailure = _this.loginUserFailure.bind(_this);
    _this.loginUser = _this.loginUser.bind(_this);
    _this.logout = _this.logout.bind(_this);
    _this._handleLoginChange = _this._handleLoginChange.bind(_this);
    _this._handlePasswordChange = _this._handlePasswordChange.bind(_this);

    return _this;
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.checkLocalStorage();
    }
  }, {
    key: '_handleLoginChange',
    value: function _handleLoginChange(e) {

      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: '_handlePasswordChange',
    value: function _handlePasswordChange(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: 'checkLocalStorage',
    value: function checkLocalStorage() {
      var jwt = localStorage.getItem('token');
      var admin = localStorage.getItem('admin');
      var tempState = this.state;

      if (jwt) {
        var adminStatus = admin ? 'Admin' : 'Guest';
        tempState.jwt = jwt;
        tempState.loginStatus = adminStatus;
        this.setState({ tempState: tempState });
      }
    }
  }, {
    key: 'loginUserFailure',
    value: function loginUserFailure() {
      localStorage.removeItem('token');
      this.setState({
        username: '',
        password: '',
        jwt: null,
        loginStatus: null
      });
    }
  }, {
    key: 'logout',
    value: function logout(e) {
      e.preventDefault();
      localStorage.removeItem('token');
      this.setState({
        username: '',
        password: '',
        jwt: null,
        loginStatus: null
      });
    }
  }, {
    key: 'loginUser',
    value: function loginUser(e) {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      var self = this;
      (0, _axios2.default)({
        method: 'post',
        url: '/login',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }).then(function (res, err) {
        var token = res.data.token;
        var admin = res.data.admin;
        localStorage.setItem('token', token);
        localStorage.setItem('admin', token);
        var adminStatus = res.data.admin ? 'Admin' : 'Guest';
        self.setState({
          jwt: res.data.token,
          loginStatus: adminStatus
        });
      }).catch(function (err) {
        self.setState({
          loginStatus: 'wrong'
        });
        self.loginUserFailure();
        console.log(err, "there was an error ");
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _React$createElement;

      var loginFeildsClasses = (0, _classnames2.default)({
        'loginBit': true,
        'loginHide': this.state.jwt
      });

      var inputClasses = (0, _classnames2.default)({
        'incorrectInput': this.state.loginStatus == 'wrong'
      });

      return _react2.default.createElement(
        'div',
        { className: 'LoginContainer' },
        this.state.jwt ? _react2.default.createElement(
          'h3',
          null,
          'Welcome ',
          this.state.loginStatus,
          '!'
        ) : _react2.default.createElement(
          'h3',
          null,
          'Login to submit to database'
        ),
        _react2.default.createElement(
          'form',
          { role: 'form' },
          _react2.default.createElement(
            'div',
            { className: loginFeildsClasses },
            _react2.default.createElement(
              'label',
              null,
              'Username'
            ),
            _react2.default.createElement('input', (_React$createElement = { type: 'text',
              className: inputClasses
            }, _defineProperty(_React$createElement, 'className', 'loginInput'), _defineProperty(_React$createElement, 'value', this.state.username), _defineProperty(_React$createElement, 'onChange', this._handleLoginChange), _defineProperty(_React$createElement, 'placeholder', 'Username'), _React$createElement))
          ),
          _react2.default.createElement(
            'div',
            { className: loginFeildsClasses },
            _react2.default.createElement(
              'label',
              null,
              'Password'
            ),
            _react2.default.createElement('input', {
              className: inputClasses,
              onChange: this._handlePasswordChange,
              value: this.state.password,
              type: 'password',
              placeholder: 'Password' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'loginBtns' },
            _react2.default.createElement(
              'button',
              { className: this.state.jwt ? 'loginHide' : null, onClick: this.loginUser },
              'Submit'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.logout },
              'Logout'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;