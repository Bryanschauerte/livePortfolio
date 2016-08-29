// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from './app/components/App'
import Landing from './landing/components/Landing'

export default {
  path: '/',
  component: App,
  getChildRoutes (location, cb) {

    require.ensure([], (require) => {
      cb(null, [
        // require('./home').default,


        require('./landing').default,
        require('./admin').default


        // ,require('./notFound').default

      ])
    })
  },

  indexRoute: {
    component: Landing
  }
}
