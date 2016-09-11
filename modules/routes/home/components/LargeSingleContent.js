import React from 'react';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import Conversation from '../components/Conversation';
import CodePenHandler from '../components/CodePenHandler';
import ImageSlider from '../components/ImageSlider';

const LargeSingleContent = (props)=>{

    let {
      contentItem,
      index,
      parentInfo,
      sizeObject,
      unClick,
      type
     } = props;


    let text = contentItem.content.map(item =>(

      <div key ={tokgen.generate()} >
        {item.picture?
          <img
            style={{height:item.picture.height , width:item.picture.width}}
            src={item.picture} />: null}
        {item.codePenInfo?
          <div><CodePenHandler
              style={sizeObject.contentsOuter.codePen}
              iframeSrc={item.codePenInfo.iframeSrc}
              userPen={item.codePenInfo.userPen}
              penHref={item.codePenInfo.penHref}/>
            <h4 className="LSCaption">{item.codePenInfo.caption}</h4></div>: null}

        <div className="paragraph">
          <div className={item.className}>
            <h4>{item.intro}</h4>
          <p>{item.text}</p>
          </div>
        </div>
      </div>
    ))
      return <div>
        <div className="LSImageContainer">
          {parentInfo.type != 'demo'?
            <ImageSlider size ={sizeObject.contentsOuter.image}
              images={contentItem.picturesArray}/>
            : <CodePenHandler
                style={sizeObject.contentsOuter.codePen}
                iframeSrc={contentItem.codePenInfo.iframeSrc}
                userPen={contentItem.codePenInfo.userPen}
                penHref={contentItem.codePenInfo.penHref}/>
          }
      </div>
      <div className="LS_headerContents">
        {parentInfo.header}
        {parentInfo.type == 'project'? <div className="problemSolution">
          <ul>
            <li><h2>Problem:</h2> {parentInfo.problem}</li>
            <br/>
            <li><h2>Solution:</h2> {parentInfo.howSolve}</li>
          </ul>
        </div>:null}
      </div>
    {  contentItem.video? <div className="videoContainer">
        <div className="paragraph">
          <h1>{contentItem.video.title}</h1>
        </div>
          <video
            src={contentItem.video.link}
            width= "100%"
            type="video/mp4"
            controls/>

      </div>: null}
        <div className ="LS_RenderedContents">{text}
</div>

      </div>
    }
export default LargeSingleContent;
