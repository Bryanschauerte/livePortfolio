'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routeUtilities = require('../routeUtilities');

if (typeof require.ensure !== 'function') require.ensure = function (d, c) {
  return c(require);
};
// import { injectAsyncReducer } from '../../store'
exports.default = {

  path: '/landing',
  getComponents: function getComponents(location, cb) {
    require.ensure(['./components/Landing'
    // './reducer'
    ], function (require) {
      // let Landing = require('./components/Landing').default
      // let SvgGenerator = '../../components/SvgGenerator'.default;
      var Landing = require('./components/Landing.js').default;
      // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

      cb(null, Landing);
    });
  }
};

//
// import Landing from './components/Landing'
//
// export default Landing