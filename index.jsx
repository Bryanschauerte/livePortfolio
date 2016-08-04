import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import routes from "./modules/routes";




//
// function select(state) {
//   return state
// }
//
// let currentValue
// function handleChange() {
//   let previousValue = currentValue
//   currentValue = store.getState()
//   if (previousValue !== currentValue) {
//     store.dispatch(setState(previousValue, currentValue));
//   }
// }
//
// let unsubscribe = store.subscribe(handleChange)
// handleChange()
//




render(

    <Router routes={routes} history={browserHistory}/>,document.getElementById('app')
 )
// NODE_ENV=production npm start  set the var to production then start
