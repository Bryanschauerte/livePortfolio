import {Map, List, fromJS} from 'immutable';
//stucturing all content for the site in the contents folder.
//the idea is to create objects that will be rendered instead of hard coding
//them all in. Will also be about to sign in on a route and create a new page
// by filling in inputs.

//structure to follow
export const About = fromJS({
  title:'',
  style:{},//style object
  type:'',//list/videos/codeShare/blogPost/future determains what component to use
  cards:[{
    header:'',
    subHead:'',
    sideNote:'',
    mainContent:'',
    userHasRead:false // boolean will attach to local storage
  }]

})
