import React from 'react';
import classNames from 'classnames';
// import InfoBit from './InfoContainer';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import PreviewThumb from './PreviewThumb';
import HoverHOC from './HoverHOC';
// import LargeSingle from './LargeSingle'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import {testinfo} from '../../PsuedoData'

class MainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeItem: null,
      loaded: this.props.loaded,

     };

    this._handleItemRendering = this._handleItemRendering.bind(this);

  }




  _handleItemRendering(info){
    if(info.length > 0 && this.props.showItems){
    const filter = (infoBit) => {
      return this.props.filteredOut.indexOf(
        infoBit.contentItems.type.toLowerCase()) == -1? true: false;
    }


      let infostuff = info.map(item =>{
        if( filter(item) ){
        return (
          <div key ={tokgen.generate()}>

            <PreviewThumb
              showItems={this.props.showItems}
              displayInfo={item.contentItems}>
              {/* <LargeVersion {...this.props}/> */}<div><h1>test</h1></div>
              </PreviewThumb>

          </div>)
          }}
        )
          return infostuff;

      }
  }


  render(){
      // let mainContainerClass = classNames({
      //   'mainViewHide': true,
      //   'mainViewShow': this.props.showItems
      // })
      let itemContainerClass = classNames({
        'mainViewItemContainer': this.props.showItems
      })
console.log("Main view props", this.props)
  return (
      <div className="mainViewContainer">


        {this.props.loaded?this._handleItemRendering(this.props.dataBaseContents): null}


      </div>

    )
  }
}
export default MainView;
