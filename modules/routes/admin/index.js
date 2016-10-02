if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
// import { injectAsyncReducer } from '../../store'
import {ppHOC} from '../routeUtilities';
import Admin from './components/Admin';

//const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__); in env

export default {

    path: '/admin',
    component: Admin,
    getComponents (location, cb) {
      require.ensure([], (require) => {
        let Admin = require('./components/Admin.js').default;
        console.log(Admin, "admin")
        // let Creation = require('./components/Creation.js').default;
        // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

        cb(null,  Admin)
      })
    }
  }
