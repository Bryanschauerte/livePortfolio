import React from 'react';
import Radium from 'radium';
import {ActiveSlide} from '../styles/_SplitContainer';
import {InActiveSlide} from '../styles/_SplitContainer';

const Slide = React.createClass({


  handleClick(){
    console.log("ding div clicked")
    this.props.btnPassBackFunc(this.props.passBack);

  },
  handleStyleChange(area){
    //function to change colors
    //have to save the object and pass it back
    return getStyle(area);
  },

  getStyle(area){
    return (
      this.props.activeView == this.props.passBack ?
       ActiveSlide[area]
       : InActiveSlide[area]
     );
  },

  render(){

    return (
<div>
      <div onClick={this.handleClick}
        style={[ this.getStyle("outerContainer")]}>

          <div
            style={[ this.getStyle("alwaysVisable")]}>

              <h1
                style={[ this.getStyle("textLabel")]}>
                {this.props.passBack}
              </h1>
          </div>


      </div>
      <div style={[this.getStyle("activeExtend")]}>
test
      </div>
</div>
    )
  }

});

export const SlidePartContainer = Radium(Slide);
