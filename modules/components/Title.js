import React from 'react';
import {_Title} from '../StyleEffects/_Title';

export default class Title extends React.Component{
  render(){
console.log(_Title, "title");
    return(
      <div style={_Title.container} >

        <div style ={_Title.upperText}>
          <span style = {_Title.name}>Bryan Schauerte</span>
        </div>

        <div style= {_Title.textBox}>
          <div style={_Title.text} >
            <span style= {_Title.textSpan}>This site, yatta yatta yatta...  </span></div>
        </div>
        <div style= {_Title.imageBox}>
          <img style = {_Title.image} src = "./images/showertea.png"/>
        </div>

      </div>

    )

  }
}
