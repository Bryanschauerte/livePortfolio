'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _RootRoute = require('./routes/RootRoute');

var _RootRoute2 = _interopRequireDefault(_RootRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _window$location = window.location;
var pathname = _window$location.pathname;
var search = _window$location.search;
var hash = _window$location.hash;

var location = '' + pathname + search + hash;

(0, _reactRouter.match)({ routes: _RootRoute2.default, location: location }, function () {

  (0, _reactDom.render)(_react2.default.createElement(_reactRouter.Router, { routes: _RootRoute2.default, history: _reactRouter.browserHistory }), document.getElementById('app'));
});