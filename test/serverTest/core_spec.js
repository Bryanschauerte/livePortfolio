import {List, Map} from 'immutable';
import {expect} from 'chai';

import {
  setCategoryEntries,
   contentStructure,
   changeView,
   INITIAL_STATE
  } from '../../logic/core';

describe('application logic', () => {

  describe('changes to correct View', ()=>{

    it('Starts at the about view', ()=>{

      expect(INITIAL_STATE).to.equal(fromJS({
        about:[],
        blog:[],
        codeShare:[],
        future:[],
        activeView: 'about'
      }))

    it('Changes activeView to target view', ()=>{
      const nextState = changeView(INITIAL_STATE, targetView);
      expect(nextState).to.equal(fromJS({
        about:[],
        blog:[],
        codeShare:[],
        future:[],
        activeView: targetView
      }))
    });

  });

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of(contentStructure, contentStructure);
      const category = 'about';
      // const blog = List.of(contentStructure, contentStructure);
      // const codeShare = List.of(contentStructure, contentStructure);
      // const future = List.of(contentStructure, contentStructure);

      const nextState = setCategoryEntries(state, category, entries);
      expect(nextState).to.equal(Map({
        about: List.of(contentStructure, contentStructure)
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const category = 'about';
      const entries = [contentStructure, contentStructure];
      const nextState = setCategoryEntries(state, category, entries);
      expect(nextState).to.equal(Map({
        about: List.of(contentStructure, contentStructure)
      }));
    });

  });

});
