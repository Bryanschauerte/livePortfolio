import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import classNames from 'classnames';

const ViewBoxMenu = React.createClass({

  mixins:[PureRenderMixin],

  render(){
    // map of state's categories
    // need a 'dumb' component for the category items
    return (
      <div>
        <div>
          top components menu buttons to choose view
        </div>
        <div>
          rendered items for the view
        </div>
      </div>
    )
  }
})

const mapStateToProps= (state)=> {
  return {
    activeView: state.getIn(['activeView']),
    isLoading: state.getIn(['isLoading']),
    about: state.getIn(['isLoading']),
    blog: state.getIn(['isLoading']),
    codeShare: state.getIn(['isLoading']),
    future: state.getIn(['isLoading'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeViewClick: (nextView) => {
      dispatch(changeView(nextView));
    },
    changeLoadingStatusClick: ()=>{
      dispatch(changeLoadingStatus());
    },
    getViewItemClick: ()=>{
      dispatch(getViewItem(itemLocation));
    }
  }
}
export const ViewBoxMenuContainer = connect(mapStateToProps, mapDispatchToProps)(ViewBoxMenu);
