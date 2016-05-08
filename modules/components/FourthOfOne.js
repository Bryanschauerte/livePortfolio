import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {styles} from '../styles/_FourthOfOne';

const Fourth = React.createClass({

  render(){
    return(
      <div style={this.props.styles}>
        <div>
          <h2>title</h2>
          <p>some content to show stuff in the things</p>
          <button></button>
        </div>
      </div>
    );
  }
});


export const FourthOfOne = (Radium(Fourth));
