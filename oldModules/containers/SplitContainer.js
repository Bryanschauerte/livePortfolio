import React from 'react';
import Radium from 'radium';
import {styles} from '../styles/_SplitContainer';
import {FourthOfOne} from '../components/FourthOfOne';
import{TopLeftContainer} from '../components/TopLeft';
import {TitleContainer} from "../components/TitleContainer";
import {TitleStyle} from '../styles/_TitleContainer';

const Split = React.createClass({

  render(){
    return(
      <div style={this.props.styles.base}>
          <TitleContainer styles={TitleStyle}/>
          <TopLeftContainer {...this.props} styles={this.props.styles.topBox}/>
          <FourthOfOne {...this.props} styles={this.props.styles.btmBox}/>
      </div>
    );
  }
});


export const SplitContainer = (Radium(Split));
