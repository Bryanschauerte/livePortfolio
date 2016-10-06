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

     };

    this._handleItemRendering = this._handleItemRendering.bind(this);
    this._colorHandling = this._colorHandling.bind(this);
    this._handleActiveItemReset = this._handleActiveItemReset.bind(this);
    this._setActiveItem = this._setActiveItem.bind(this);

    }
  _setActiveItem(item){
    this.props.scrollMe();
    if(item != this.state.activeItemTitle){
      this.setState({
        activeItemTitle: item
      })
    }

  }



_handleActiveItemReset(){
  this.setState({activeItemTitle: null})
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
    if(info.length > 0 && this.props.showItems){

      let infostuff = info.map((item, index) =>{

        return (
            <PreviewThumb
              {...this.props}
              isActive= {this.state.activeItemTitle}
              setActiveItem ={this._setActiveItem}
              displayInfo={item.contentItems}
              _colorHandling={this._colorHandling}>
                <LargeVersion
                  displayInfo={item.contentItems}
                  handleClose={this._handleActiveItemReset}
                  {...this.props}/>

              </PreviewThumb>
        )}
        )
          return infostuff;

      }
  }


  render(){



  return (
      <div className='mainViewContainer'>


        {this.props.loaded?this._handleItemRendering(
          this.props.dataBaseContents): null}


      </div>

    )
  }
}
export default MainView;
