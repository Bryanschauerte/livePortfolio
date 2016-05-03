import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {ViewBoxMenuContainer} from './ViewBoxMenu';

export const ViewBox = React.createClass({
  mixins:[PureRenderMixin],

  handleClick(){
    this.props.changeViewClick("hotdog");
  },
  render(){
    return(
      <div className ="viewBox">
      <ViewBoxMenuContainer/>
        <button onClick={this.handleClick}>ViewBox change activeView to 'hotdog'</button>
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
