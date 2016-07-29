import React from 'react';


class ImageSlider extends React.Component{
constructor(props){
  super(props);
  this.state = {
    currentIndex:0,
    isHovering: false
  }
  this._handleLeftClick = this._handleLeftClick.bind(this);
  this._handleRightClick = this._handleRightClick.bind(this);
  this.mouseEntered = this.mouseEntered.bind(this);
  this.mouseLeft = this.mouseLeft.bind(this);
  this._handleStyle = this._handleStyle.bind(this);
}
_handleStyle(){
  let size = this.props.size;
  let biggerSize = {
    height:this.props.size.height*2,
     width: this.props.size.width*2}
console.log(size, "size")
console.log(biggerSize, "bsize")
  return this.state.isHovering? biggerSize : size;
}
mouseEntered(event){
  event.preventDefault();
  this.setState({isHovering: true});
}
mouseLeft(event){
  event.preventDefault();
  this.setState({isHovering: false});
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
  render(){
    console.log(this.props)
    let size = this.props.size;
    let biggerSize = {
      height:this.props.size.height*2,
       width: this.props.size.width*2}
    let images = this.props.images;
    let length = this.props.images.length;
    return(<div>
      <div
            onMouseEnter={this.mouseEntered}
            onMouseLeave={this.mouseLeft}
            >
      <div className="imageSliderContainer" >
        <i onClick={this._handleLeftClick}
          className="fa fa-arrow-left fa-3x" aria-hidden="true"></i>
      <img
        style={this._handleStyle()}
        src={images[this.state.currentIndex]} />
       <i  onClick={this._handleRightClick} className="fa fa-arrow-right fa-3x" aria-hidden="true"></i>
</div>
</div></div>)
  }
}
export default ImageSlider;
