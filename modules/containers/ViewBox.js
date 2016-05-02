import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const ViewBox = React.createClass({
  mixins:[PureRenderMixin],

  handleClick(){
    this.props.changeViewClick("hotdog");
  },
  render(){
    return(<div>
      viewbox
      <button onClick={this.handleClick}>ViewBox change activeView to 'hotdog'</button>
      </div>)
  }
})

const mapStateToProps= (state)=> {
  return {
    activeView: state.getIn(['activeView']),
    isLoading: state.getIn(['isLoading']),
    displayContent: state.getIn([state
      .getIn(['activeView'])
    ])
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ViewBoxContainer  = connect(mapStateToProps)(ViewBox);
