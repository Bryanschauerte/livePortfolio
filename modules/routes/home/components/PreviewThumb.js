import classNames from 'classnames';
import React from 'react';



class PreviewThumb extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isHovering: false,
      isClicked: false,
    }
    this._mouseEntered = this._mouseEntered.bind(this);
    this._mouseLeft = this._mouseLeft.bind(this);
    this._handleClick = this._handleClick.bind(this);

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

  render(){



    // let titleClass = classNames({
    //   ICInfoHeaderTitle:!isHovering,
    //   ICInfoHeaderTitlePost: isHovering
    // })
    // let footerClass = classNames({
    //   ICInfoFooter:!isHovering,
    //   ICInfoFooterPost: isHovering
    // })style={calcDimensions}
    //imageArrayPreview
      return (<div
                onClick={this._handleClick}
                onMouseEnter={this._mouseEntered}
                onMouseLeave={this._mouseLeft}
                className="previewThumbContainer" >
    <div className="previewImageContainer">
      {/* scrub images here */}
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
