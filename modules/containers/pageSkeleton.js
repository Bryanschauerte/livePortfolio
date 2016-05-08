import React from 'react';
import {Map, fromJS} from 'immutable';
import {connect} from 'react-redux';
import makeStore from "../../logic/store";


import {changeView, changeLoadingStatus} from '../../logic/action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {btnStyles} from '../styles/_button';
import {PageSkeletonStyles} from '../styles/_PageSkeleton';
import {VBContainer} from '../styles/_ViewBoxContainer';
import {SplitContStyles} from '../styles/_SplitContainer';
import Radium, {Style, StyleRoot} from 'radium';
import {styles} from '../styles/globalStyles';

import {ViewBoxContainer} from './ViewBox';
import {SplitContainer} from './SplitContainer';
import {BtnElementContainer} from './ButtonContainer';


const store = makeStore();

export const PageSkeleton = React.createClass({

  mixins:[PureRenderMixin],

  render(){
console.log(this.props, "skeleton")
    return(
      <StyleRoot>
        <Style rules={styles}/>
      <div style={PageSkeletonStyles.masterContainer} >


          <SplitContainer {...this.props} styles={SplitContStyles}/>
          <ViewBoxContainer styles={VBContainer} {...this.props}/>
          <BtnElementContainer {...this.props} styles = {btnStyles} />

      </div>

    </StyleRoot>
    );
  }
})

const mapStateToProps= (state)=> {
  return {
    activeView: state.getIn(['activeView']),
    activeItem: state.getIn(['activeItem']),
    isLoading: state.getIn(['isLoading']),
    displayContent: state.getIn([state
      .getIn(['activeView'])
    ])
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
    getViewItemClick: (itemLocation)=>{
      dispatch(getViewItem(itemLocation));
    },
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    }
  }
}

export const PageSkeletonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(PageSkeleton));
