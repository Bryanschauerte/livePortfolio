
import {Map, List, fromJS} from 'immutable';
import {
  INITIAL_STATE_TEST,
    INITIAL_STATE,
    addCategoryEntry,
    contentStructure,
    getState,
    getViewContents,
    changeView,
    changeLoadingStatus,
    getViewItem} from './core';

export default function reducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'SET_CATEGORY_ENTRIES':
      return setCategoryEntries(state, action.entries);
    case 'CHANGE_VIEW':
      return changeView(state, action.entry);
    case 'GET_VIEW_CONTENTS':
      return getViewContents(state, action.entry)
    case 'CHANGE_LOADING_STATUS':
      return changeLoadingStatus(state)
    case 'GET_STATE':
      return getState(state)
    case 'GET_VIEW_ITEM':
      return getViewItem(state, action.itemTitle, action.viewOwner)

    }
  return state;
}
