import React from 'react';
import {Map, fromJS} from 'immutable';
import {connect} from 'react-redux';
import makeStore from "../../logic/store";


import {changeView, changeLoadingStatus} from '../../logic/action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {btnStyles} from '../styles/_button';
import {PageSkeletonStyles} from '../styles/_PageSkeleton';


import Radium, {Style, StyleRoot} from 'radium';
import {styles} from '../styles/globalStyles';

//page styles
import newb from '../styles/globalStyles';


import {SplitContainer} from './SplitContainer';



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
    activeView: state.activeView,
    activeItem: state.activeItem,
    isLoading: state.isLoading,
    categories: state.categories,
    displayContent: state[ state.activeView ]
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    },
    changeViewClick: (nextView) => {
      dispatch(changeView(nextView));
    },
    //an in depth view of the item in the view
    getViewItemClick: (itemKey, viewOwner)=>{
      dispatch(getViewItem(itemKey, viewOwner));
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
