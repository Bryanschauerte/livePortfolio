import classNames from 'classnames';
import React from 'react';



class PreviewThumb extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isHovering: false,
      isClicked: false,
      imageArray:null
    }
    this._mouseEntered = this._mouseEntered.bind(this);
    this._mouseLeft = this._mouseLeft.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleImages = this._handleImages.bind(this);
    this._handleStringForUrlArray = this._handleStringForUrlArray.bind(this);
    this._buttonStyle = this._buttonStyle.bind(this);
    this._handleSummary = this._handleSummary.bind(this);
    this._setSize = this._setSize.bind(this);
    this._classNameAddition = this._classNameAddition.bind(this);

  }
  _setSize(){
    let sizeOb = {
      maxHeight: this.props.height/2,
      width: this.props.width/3
    }
    return sizeOb;
  }
  _buttonStyle(isInverted, type){
    let color = this.props._colorHandling(type);

    let style = {
      backgroundColor: color,
      border: "1px solid "+ '#ffffff',
      color: '#ffffff',

      width: '100%',
      textAlign: "center",
      fontFamily: 'Roboto',
      boxShadow: "0 0 0 2px "+ color,
      borderRadius: '2px',
      letterSpacing: '.4em',
      textShadow: '1px 1px 3px',
      cursor: 'pointer',
      transition: "background-color 250ms ease-in-out"

    }

    let invStyle = {
      backgroundColor:'#ffffff',
      border: "1px solid "+ color,
      textAlign: "center",
      fontFamily: 'Roboto',
      color:color,
      boxShadow: "0 0 0 2px #ffffff",
      borderRadius: '2px',
      letterSpacing: '.4em',
      textShadow: '1px 1px 3px',
      cursor: 'pointer',
      transition: "background-color 250ms ease-in-out"

    }
    return isInverted? invStyle: style;
  }

  _handleStringForUrlArray(string){
    let arr = string.split(', ');
    this.setState({
      imageArray: arr
    })
  }

  _handleClick(){
    this.props.setActiveItem(this.props.displayInfo.title);
    let current = this.state.isClicked;
    this.setState({
      isClicked: !current,
      isHovering: false
    })

  }

  _mouseEntered(event){

    event.preventDefault();
    this.setState({isHovering: true});
  }

  _mouseLeft(event){

    event.preventDefault();
    this.setState({isHovering: false});
  }
  _handleImages(imageUrl){

    return (<img
      src={imageUrl}
      height={this.props.windowHeight/5.6}
      width='auto'/>);


  }
  _handleSummary(){

    let list = this.props.displayInfo.main.map((item, index)=>{
      return <li key ={Math.random()}>{item.subheader}</li>
    })

    return list;
  }

  componentWillMount(){
    this._handleStringForUrlArray(
      this.props.displayInfo.previewContents.imageArrayPreview);

  }

_classNameAddition(addition){
  let classesSmash = classNames(addition, {
    hereHere: this.props.isActive == null,
    goGone: this.props.isActive != this.props.displayInfo.title || null

  })
  return classesSmash;
}

  render(){


    let itemActiveClasses = classNames({
      isActive: this.props.isActive

    })




      let imageStyle = this._handleImages(this.state.imageArray[0])
      let listSummary = this._handleSummary();
      return (<div
              onMouseEnter={this._mouseEntered}
              onMouseLeave ={this._mouseLeft}
              className="previewThumbContainer" >

              <div className= {this._classNameAddition("seperator")}>
                    {!this.state.isHovering?<div className='previewImage'>
                      {imageStyle}
                     </div>: null}

                <div className={this._classNameAddition("previewTextContainer")}>
                  <h3>
                    {this.props.displayInfo.previewContents.previewTitle}
                  </h3>
                  {this.props.displayInfo.previewContents.previewHeader}

                  {this.state.isHovering?<ul className='previewThumbList'>
                    <h4 style={{paddingBottom:'2%'}}>Summary:</h4>
                    {this._handleSummary()}
                  </ul>: null}


                <div className="previewFooter">
                  {this.props.displayInfo.footer}
                </div>

              </div>

                  {this.props.isActive == this.props.displayInfo.title? this.props.children: null}

              </div>
                  <div className={this._classNameAddition("previewThumbBtn")}
                    onMouseEnter={this._mouseEntered}

                    onClick={this._handleClick}
                    style ={
                      this.state.isHovering? this._buttonStyle(true, this.props.displayInfo.type):
                    this._buttonStyle(false, this.props.displayInfo.type)}>
                    View This {this.props.displayInfo.type}
                  </div>
                </div>)
  }
}

export default PreviewThumb;
