import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {
    INITIAL_STATE,
    addCategoryEntry,
    contentStructure,
    setState,
    getViewContents,
    changeView,
    changeLoadingStatus} from '../../logic/core';


describe('application logic', () => {


  describe('setEntries', () => {

    it('adds an entry to the state', () => {
      const state = INITIAL_STATE;
      const entry = contentStructure;
      const category = 'about';

      const nextState = addCategoryEntry(state, category, entry);
      expect(nextState).to.equal(Map({
        about:List.of(fromJS({
          title:'',
          style:{},
          type:'',
          cards:[{
            header:'',
            subHead:'',
            sideNote:'',
            mainContent:'',
            userHasRead:false
          }]

        })
      ),
        blog:List.of(),
        codeShare:List.of(),
        future:List.of(),
        activeView: 'about',
        isLoading: true

      }));
    });


    it('Changes the view', () => {
      const state = INITIAL_STATE;
      const newView = 'blog';
      const nextState = changeView(state, newView);
      expect(nextState).to.equal(Map({
        about:List.of(),
        blog:List.of(),
        codeShare:List.of(),
        future:List.of(),
        activeView: 'blog',
        isLoading: true

      }));
    });


      it('returns the contents for a view', () => {
        const state = INITIAL_STATE;
        const pageOn = 'about';
        const nextState = getViewContents(state, pageOn);
        expect(nextState).to.equal(List.of())

    });
});


});
