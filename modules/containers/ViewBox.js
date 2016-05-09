import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {WindowContainer} from '../components/WindowContainer';
import Radium from 'radium';

export const ViewBox = React.createClass({

  mixins:[PureRenderMixin],

  getInitialState(){
    return {itemDetails: []}
  },

  // componentWillMount(){
  //   this.setState(this.getViewContentClick(this.props.activeView));
  // },
  handleClick(){
// make screen pop out
  },
  handleStyle(){

  },
  render(){

    return(
      <div style ={this.props.styles.base}>
      <WindowContainer {...this.props}/>

      </div>)
  }
})

export const ViewBoxContainer  = Radium(ViewBox);
