import React from 'react';

export const ViewBoxButton = React.createClass({

  getInitialState() {
    return { clicked:false};
  },
  handleClick(){
    console.log("ding")
    this.setState({clicked:true})
  },
  render(){
    return(
      <button
        onClick={this.handleClick}>
        {this.props.viewControlled}
      </button>
    );
  }
})
