'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./app/components/App');

var _App2 = _interopRequireDefault(_App);

var _Landing = require('./landing/components/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
  return c(require);
};

exports.default = {
  path: '/',
  component: _App2.default,
  getChildRoutes: function getChildRoutes(location, cb) {

    require.ensure([], function (require) {
      cb(null, [
      // require('./home').default,


      require('./landing').default, require('./admin').default, require('./home').default]);
    });
  },


  indexRoute: {
    component: _Landing2.default
  }
};