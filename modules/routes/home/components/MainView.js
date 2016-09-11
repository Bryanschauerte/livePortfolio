import React from 'react';
import classNames from 'classnames';
// import InfoBit from './InfoContainer';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import PreviewThumb from './PreviewThumb';

// import LargeSingle from './LargeSingle'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import {testinfo} from '../../PsuedoData'

class MainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeItem: null,
      isLoaded: false,
      filterOut:[]
     };

    this._handleItemRendering = this._handleItemRendering.bind(this);
    this._handleSize = this._handleSize.bind(this);
  }


  _handleSize(){

    let height = Math.floor( this.props.dimensions.height );
    let width = Math.floor( this.props.dimensions.width );
    let sendingW = width/3;
    let sendingH = sendingW*this.props.dimensions.ratio;
    let returnSize = {height: sendingH, width:sendingW};
    return returnSize;

  }

  _handleItemRendering(info){
    const filter = (infoBit) => {
      return this.props.filterOutTypes.indexOf(
        infoBit.contentItems.type.toLowerCase()) == -1? true: false;
    }
    if(this.props.showItems){
      const thumbDimensions = this._handleSize();
      let infostuff = info.map(item =>{
        if( filter(item) ){
        return (
          <div key ={tokgen.generate()}>
            <PreviewThumb displayInfo={item.contentItems}/>
          </div>)
          }}
        )
          return infostuff;
        }
  }


  render(){
      let mainContainerClass = classNames({
        'mainViewHide': true,
        'mainViewShow': this.props.showItems
      })
      let itemContainerClass = classNames({
        'mainViewItemContainer': this.props.showItems
      })
console.log("Main view props", this.props)
  return (
      <div className={mainContainerClass}>
        <div className={itemContainerClass}>

        {this._handleItemRendering(this.props.dataBaseContents)}

      </div>
      </div>

    )
  }
}
export default MainView;
