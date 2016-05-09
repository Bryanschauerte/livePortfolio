import React from 'react';
import Radium from 'radium';
import {styles} from '../styles/_SplitContainer';
import {FourthOfOne} from '../components/FourthOfOne';
import{TopLeftContainer} from '../components/TopLeft';

const Split = React.createClass({

  render(){
    return(
      <div style={this.props.styles.base}>
          <TopLeftContainer {...this.props} styles={this.props.styles.topBox}/>
          <FourthOfOne {...this.props} styles={this.props.styles.btmBox}/>
      </div>
    );
  }
});


export const SplitContainer = (Radium(Split));
