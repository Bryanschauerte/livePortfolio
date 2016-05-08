import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {ViewBoxMenuContainer} from './ViewBoxMenu';

export const ViewBox = React.createClass({
  mixins:[PureRenderMixin],

  handleClick(){

  },
  render(){

    return(
      <div style ={this.props.styles.base}>
      <ViewBoxMenuContainer {...this.props}/>

      </div>)
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

export const ViewBoxContainer  = connect(mapStateToProps)(ViewBox);
