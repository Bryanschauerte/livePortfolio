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
console.log(sizeObject, "sizeObject")

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
                      contentItem= {contentItem}
                      loadHandling={props.loadHandling}/>
                  </div>

                </div>)
                )}

            </div>

</div>)}
export default LargeSingle;
