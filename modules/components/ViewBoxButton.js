import React from 'react';
import Radium from 'radium';
import {btnStyles} from '../styles/_button';


let ViewBoxButton = React.createClass({

  getInitialState() {
    return {
      btnClicked:false
    };
  },
  handleClick(){
    this.props.viewHandler(this.props.viewControlled);
    this.setState({btnClicked:true})
  },
  getStyle(){
    return (this.props.activeView == this.props.viewControlled ? btnStyles.active : btnStyles.inactive)
  },
  render(){
    return(

      <button
        style={[btnStyles.base, this.getStyle()]}
        onClick={this.handleClick}>
        {this.props.viewControlled}
      </button>
    );
  }
})
export const ViewBoxBtn = Radium(ViewBoxButton);
