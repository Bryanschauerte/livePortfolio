import React from 'react'
import { match, Router, browserHistory } from 'react-router'
import { render } from 'react-dom'

import routes from './routes/RootRoute'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`


match({ routes, location }, () => {
console.log(routes, "routes")
  render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
  )
})
