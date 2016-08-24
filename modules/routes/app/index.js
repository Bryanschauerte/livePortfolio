if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

// NOT NEEDED
export default {

    path: '/landing',
    getComponents (location, cb) {
      require.ensure([
        './components/App'

      ], (require) => {

        let App = require('./components/App.js').default;

        cb(null, App)
      })
    }
  }
