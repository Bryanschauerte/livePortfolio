import React from 'react'
import { Route, browserHistory, IndexRoute } from 'react-router'
import {PageSkeletonContainer} from './containers/pageSkeleton';


module.exports = (
  <Route path="/" component={PageSkeletonContainer}>
  </Route>
)
