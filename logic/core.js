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
     'About':{
       title:'About',
       header:"An intro to About",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and Immutable is cool but the docs are bad.',
       cards:[{
         style:[],
         title: "default",
         header:'some small phrase',
         subHead:'a little bit longer introduction to topic',
         sideNote:'this goes in s a side box next to the thing',
         mainContent:'hey there welcome to THIS  DEFAULT BOX. This is a lot of text about stuff. I am up way too late and working while watching a show with a terrible plot.',
         userHasRead:false // boolean to be set on local storage
       },
       {
         style:[],
         title: "default test 2",
         header:'some small phrase',
         subHead:'a little bit longer introduction to topic',
         sideNote:'this goes in s a side box next to the thing',
         mainContent:'hey there welcome to DEFAULT BOX Number 2!!. This is a lot of text about stuff. I am up way too late and Love React more than sleep.',
         userHasRead:false // boolean to be set on local storage
       }]
       //
     },
     'Blog':{
       title:'Blog',
       header:"an intro to the blog",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and this is a very dumb show that uses sex to sell a no story line plot.',
       cards:[{}]
     },
     'CodeShare':{
       title:'Code Share',
       header:"An intro to the Codeshare",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and this is a very dumb show that uses sex to sell a no story line plot.',
       cards:[{}]
     },
     'Projects':{
       title:'Projects',
       header:"An intro to the Projects",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and this is a very dumb show that uses sex to sell a no story line plot.',
       cards:[{}]
     },
     'Future':{
       title:'Future',
       header:"An Intro to my Future",
       mainContent:'hey there welcome to the site. This is a lot of text about stuff. I am up way too late and this is a very dumb show that uses sex to sell a no story line plot.',
       cards:[{}]
     }
   },
  activeView: 'About',
  isLoading: true,
  activeItemContents:[]

})
