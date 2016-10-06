'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routeUtilities = require('../routeUtilities');

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
  return c(require);
};
// import { injectAsyncReducer } from '../../store'
exports.default = {

  path: '/home',
  component: _Home2.default,
  getComponents: function getComponents(location, cb) {
    require.ensure(['./components/Home'], function (require) {
      var Home = require('./components/Home.js').default;
      console.log(Home, "admin");
      // let Creation = require('./components/Creation.js').default;
      // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

      cb(null, Home);
    });
  }
};