if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
// import { injectAsyncReducer } from '../../store'
import {ppHOC} from '../routeUtilities';

export default {

    path: '/Admin',
    getComponents (location, cb) {
      require.ensure([
        './components/Admin'
        // './reducer'
      ], (require) => {
        let Admin = require('./components/Admin.js').default;
        // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

        cb(null, Admin)
      })
    }
  }




//
// import Landing from './components/Landing'
//
// export default Landing
