import React from 'react';


class ImageSlider extends React.Component{
constructor(props){
  super(props);
  this.state = {
    currentIndex:0,
    imageHovering: false
  }
  this._handleLeftClick = this._handleLeftClick.bind(this);
  this._handleRightClick = this._handleRightClick.bind(this);
  this.mouseEntered = this.mouseEntered.bind(this);
  this.mouseLeft = this.mouseLeft.bind(this);
  this._handleStyle = this._handleStyle.bind(this);
  this._handleRendering = this._handleRendering.bind(this);
}
_handleStyle(){
  let size = this.props.size;
  let biggerSize = {
    height:this.props.size.height*2,
     width: this.props.size.width*2}

  return this.state.imageHovering? biggerSize : size;
}
mouseEntered(event){
  event.preventDefault();
  this.setState({imageHovering: true});
}
mouseLeft(event){
  event.preventDefault();
  this.setState({imageHovering: false});
}
_handleLeftClick(){
  let index = this.state.currentIndex;
  index == 0?
    this.setState({currentIndex:this.props.images.length-1})
    :this.setState({currentIndex:index-=1})
}
_handleRightClick(){
  let index = this.state.currentIndex;
  index == this.props.images.length-1?
    this.setState({currentIndex:0})
    :this.setState({currentIndex:index+=1})
}
_handleRendering(){
  let size = this.props.size;
  let biggerSize = {
    height:this.props.size.height*2,
     width: this.props.size.width*2}
  let images = this.props.images;
  let length = this.props.images.length;

  return this.props.images.length? (
        <div  onMouseEnter={this.mouseEntered}
              onMouseLeave={this.mouseLeft}>

        <div className="imageSliderContainer" >

          <div className="arrows">
            <i onClick={this._handleLeftClick}
            className="fa fa-arrow-left fa-3x"
            aria-hidden="true"></i>
          </div>

        <img
          className="sliderImage"
          style={this._handleStyle()}
          src={images[this.state.currentIndex]} />

        <div className="arrows">
         <i onClick={this._handleRightClick}
           className="fa fa-arrow-right fa-3x" aria-hidden="true"></i>
         </div>
       </div>
     </div>)
  :null;
}

  render(){


    return(
        <div>
          {this._handleRendering()}
       </div>
     )
  }
}
export default ImageSlider;
