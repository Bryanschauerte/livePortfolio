import {List, Map} from 'immutable';

export function setCategoryEntries(state, category, entries){
  return state.set(category, List(entries));
}
export const contentStructure ={
  title:'',
  style:{},//style object
  type:'',//list/videos/codeShare/blogPost/future determains what component to use
  cards:[
    {
      header:'',
      subHead:'',
      sideNote:'',
      mainContent:'',
      userHasRead:false // boolean
    }
  ]//array of objects one obect per page

}

export const INITIAL_STATE= {
  about:[],
  blog:[],
  codeShare:[],
  future:[],
  activeView: 'about'

}
