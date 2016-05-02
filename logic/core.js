import {List, Map,fromJS,is,set} from 'immutable';

export function addCategoryEntry(state, category, entries){
  return state.updateIn([category], [], val => state.get(category).push(entries));
}
 
export function changeLoadingStatus(state){
  return state.updateIn(['isLoading'], false, val => !state.get('isLoading'))
}

export function changeView( state, viewSelection ){
  return state.updateIn(['activeView'],'about', val => viewSelection)
}

export function getViewContents( state, view ){
  return state.get(view);
}
export function setState(state, newState){
  return state.merge(newState);
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
  about:List.of(),
  blog:List.of(),
  codeShare:List.of(),
  future:List.of(),
  activeView: 'about',
  isLoading: true

})
