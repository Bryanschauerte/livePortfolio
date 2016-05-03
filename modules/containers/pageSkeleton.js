import React from 'react';
import {Map, fromJS} from 'immutable';
import {connect} from 'react-redux';
import makeStore from "../../logic/store";
import {ViewBoxContainer} from './ViewBox';
import {changeView, changeLoadingStatus} from '../../logic/action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {masterContainer} from '../styles/_PageSkeleton';


const store = makeStore();

export const PageSkeleton = React.createClass({

  mixins:[PureRenderMixin],

  render(){
    return(
      <div className="masterContainer">
        <div className="sideContainer">
              <h2>
                Skeleton's active view: {this.props.activeView}
              </h2>
        </div>
        <div className="viewContainer">
          <ViewBoxContainer className ="viewBox" {...this.props}/>
        </div>
      </div>
    );
  }
})

const mapStateToProps= (state)=> {
  return {
    activeView: state.getIn(['activeView']),
    isLoading: state.getIn(['isLoading'])
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    }
  }
}

export const PageSkeletonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSkeleton);
