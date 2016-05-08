import React from 'react';
import Radium from 'radium';
import {styles} from '../styles/_SplitContainer';
import {FourthOfOne} from '../components/FourthOfOne';

const Split = React.createClass({

  render(){
    return(
      <div style={this.props.styles.base}>
          <FourthOfOne {...this.props} styles={this.props.styles.topBox}/>
          <FourthOfOne {...this.props} styles={this.props.styles.btmBox}/>
      </div>
    );
  }
});


export const SplitContainer = (Radium(Split));
