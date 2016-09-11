import React from 'react';
import classNames from 'classnames';



function LandingInfo (props){

  let { classDefault, bondAction } = props;

  let landingPicture  = classNames({
    'landingBase': true,
    'landingBaseSTwo': classDefault
  });
  let landingTitle  = classNames({
    'landingTitle': true,
    'landingTitleSTwo': classDefault
  });
  let landingHeader  = classNames({
    'landingHeader': true,
    'landingHeaderSTwo': classDefault
  });
  let landingSubHeader  = classNames({
    'landingSubHeader': true,
    'landingSubHeaderSTwo': classDefault
  });
  let landingMastHead  = classNames({
    'landingMastHead': true,
    'landingMastHeadSTwo': classDefault
  });
  let landingInnerMastHead  = classNames({
    'landingInnerMastHead': true,
    'landingInnerMastHeadSTwo': classDefault
  });




    return (
    <div className="landingContainer" >
      <div className={landingPicture}></div>
{/* <SvgGenerator dimensions={props.dimensions} showBackgAni = {props.showBackgAni} /> */}
      <div className={landingMastHead}>
        <div className={landingInnerMastHead} >
          <h1 className={landingTitle} >Bryan Schauerte</h1>
          <h3 className={landingHeader} >Web Developer based in Salt Lake City</h3>
          <p className={landingSubHeader} >
          -Chop'n through JS to put cats on the interwebs-
          </p>

        </div>
      </div>
    </div>

  )

}
export default LandingInfo;
