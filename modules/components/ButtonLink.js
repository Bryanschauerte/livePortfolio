import React from 'react';
import Radium from 'radium';
import {ButtonLinksStyle} from '../styles/_ButtonLinksStyle.js';

const ButtonLinks = React.createClass({

handleClick(item){
  this.props.buttonClickFun(item)
},
render(){
let buttons = this.props.cards.map((item, index)=>{
  var boundClick = this.handleClick.bind(this, item)

  return (<button key ={index} onClick = {boundClick}>
  {item.get("title")}</button>);

})
  return(
    <div style={ButtonLinksStyle.container}>
      {buttons}
    </div>
  )
}
});


export const ButtonLinksContainer = Radium(ButtonLinks);
