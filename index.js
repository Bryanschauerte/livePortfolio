import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import routes from "./modules/routes"

render(
  <Router routes={routes} history={browserHistory}/>,
   document.getElementById('app')
 )
// NODE_ENV=production npm start
