import classNames from 'classnames';
import React from 'react';



const PreviewThumb = (props)=> {

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


let paddingReady= {height:dimensions.height,width:dimensions.width}
let dimObj = {

  image:{
    hover:{
      height:paddingReady.height*.75,
      width:paddingReady.width*.88},
    noHover:{
      height:paddingReady.height*.9,
      width:paddingReady.width*.9
    }
  }
}

let titleClass = classNames({
  ICInfoHeaderTitle:!isHovering,
  ICInfoHeaderTitlePost: isHovering
})
let footerClass = classNames({
  ICInfoFooter:!isHovering,
  ICInfoFooterPost: isHovering
})
  console.log(infoArray, "array")
  return (<div className='icContentsBaseClass' >
  {/* {imagePreview? <img className={classImagePreview} src={imagePreview}/>: null} */}
<div>{props.PreviewTitle}</div>
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

};
export default PreviewThumb;
