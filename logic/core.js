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
  return state.get(view);
}
export function setState(state, newState){
  return state.merge(newState);
}
export function getViewItem( state, itemLocation ){
  //return state.get([view,]); will be a deep map
  return List.of(["win"]);//temp data
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
  About:List.of(testContentStructure),
  Blog:List.of(),
  CodeShare:List.of(),
  Future:List.of(),
  activeView: 'About',
  isLoading: true,
  activeItem:''

})


export const testContentStructure =fromJS({
 title:'a Test To remember',
 style:{},//style object
 type:'blog',//list/videos/codeShare/blogPost/future determains what component to use
 cards:[{
   header:'The header is big',
   subHead:'The subHeader is small',
   sideNote:'and fyi',
   mainContent:["Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
,"It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to"],
   userHasRead:false // boolean to be set on local storage
 }]

})
