import React from 'react';
import Radium from 'radium';
import {actions} from "../styles/_button";


let ViewBoxButton = React.createClass({

  handleClick(){
    this.props.btnPassBackFunc(this.props.passBack);
  },
  getStyle(){
    return (
      this.props.activeView == this.props.passBack ?
       this.props.btnStyles.active : this.props.btnStyles.inactive
     );
  },
  render(){
    return(

      <button
        style={[this.props.btnStyles.base,actions.btnAction, this.getStyle()]}
        onClick={this.handleClick}>
        {this.props.passBack}
      </button>
    );
  }
})
export const ViewBoxBtn = Radium(ViewBoxButton);
