import React from 'react';
import classNames from 'classnames';

class LargeVersion extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this._handleClose = this._handleClose.bind(this);
  }
  _handleClose(){
    this.props.handleClose()
  }
  render(){
    console.log(this.props, "large props")
    return(
      <div className='LV_OuterCont'>
        <div>{this.props.displayInfo.type}</div>
        <div className="LS_titleOuter">
          {this.props.displayInfo.title}

        </div>
            {this.props.displayInfo.main.map(
              (contentItem, index)=>(
                <div className="LS_contents" key ={Math.random()*index}>


              <div className="LScontentItems">
                <div><h1>{contentItem.subHeader}</h1></div>
                <div><p>{contentItem.contents}</p></div>
                  <div><h1>{contentItem.subheader}</h1></div>
              {/* <LargeSingleContent
                sizeObject={sizeObject}
                parentInfo ={information}
                index = {index}
                linkTo={information.linkTo}
                contentItem= {contentItem}
                /> */}


            </div>
            {contentItem.linkSource?
            <div className="footer">
              <ul>
                <li><a href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site" target="_top"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
                <li><a href={contentItem.linkSource} target="_blank"><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/bryanschauerte" target="_blank"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                </ul>
            </div>: null}

          </div>)
          )}
          <div className="footer">
            <h1>{this.props.displayInfo.footer}</h1>
          </div>

      </div>
    )
  }
}
export default LargeVersion;
