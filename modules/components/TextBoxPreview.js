import classNames from 'classnames';
import React from 'react';


//need this to make a delay on the rendering of the text
const TextBoxPreview = (props)=> {
  let {
    title,picturesArray, dimensions,type, shortTitle,techStack, isHovering
  } = props;


let paddingReady= {height:dimensions.height,width:dimensions.width}
let dimObj = {

  image:{
    hover:{height:paddingReady.height*.75, width:paddingReady.width*.88},
    noHover:{height:paddingReady.height*.9, width:paddingReady.width*.9}
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

  return (<div className='icContentsBaseClass' >


      <div className={titleClass}>{props.title}: {props.type.toUpperCase()}</div>



        {picturesArray? <img src={picturesArray[isHovering? 1:0]}
          height={isHovering? dimObj.image.hover.height: dimObj.image.noHover.height}
          width={dimObj.image.hover.width}/>:null}


      <div className={footerClass}>
        <div className="ICInfoHeaderBottomTitle">{props.shortTitle}</div>
        <ul className="techStack">{props.techStack}</ul>
      </div>
  </div>)

};
export default TextBoxPreview;

{/*<div className={classObject.outer} >
  <div className={classObject.picture}>
    <img src={picturesArray} height={picDim.height} width={picDim.width}/>
  </div>
  <div className={classObject.text}>

      <h2>{title}</h2>
      <h4 className ="icContentsTypeClass"
        style={{color:classObject.typeColor}}>{type.toUpperCase()}</h4>
      <h4>{shortTitle}</h4>
      <h4 style={{color:classObject.typeColor}}>{techStack}</h4>
      <br/>
      <p style={{color:classObject.typeColor}}><i className="fa fa-ellipsis-h fa-3x" aria-hidden="true"></i></p>
    </div>
  </div>*/}
