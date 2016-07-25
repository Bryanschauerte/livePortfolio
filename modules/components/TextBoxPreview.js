import classNames from 'classnames';
import React from 'react';


//need this to make a delay on the rendering of the text
const TextBoxPreview = (props)=> {
  let {
    title, classObject,picturesArray, picDim,type, shortTitle,techStack
  } = props;


  return (
    <div className={classObject.outer} >
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
      </div>

  )

};
export default TextBoxPreview;
