'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SubmittingHOC(WrappedComponent) {

  return function (_React$Component) {
    _inherits(SubmittingContainer, _React$Component);

    function SubmittingContainer(props) {
      _classCallCheck(this, SubmittingContainer);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmittingContainer).call(this, props));

      _this.state = {
        makingRequest: false,
        result: false,
        hasErrorSending: false
      };
      return _this;
    }

    _createClass(SubmittingContainer, [{
      key: 'submit',
      value: function submit() {
        var bearer = localStorage.getItem('token');

        var headers = {

          'Authorization': 'Bearer ' + bearer
        };
        console.log(headers, "headers");
        var sendingData = this.props.sendData;
        var typeOfReq = sendingData.contentItems.beenSaved ? 'put' : 'post';
        var currentState = this.state;
        var self = this;

        if (sendingData.contentItems.beenSaved == false) {
          sendingData.contentItems.beenSaved = true;
        }

        if (currentState.hasErrorSending) {
          return this.clearSendData();
        }

        currentState.makingRequest = true;
        currentState.result = false;
        this.setState({ currentState: currentState });
        console.log(sendingData, "sendingData");
        _axios2.default[typeOfReq]('/maincontents', sendingData, { headers: headers }).then(function (res) {
          console.log(res, "res client");

          self.setState({
            makingRequest: false,
            result: true
          });
        }).catch(function (err) {
          sendingData.contentItems.beenSaved = false;
          currentState.makingRequest = false;
          currentState.result = false;
          currentState.hasErrorSending = true;
          self.setState({ currentState: currentState });
          console.log(err, "there was an error ");
        });
      }
    }, {
      key: 'clearSendData',
      value: function clearSendData() {
        this.setState({
          makingRequest: false,
          result: false,
          hasErrorSending: false
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var props = Object.assign({}, this.props, {
          submit: this.submit.bind(this),
          clearSendData: this.clearSendData.bind(this),
          btnState: this.state

        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(WrappedComponent, props)
        );
      }
    }]);

    return SubmittingContainer;
  }(_react2.default.Component);
}
exports.default = SubmittingHOC;