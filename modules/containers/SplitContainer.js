import React from 'react';
import Radium from 'radium';
import {SlidePartContainer} from "../components/SlidePart";
import {SplitContainerStyle} from "../styles/_SplitContainer";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map,fromJS,is,set} from 'immutable';

const Split = React.createClass({


  handleClick(item){
    this.props.changeViewClick(item);

  },

  render(){

    return(
      <div style={SplitContainerStyle.base}>
        {this.props.categories.map((v, key)=> {
          let boundClick = this.handleClick.bind(this, key);

          return (

    <SlidePartContainer {...this.props}
      key= {key}
      btnPassBackFunc ={boundClick}
      isActive={this.props.activeView == this.state.activeView}
      passBack={key}
      categoryContent= {v}
      />
  ); }) }

</div>

    );
  }
});



export const SplitContainer = Radium(Split);
