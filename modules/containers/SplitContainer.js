import React from 'react';
import Radium from 'radium';
import {SlidePartContainer} from "../components/SlidePart";
import {SplitContainerStyle} from "../styles/_SplitContainer";

const Split = React.createClass({

  getInitialState(){
    return(
      {
        activeView: "About"
      }
    );
  },
  handleClick(item){
    this.props.changeViewClick(item);
    this.setState({
      activeView: item
    })
    console.log(this.state, "stttaaate");
    console.log(this.props)
  },
  render(){


    return(
      <div>
        {Object.keys(this.props.categories).map((item, index)=>{
          let boundClick = this.handleClick.bind(this, item);

          return (

    <SlidePartContainer {...this.props}
      key= {item}
      btnPassBackFunc ={boundClick}
      isActive={this.props.activeView == this.state.activeView}
      passBack={item}/>
  ); }) }

</div>

    );
  }
});


export const SplitContainer = (Radium(Split));
