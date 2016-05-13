import {List, Map,fromJS,is,set} from 'immutable';

export function addCategoryEntry(state, category, entries){
  return state.updateIn([category], [], val => state.get(category).push(entries));
}

export function changeLoadingStatus(state){
  return state.updateIn(['isLoading'], false, val => !state.get('isLoading'))
}

export function changeView( state, viewSelection ){
  return state.updateIn(['activeView'],'About', val => viewSelection)
}

export function getViewContents( state, view ){
  return state.get(activeView);
}
export function setState(state, newState){
  return state.merge(newState);
}
export function getCategories(state){
  return state.get('categories');
}

 export const contentStructure =fromJS({
  title:'',
  style:{},//style object
  type:'',//list/videos/codeShare/blogPost/future determains what component to use
  cards:[{
    header:'',
    subHead:'',
    sideNote:'',
    mainContent:'',
    userHasRead:false // boolean to be set on local storage
  }]

})

 export const INITIAL_STATE= Map({
   categories:Map({
     'about':List(),
     'blog':List(),
     'codeShare':List(),
     'future':List()
   }),

  activeView: 'about',
  isLoading: true

})
