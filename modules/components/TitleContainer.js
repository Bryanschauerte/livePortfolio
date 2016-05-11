import React from 'react';
import Radium from 'radium';


const Title = React.createClass({

  render(){
    return (
      <div style={this.props.styles.base}>
        <span style={this.props.styles.text}>Bryan Schauerte</span>
      </div>
    )
  }

});

export const TitleContainer = Radium(Title);
