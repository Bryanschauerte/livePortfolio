import React from 'react';
import classNames from 'classnames';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import PreviewThumb from './PreviewThumb';
import LargeVersion from './LargeVersion';

class MainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeItemTitle: null,
      loaded: this.props.loaded,
      isBig: false

     };

    this._handleItemRendering = this._handleItemRendering.bind(this);
    this._colorHandling = this._colorHandling.bind(this);
    this._handleActiveItemReset = this._handleActiveItemReset.bind(this);
    this._setActiveItem = this._setActiveItem.bind(this);
    this.handleStyle = this.handleStyle.bind(this);

    }
  _setActiveItem(item){
    let tState = this.state;
    if(item != this.state.activeItemTitle){
      tState.activeItemTitle = item;
    }
    this.props.updateActiveItem();
    this.setState({tState})
  }



_handleActiveItemReset(){
  this.props.updateActiveItem();
  this.setState({activeItemTitle: null});
}


_colorHandling(type){

  let types = this.props.typesAvaliable;
  let colorArray = ['#0B1968', '#0193b8', '#813772', '#01b826', '#b82601','#062f4f' ]
  let index = types.indexOf(type);
  if(index > colorArray.length-1){
    index = index - (colorArray.length-1)
  }
  return colorArray[index];
}


  _handleItemRendering(info){

        return (
          <div className='mainViewItem'>
            <PreviewThumb
              {...this.props}
              setActive = {this.props.setActive}
              isActive= {this.state.activeItemTitle}
              setActiveItem ={this._setActiveItem}
              displayInfo={info.contentItems}
              _colorHandling={this._colorHandling}>
                <LargeVersion
                  displayInfo={info.contentItems}
                  handleClose={this._handleActiveItemReset}
                  {...this.props}/>

              </PreviewThumb>
              </div>
        )

  }

  shouldComponentUpdate(nextProps, nextState){
      return true;
  }


  handleStyle(){
    let isBig = this.props.isBig;

        let smallSize = {
          padding: "2%",
          height: this.props.windowHeight/2.2,
          width: this.props.windowWidth*.46
          }
          let bigSize = {
            float: 'none',
            padding: "0%",
            height: '100%',
            width: '100%'
          }
          return isBig? bigSize: smallSize;


  }


  render(){

    return (
        <div
          className="mainViewContainer"
          style={this.handleStyle()}>
          {this._handleItemRendering(
            this.props.itemToDisplay)}
        </div>

      )
    }
}
export default MainView;
