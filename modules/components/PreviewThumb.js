import classNames from 'classnames';
import React from 'react';


//need this to make a delay on the rendering of the text
const PreviewThumb = (props)=> {
  let {
    loadHandling,
    title,
    picturesArray,
    dimensions,
    type,
    shortTitle,techStack, isHovering,imageClass
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


      <div className={titleClass}>{props.title} {props.type.toUpperCase()}</div>


      {/*{props.isLoaded?<span className="loading">Loading</span>:null}*/}
        {picturesArray? <img src={picturesArray[isHovering? 1:0]}
          height={isHovering? dimObj.image.hover.height: dimObj.image.noHover.height}
          width={dimObj.image.hover.width}
          onLoad={props.loadHandling}
          onError={props.loadHandling}
          className={imageClass}
          />:null}


      <div className={footerClass}>
        <div className="ICInfoHeaderBottomTitle">{props.shortTitle}</div>
        <ul className="techStack">{props.techStack}</ul>
      </div>
  </div>)

};
export default PreviewThumb;
