import React from 'react';
import {Map, fromJS} from 'immutable';
import {connect} from 'react-redux';
import makeStore from "../../logic/store";
import {ViewBoxContainer} from './ViewBox';
import {changeView, changeLoadingStatus} from '../../logic/action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';
const store = makeStore();


const styles = {
  notLoading:{
    backgroundColor: 'green',
    WebkitTransition: 'all',
    msTransition: 'all'
  },
  yesLoading:{
    backgroundColor: 'red',
    WebkitTransition: 'all',
    msTransition: 'all'
  }
}
export const PageSkeleton = React.createClass({

  mixins:[PureRenderMixin],
  handleClick(){
    this.props.changeLoadingStatusClick();
  },

  render(){
    return(<div>
      <h2
        style={ (this.props.isLoading) ? styles.yesLoading : styles.notLoading }>
        Skeleton's active view: {this.props.activeView}
      </h2>
    <button
      onClick={this.handleClick}>
      Test Change loading status
    </button>
      <div>
        <ViewBoxContainer {...this.props}/></div>
      </div>);
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
    changeViewClick: (nextView) => {
      dispatch(changeView(nextView));
    },
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    }
  }
}

export const PageSkeletonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSkeleton);
