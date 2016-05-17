import React from 'react';
import Radium from 'radium';
import {AboutStyle} from '../styles/_About.js';

 const Display = React.createClass({

  render(){

    return(
      <div style={this.props.styles.outerContainer}>
        <h1 style = {this.props.styles.title}>
          {this.props.content.get('title')}
        </h1><br />

        <div style={this.props.styles.innerContainer}>
          <h2 style ={this.props.styles.header}>
            {this.props.content.get('header')}
          </h2>
          <h3 style={this.props.styles.subHead}>
            {this.props.content.get('subHead')}
          </h3><br />
          <div style={this.props.styles.content}>
            <p> {this.props.content.get('mainContent')}</p>

            </div>
        </div>
      </div>
    );
  }
})
export const DisplayContent = Radium(Display);
