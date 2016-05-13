import {Map, List, fromJS} from 'immutable';
import {
    INITIAL_STATE,
    addCategoryEntry,
    contentStructure,
    setState,
    getViewContents,
    changeView,
    changeLoadingStatus} from './core';

export default function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
case 'GET_CATEGORY':
  return getCategory(state);
case 'CHANGE_VIEW':
  return changeView(state, action.entry);
case 'GET_VIEW_CONTENTS':
  return getViewContents(state, action.entry)
case 'CHANGE_LOADING_STATUS':
  return changeLoadingStatus(state)
case 'SET_STATE':
  return setState(state, action.entry);

}
return state;
}
