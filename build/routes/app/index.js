'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
  return c(require);
};

// NOT NEEDED
exports.default = {

  path: '/landing',
  getComponents: function getComponents(location, cb) {
    require.ensure(['./components/App'], function (require) {

      var App = require('./components/App.js').default;

      cb(null, App);
    });
  }
};