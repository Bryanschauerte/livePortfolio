import React from 'react';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import Conversation from '../components/Conversation';
import CodePenHandler from '../components/CodePenHandler';
const LargeSingleContent = (props)=>{

    let {
      contentItem,
      index,
      parentInfo,
      sizeObject,
      unClick,
      type } = props;

    let text = contentItem.content.map(item =>(

      <div key ={tokgen.generate()} >
        {item.picture?
          <img
            src={item.picture}
            width={item.picture.width}
            height={item.picture.height} />: null}
        {item.codePenInfo?
          <CodePenHandler
              style={sizeObject.contentsOuter.codePen}
              iframeSrc={item.codePenInfo.iframeSrc}
              userPen={item.codePenInfo.userPen}
              penHref={item.codePenInfo.penHref}/>: null}
        <div className="paragraph">
          <h4>{item.intro}</h4>
          <p>{item.text}</p>
        </div>
      </div>
    ))
      return <div>
        <div className="LSImageContainer">
          {parentInfo.type != 'demo'?
            <img
              src={contentItem.url}
              width={sizeObject.contentsOuter.image.width}
              height={sizeObject.contentsOuter.image.height} />
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
        <div className ="LS_RenderedContents">{text}
          <div className="footer">
            <ul>
              <li><a href="mailto:bryan.schauerte@gmail.com?Subject=Hey%20Bryan%20nice%20site" target="_top"><i className="fa fa-envelope fa-1x" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/Bryanschauerte" target="_blank"><i className="fa fa-github-square fa-1x" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/bryanschauerte" target="_blank"><i className="fa fa-linkedin-square fa-1x" aria-hidden="true"></i></a></li>
              </ul>
          </div></div>

      </div>
    }
export default LargeSingleContent;
