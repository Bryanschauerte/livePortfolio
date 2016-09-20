import React from 'react';

const CodePenHandler = (props)=> {
//  url: //codepen.io/BSchauerte/embed/xOBqQz/?height=265&theme-id=0&default-tab=js,result&embed-version=2
  const urlHelper = (url) =>{
    let target = /\height\b=\d+/gi;
    let newHeight = "height=" + props.style.height;//default 265
    let editedUrl = url.replace(target, newHeight);
    return editedUrl;
  }

  return (<div >
            <iframe width={props.style.width}
               height={props.style.height}
               scrolling="no"
               src={urlHelper(props.iframeSrc)}
               frameBorder="no"
               allowTransparency="true"
               allowFullScreen="true"
               style={props.style}>
              <a href={props.penHref}>
                {/*  contentItem.links penHref location on codepen ie http://codepen.io/BSchauerte/pen/xOBqQz/*/}
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
