if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
// import { injectAsyncReducer } from '../../store'
import {ppHOC} from '../routeUtilities';

export default {

    path: '/landing',
    getComponents (location, cb) {
      require.ensure([
        './components/Landing'
        // './reducer'
      ], (require) => {
        // let Landing = require('./components/Landing').default
        // let SvgGenerator = '../../components/SvgGenerator'.default;
        let Landing = require('./components/Landing.js').default;
        // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})

        cb(null, Landing)
      })
    }
  }




//
// import Landing from './components/Landing'
//
// export default Landing
