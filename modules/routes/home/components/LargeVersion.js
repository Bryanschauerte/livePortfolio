import React from 'react';
import classNames from 'classnames';
import CodePenHandler from './CodePenHandler';
import GistAddition from './GistAddition';
import ImageSlider from './ImageSlider';

class LargeVersion extends React.Component{
  constructor(props){
    super(props);
    this.state={}
    this._handleClose = this._handleClose.bind(this);
    this._handleStringForUrl = this._handleStringForUrl.bind(this);
    this.wrapLinks = this.wrapLinks.bind(this);
  }


  _handleStringForUrl(string, index='all'){

    let arr = string.split(', ');
    if(index != 'all'){
      return arr[index];
    }
    return arr;
  }


  _handleClose(){
    this.props.handleClose()
  }
  

  wrapLinks(string, linkArray){

    if( !linkArray ){
      return string;
    }

    const searchTarget = /(##)/g;
    const stringTolinkArray = this._handleStringForUrl(linkArray);
    let num =0;
    let indexOfArr = 0;
    let linkedString = string.replace(searchTarget, ()=>{

      let firstOne = num%2 == 0;
      let aStartTag = `<a rel='external' target='_blank' href='${stringTolinkArray[indexOfArr]}'>`;
      let aEndTage =`</a>`;
      num+=1;
      if(firstOne){
        indexOfArr +=1;
      }
      return firstOne? aStartTag: aEndTage;

    })

    return linkedString;
  }

  render(){

    return(
      <div className='LV_OuterCont'>
        <div className='LV_innerContents'>
        <div>{this.props.displayInfo.type}</div>

        <div className="LS_titleOuter">
          {this.props.displayInfo.title}

        </div>
        <div
          className="closeBtn fa fa-compress fa-2x"
          onClick= {this.props.handleClose}>

        </div>
            {this.props.displayInfo.main.map(
              (contentItem, index)=>(
                <div className="LS_contents" key ={Math.random()*index}>


              <div className="LScontentItems">

                    {contentItem.subHeader?
                      <div className="innerContents_headerContents">
                        <h1>{contentItem.subHeader}</h1>
                      </div>: null}

                    {contentItem.problem?<div className="problemSolution">
                      <ul>
                        <li><h2>Problem:</h2> {contentItem.problem}</li>
                        <br/>
                        <li><h2>Solution:</h2> {contentItem.solution}</li>
                      </ul>
                    </div>:null}

                    {contentItem.subheader?
                      <div><h1>{contentItem.subheader}</h1></div>: null}

                  {contentItem.contents?
                    <div className='paragraph'>
                      <p dangerouslySetInnerHTML={{__html: this.wrapLinks(contentItem.contents, contentItem.linksPresent)}}></p>
                    </div>: null}

                      {contentItem.containsCodePen?<div>
                        <CodePenHandler
                          style={{height:265, width:"100%"}}
                          iframeSrc={
                            this._handleStringForUrl(contentItem.containsCodePen, 0)
                          }
                          userPen='http://codepen.io/BSchauerte'
                          penHref={
                            this._handleStringForUrl(contentItem.containsCodePen, 1)
                          }/>
                        <h4>{contentItem.mediaTitle}</h4></div>: null}

                          {contentItem.gistId? <div className="addSideMargin">
                            <GistAddition gistId={contentItem.gistId}/>
                            <h4>{contentItem.mediaTitle}</h4></div>: null}

                      {contentItem.containsMedia == 'video'?
                        <div className="addSideMargin">
                          <div className="paragraph">
                            <h1>{contentItem.mediaTitle}</h1>
                          </div>
                            <video
                              src={contentItem.links}
                              width= "100%"
                              type="video/mp4"
                              controls/>

                        </div>: null}

                  {contentItem.containsMedia == 'images'?<div>
                    <div className="paragraph">
                      <h1>{contentItem.mediaTitle}</h1>
                    </div>
                    <ImageSlider size ={{height: 'auto', width:'50%'}}
                      images={
                        this._handleStringForUrl(contentItem.links)
                      }/>
                  </div>:null}



            </div>
            {contentItem.conclusion?
              <div className="LScontentItems">
        <p className="paragraph">{contentItem.conclusion}</p>
            </div>: null}

          </div>)
          )}
          {this.props.displayInfo.footer?

            <div className="footer">

              <div className="footerDisplay">
                <h4>{this.props.displayInfo.footer}</h4>
              </div>
              <ul>
                <li>
                  <a
                  href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site"
                  target="_top">
                  <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                  </a>
                </li>

                <li>
                  <a href={this.props.displayInfo.linkSource} target="_blank">
                    <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/bryanschauerte"
                    target="_blank">
                    <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                  </a>
                </li>

              </ul>
            </div>: null}
      </div>
  </div>
)}
}
export default LargeVersion;
