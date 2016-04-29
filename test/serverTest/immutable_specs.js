import { expect } from "chai";
import { List, Map, update } from "immutable";

const contentTest ={
  title:'test1',
  style:{},//style object
  type:'',//list/videos/codeShare/blogPost/future determains what component to use
  cards:[
    {
      header:'',
      subHead:'',
      sideNote:'Just a Test',
      mainContent:'',
      userHasRead:false // boolean
    }
  ]//array of objects one obect per page

}

const contentStructure ={
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

describe('immutability', () => {

  describe('Content Tree', () => {

    // function addNewContent(currentState, newContent) {
    //   return currentState.set(
    //     'about', currentState.get('about').push(newContent)
    //   );
    // }

    function addNewContent(currentState, newContent) {
      return currentState.update('about', about => about.push(newContent));
    }

    it('is immutable', () => {
          let state = Map({
            about: List.of(contentStructure, contentStructure)
          });
          let nextState = addNewContent(state, contentTest);

          expect(nextState).to.equal(Map({
            about: List.of(
              contentStructure,
              contentStructure,
              contentTest
            )
          }));
          expect(state).to.equal(Map({
            about: List.of(
              contentStructure,
              contentStructure
            )
          }));
        });



  });

});
