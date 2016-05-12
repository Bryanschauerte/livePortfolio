import React from 'react';
import Radium from 'radium';




const Window = React.createClass({


  handleClick(item){
    this.props.changeViewClick(item);
  },


  render(){

    return (

      <div style={this.props.styles.inner.container}>
<h1>display: {this.props.displayContent}</h1>




        <div id ="expandMenu">
{this.props.activeView}
          rendered items for the view

        </div>
      </div>

    )
  }
})

export const WindowContainer = Radium(Window);
