if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
// import { injectAsyncReducer } from '../../store'
import {ppHOC} from '../routeUtilities';
import Home from './components/Home'
export default {

    path: '/home',
    component: Home,
    getComponents (location, cb) {
      require.ensure([
        './components/Home'
      ], (require) => {
        let Home = require('./components/Home.js').default;
        console.log(Home, "admin")
        // let Creation = require('./components/Creation.js').default;
        // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

        cb(null,  Home)
      })
    }
  }
