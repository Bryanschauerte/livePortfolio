import {List, Map,fromJS,is,set} from 'immutable';

export function addCategoryEntry(state, category, entries){
  let newState = state;
  newState[category].push(entries);
  return newState
}

export function changeLoadingStatus(state){
  let newState = state;
  newState.isLoading = !state.isLoading;
  return newState;
}

export function changeView( state, viewSelection ){
  let newState = state;
  newState.activeView == '' ?
  newState.activeView = "About"
  : newState.activeView = viewSelection;
  return newState;
}

export function getViewContents( state, view ){
  return state[view];
}
export function getState(state){
//this needs to be cleaned up to replace only diffs
  return state;
}
export function getViewItem( state, itemKey, viewOwner ){
  let newState = state;
  let parts =  newState.categories[viewOwner];
  for(var i =0; i < parts.length; i++){
    if (parts[i].title == itemKey){
      return parts[i];
    }
  }
  return 0;
}



 export const INITIAL_STATE_TEST= Map({
  About:List.of(Map().set(List.of(0), testContentStructure)),
  Blog:List.of(),
  CodeShare:List.of(),
  Future:List.of(),
  activeView: 'About',
  isLoading: true,
  activeItem:''

})

 export const contentStructure =fromJS({
  title:'',
  style:{},//style object
  type:'',//list/videos/codeShare/blogPost/future determains what component to use
  cards:[{
    title:'',
    header:'',
    sideNote:'',
    mainContent:'',
    userHasRead:false // boolean to be set on local storage
  }]

})

 export const INITIAL_STATE= {
  categories:{
     About:[],
     Blog:[],
     CodeShare:[],
     Future:[]
   },
  activeView: 'About',
  isLoading: true,
  activeItem:''

}


export const testContentStructure =fromJS({
 title:'a Test To remember',
 style:'',//style object
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
