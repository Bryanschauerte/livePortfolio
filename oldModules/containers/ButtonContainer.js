import React from 'react';
import Radium from 'radium';
import {ViewBoxBtn} from '../components/ViewBoxButton';
import {btnStyles, container, menu, actions} from "../styles/_button";


const BtnElement = React.createClass({

  getInitialState(){
    return(
      {
        showMenu: false,
        showHint: false
      }
    );
  },
  handleClick(item){
    this.props.changeViewClick(item);
    this.handleMouseLeaveMenu();
  },
  mouseStyle(){
    return this.state.showHint ? menu.hint : menu.noHint
  },
  handleMouseOver(){
    this.setState({
      showHint: true
    })
  },
  handleMouseLeaveHint(){
    this.setState({
      showHint: false
    })
  },
  handleMouseLeaveMenu(){
    this.setState({
      showMenu: false
    });
    this.handleMouseLeaveHint()
  },
  menuShow(){
    this.setState({showMenu: !this.state.showMenu})
  },
  render(){
     return this.state.showMenu ? (
         <div
           style={container.base}
           onMouseLeave={this.handleMouseLeaveMenu}>


           <ViewBoxBtn
             activeView={this.props.activeView}
             btnStyles={btnStyles}
             btnPassBackFunc= {this.handleClick}
             passBack="About"/>

           <ViewBoxBtn
             activeView={this.props.activeView}
             btnStyles={btnStyles}
             btnPassBackFunc= {this.handleClick}
             passBack="Blog"/>
           <ViewBoxBtn
             activeView={this.props.activeView}
             btnStyles={btnStyles}
             btnPassBackFunc= {this.handleClick}
             passBack="CodeShare"/>

           <ViewBoxBtn
             activeView={this.props.activeView}
             btnStyles={btnStyles}
             btnPassBackFunc= {this.handleClick}
             passBack="Future"/>
         </div>




     ) : (<div
       style={menu.menuHide}
       onClick={this.menuShow}
       onMouseOver={this.handleMouseOver}
       onMouseLeave={this.handleMouseLeaveHint}>
       <div style={[this.mouseStyle()]}>
         Hello there! If you're curious, my name is pronounced "shower tea". Get it?
         Click the tea for the menu.
       </div>


           <h4 style={menu.menuText}>+</h4>


     </div>)

  }
})

export const BtnElementContainer = Radium(BtnElement);
