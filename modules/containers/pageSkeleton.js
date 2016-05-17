import React from 'react';
import {Map, List, fromJS} from 'immutable';
import {connect} from 'react-redux';
import makeStore from "../../logic/store";
import { bindActionCreators } from 'redux'

//

import {getActiveItemContents, getViewContents, changeLoadingStatus, changeView, getViewItem, changeActiveItem} from '../../logic/action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {btnStyles} from '../styles/_button';
import {PageSkeletonStyles} from '../styles/_PageSkeleton';


import Radium, {Style, StyleRoot} from 'radium';
import {styles} from '../styles/globalStyles';

//page styles
import newb from '../styles/globalStyles';


import {SplitContainer} from './SplitContainer';
import * as actionCreators from '../../logic/action_creators';


const store = makeStore();

export const PageSkeleton = React.createClass({

  mixins:[PureRenderMixin],

  render(){

    return(
      <StyleRoot>
        <Style rules={styles}/>

        <div style={PageSkeletonStyles.masterContainer} >
          <SplitContainer {...this.props}/>
      </div>

    </StyleRoot>
    );
  }
})

const mapStateToProps= (state)=> {
  return {
    activeView: state.get('activeView'),
    activeItem: state.get('activeItem'),
    isLoading: state.get('isLoading'),
    categories: state.get('categories'),
    activeItemContents: state.get('activeItemContents')

  };
}

// const { isFollowing } = stateProps;
// const { dispatch } = dispatchProps;
// const { id } = ownProps;

const mergeProps= (stateProps, dispatchProps) => {

  return {

    activeView: stateProps.activeView,
    activeItem: stateProps.activeItem,
    isLoading: stateProps.isLoading,
    categories: stateProps.categories,
    activeItemContents: stateProps.activeItemContents


  }
}


const mapDispatchToProps = (dispatch)=> {
  return {

    changeViewClick: (nextView) => {
      dispatch(changeView(nextView));
    },
    getActiveItemClick: ( activeItem )=>{
      dispatch(getActiveItemContents( activeItem ));
    },
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    },
    //to see the different objects tiltles in the category, not the actual contents
    getViewContentClick: (viewSection)=>{
      dispatch(getViewContents(viewSection));
    }
  }
}

export const PageSkeletonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(PageSkeleton));
