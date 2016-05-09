
import {Map, List, fromJS} from 'immutable';
import {
  INITIAL_STATE_TEST,
    INITIAL_STATE,
    addCategoryEntry,
    contentStructure,
    setState,
    getViewContents,
    changeView,
    changeLoadingStatus,
    getViewItem} from './core';

export default function reducer(state = INITIAL_STATE_TEST, action){
  switch (action.type) {
    case 'SET_CATEGORY_ENTRIES':
      return setCategoryEntries(state, action.entries);
    case 'CHANGE_VIEW':
      return changeView(state, action.entry);
    case 'GET_VIEW_CONTENTS':
      return getViewContents(state, action.entry)
    case 'CHANGE_LOADING_STATUS':
      return changeLoadingStatus(state)
    case 'SET_STATE':
      return setState(state, action.entry)
    case 'GET_VIEW_ITEM':
      return getViewItem(state, action.itemKey, action.viewOwner)

    }
  return state;
}
