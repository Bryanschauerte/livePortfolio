import classNames from 'classnames';
import React from 'react';

class  Ls extends React.Component{

  render(){
    let {contentItem, index, sizeObject, unClick} = this.props;
    let text = contentItem.content.map(item =><p key ={tokgen.generate()} >{item}</p>)

    return(
      <div >
            <div className="LSImageContainer">
              <img
              src={contentItem.url}
              width={sizeObject.contentsOuter.image.width}
              height={sizeObject.contentsOuter.image.height} />
          </div>
            {text}
            <div className="LS_footer">

              <p>{Conversation}</p>
                this is the end my friend

            </div>
          </div>)
        }
    }
export default Ls;
