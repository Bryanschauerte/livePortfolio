import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import routes from "./modules/routes";
import makeStore from "./logic/store";
import { Provider } from 'react-redux';
import {getState, getInitialState,setState} from './logic/action_creators';

const store = makeStore();
store.dispatch(getState());


function select(state) {
  return state
}

let currentValue
function handleChange() {
  let previousValue = currentValue
  currentValue = store.getState()
  if (previousValue !== currentValue) {
    store.dispatch(setState(previousValue, currentValue));
    console.log('Some deep nested property changed from', previousValue, 'to', currentValue)
  }
}

let unsubscribe = store.subscribe(handleChange)
handleChange()





render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
  ,
   document.getElementById('app')
 )
// NODE_ENV=production npm start  set the var to production then start
