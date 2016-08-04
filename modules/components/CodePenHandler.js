import React from 'react';

const CodePenHandler = (props)=> {

  const urlHelper = (url) =>{
    let target = /\height\b=\d+/gi;
    let newHeight = "height=" + props.style.height;
    let editedUrl = url.replace(target, newHeight);
    return editedUrl;
  }

  return (<div >
            <iframe width={props.style.width}
               height={props.style.height}
               scrolling="no" src={urlHelper(props.iframeSrc)}
               frameBorder="no"
               allowTransparency="true"
               allowFullScreen="true"
               style={props.style}>
              <a href={props.penHref}>
                See this pen</a> by (<a href={props.userPen}>@BSchauerte</a>) on
                <a href='http://codepen.io'>CodePen</a>.
            </iframe>
          </div>)
        }

CodePenHandler.propTypes = {
   iframeSrc: React.PropTypes.string.isRequired,
   penHref: React.PropTypes.string.isRequired,
   userPen: React.PropTypes.string.isRequired,
   style: React.PropTypes.object.isRequired
 };
export default CodePenHandler;
