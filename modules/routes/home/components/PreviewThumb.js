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
      isClicked: !current
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


    let styleObj = {
      backgroundImage: 'url('+imageUrl+')',
      backgroundSize:'cover',
      backgroundPosition:'center',
      minHeight:this.props.windowHeight/3,
      width:this.props.windowWidth*.25,
      backgroundRepeat:'no-repeat',
    backgroundColor: "#0B1968"};
    return styleObj;
  }
  componentWillMount(){
    this._handleStringForUrlArray(
      this.props.displayInfo.previewContents.imageArrayPreview);

  }
  // background-image: url("x");

  render(){


    let itemActiveClasses = classNames({
      isActive: this.props.isActive

    })



      let imageStyle = this._handleImages(this.state.imageArray[0])
console.log('isActive', this.props.isActive)
      return (<div
                style={this.props._colorHandling(this.props.displayInfo.type)}
                onClick={this._handleClick}
                onMouseEnter={this._mouseEntered}
                onMouseLeave={this._mouseLeft}
                className="previewThumbContainer" >


                <div style={this.props._colorHandling(this.props.displayInfo.type)}
                  className="previewTextContainer">
                  <h1>
                    {this.props.displayInfo.previewContents.previewTitle}
                  </h1>
                </div>
                  <div
                    style={this.props._colorHandling(this.props.displayInfo.type)}
                    className="previewImageContainer">
                    <div className='previewImage'
                       style={imageStyle}>
                       </div>
                  </div>
                <div className="previewTextContainer">
                  <div>
                  <h3>
                    {this.props.displayInfo.previewContents.previewHeader}
                  </h3>

                <div>
                  <p>
                    {this.props.displayInfo.previewContents.previewExtra}
                  </p>
                </div>
                <div className="previewFooter">
                  {this.props.displayInfo.footer}
                </div>
                </div>
              </div>
                <div>
                  {this.props.isActive == this.props.displayInfo.title? this.props.children: null}
                </div>

                </div>)
  }
}

  // let {
  //
  //   //
  //   title,
  //   dimensions,
  //   type,
  //   shortTitle,
  //   isHovering,
  //   previewTitle,
  //   previewType,
  //   previewHeader,
  //   previewFooter,
  //   previewExtra,
  //   imagePreview,
  //
  //   classPreviewTitle,
  //   classPreviewHeader,
  //   classPreviewFooter,
  //   classPreviewExtra,
  //   classImagePreview
  //
  // } = props;




export default PreviewThumb;
