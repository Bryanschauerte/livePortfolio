import classNames from 'classnames';
import React from 'react';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import LargeSingleContent from '../components/LargeSingleContent';


const LargeSingle= (props)=>{

let {screenSize, information} = props;

let sizeObject = {
  screen: screenSize,
  titleOuter: {height: screenSize.height * .05, width: screenSize.width * .7},
  contentsOuter: {
    maxHeight: {height:screenSize.height * .9, width: screenSize.width * .7},
    codePen:{
      textIndent:0,
      height: (screenSize.height * .9) *.5,
       width: (screenSize.width * .7)*.9 },
    image:{height: (screenSize.height * .9) *.3 , width: (screenSize.width * .7) *.3 }
  },
  footerOuter: {height: screenSize.height * .05, width: screenSize.width * .7}
}


  return( <div>
    <div style={sizeObject.screen} onMouseEnter={props.unClick} className='LS_Overlay'></div>
        <div style={sizeObject.contentsOuter} className="LS_OuterCont">

            <div className="LS_titleOuter">
              {information.title}
              </div>

                  {information.parts.map(
                    (contentItem, index)=>(
                      <div className="LS_contents" key ={tokgen.generate()}>


                    <div className="LScontentItems">
                    <LargeSingleContent
                      sizeObject={sizeObject}
                      parentInfo ={information}
                      index = {index}
                      linkTo={information.linkTo}
                      contentItem= {contentItem}
                      />


                  </div>

                </div>)
                )}
                <div className="footer">
                  <ul>
                    <li><a href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site" target="_top"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                    <li><a href={information.linkTo} target="_blank"><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/bryanschauerte" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>

</div>)}
export default LargeSingle;
