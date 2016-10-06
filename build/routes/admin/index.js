'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routeUtilities = require('../routeUtilities');

var _Admin = require('./components/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
  return c(require);
};
// import { injectAsyncReducer } from '../../store'


//const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__); in env

exports.default = {

  path: '/admin',
  component: _Admin2.default,
  getComponents: function getComponents(location, cb) {
    require.ensure([], function (require) {
      var Admin = require('./components/Admin.js').default;
      console.log(Admin, "admin");
      // let Creation = require('./components/Creation.js').default;
      // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

      cb(null, Admin);
    });
  }
};