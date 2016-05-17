import React from 'react';
import Radium from 'radium';
import {List, Map,fromJS,is,set} from 'immutable';
import {ActiveSlide} from '../styles/_SplitContainer';
import {InActiveSlide} from '../styles/_SplitContainer';
import {DisplayContent} from './Display';
import {AboutStyle} from '../styles/_About';
import {BlogStyle} from '../styles/_Blog';
import {CodeShareStyle} from '../styles/_CodeShare';
import {FutureStyle} from '../styles/_Future';
import {ButtonLinksContainer} from "./ButtonLink";


const Slide = React.createClass({


  handleClick(){
    this.props.btnPassBackFunc(this.props.passBack);
    let clear = List();
    this.props.getActiveItemClick(clear);
  },

  handleStyleChange(){

    switch(this.props.passBack){
      case "About":
        return AboutStyle;
      case "Blog":
        return BlogStyle;
      case "CodeShare":
        return CodeShareStyle;
      case "Future":
        return FutureStyle;
    }
    return "nope";

  },
  changeDisplay(item){
    this.props.getActiveItemClick( item );

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
          <div style={[this.getStyle("activeViewContainer")]}>
            <div style={[this.getStyle("imageCanvas")]} ></div>
            <div style={[this.getStyle("buttonContainer")]}>
              <ButtonLinksContainer
                buttonClickFun= {this.changeDisplay}
                cards={this.props.categoryContent.get('cards')}/>
            </div>

          </div>
          {(this.props.activeItemContents.size == 0) ?

           (<DisplayContent {...this.props}
              styles={this.handleStyleChange()}
              content={this.props.categoryContent}
              sectionView={this.props.activeView}
              activeItem = {this.props.activeItem}/>)
              :
              (<DisplayContent {...this.props}
                 styles={this.handleStyleChange()}
                 content={this.props.activeItemContents}
                 sectionView={this.props.activeView}/>)
          }

      </div>
    </div>
    )
  }

});

export const SlidePartContainer = Radium(Slide);
