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
export function getActiveItemContents( state, activeItem ){
  return state.updateIn(['activeItemContents'],[], val => activeItem)
}
export function setState(state, newState){
  return state.merge(newState);
}
export function getCategories(state){
  return state.get('categories');

}

 export const INITIAL_STATE= fromJS({
   categories:{
     'About':[{
       title:'About One',
       header:"An intro to About",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and Immutable is cool but the docs are bad.'

       //
     }],
     'Blog':[{
       title:'Blog One',
       header:"An intro to About",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and Immutable is cool but the docs are bad.'

       //
     }],
     'CodeShare':[{
       title:'CodeShare One',
       header:"An intro to About",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and Immutable is cool but the docs are bad.'

       //
     }],
     'Projects':[{
       title:'Projects One',
       header:"An intro to About",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and Immutable is cool but the docs are bad.'

       //
     }],
     'Future':[{
       title:'Future One',
       header:"An intro to About",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and Immutable is cool but the docs are bad.'

       //
     }],
   },
  activeView: 'About',
  isLoading: true,
  activeItemContents:[]

})
