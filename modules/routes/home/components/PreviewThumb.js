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
console.log("I gots clicked!")
    let current = this.state.isClicked;
    this.setState({
      isClicked: !current
    })

  }

  _mouseEntered(event){
    console.log("I gots hovered!")
    event.preventDefault();
    this.setState({isHovering: true});
  }

  _mouseLeft(event){
    console.log("I gots ...er.. unhovered?!")
    event.preventDefault();
    this.setState({isHovering: false});
  }
  _handleImages(imageUrl){


    let styleObj = {
      backgroundImage: 'url('+imageUrl+')',
      backgroundSize:'contain',
      minHeight:this.props.windowHeight/2,
      width:this.props.windowWidth/5,
      backgroundRepeat:'no-repeat'};
    return styleObj;
  }
  componentWillMount(){
    this._handleStringForUrlArray(
      this.props.displayInfo.previewContents.imageArrayPreview);

  }
  // background-image: url("x");

  render(){



    // let titleClass = classNames({
    //   ICInfoHeaderTitle:!isHovering,
    //   ICInfoHeaderTitlePost: isHovering
    // })
console.log(this.state, "state of preThumb");
console.log(this.props, "props of preThumb");
let style = this._handleImages(this.state.imageArray[0])
      return (<div
                onClick={this._handleClick}
                onMouseEnter={this._mouseEntered}
                onMouseLeave={this._mouseLeft}
                className="previewThumbContainer" >
<div className="previewImageContainer">
  <div style={style}>
     </div>
</div>

                <div>
                  <h1>
                    {this.props.displayInfo.previewContents.title}
                  </h1>
                  <h3>
                    {this.props.displayInfo.previewContents.previewHeader}
                  </h3>
                </div>
                <div>
                  <p>
                    {this.props.displayInfo.previewContents.previewExtra}
                  </p>
                </div>
                <div>
                  {this.props.children}
                </div>

                  {/* <div className={classPreviewTitle}>
                    {previewTitle}
                    <div className={classType}>{type.toUpperCase()}</div>
                  </div>
                  <div className={classPreviewHeader}>{classPreviewHeader}</div>
                  <div className={classPreviewExtra}>{classPreviewExtra}</div>
                  <div className={classPreviewFooter}>
                    <div className="ICInfoHeaderBottomTitle">
                      {classPreviewFooter}
                    </div>
                  </div> */}
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
