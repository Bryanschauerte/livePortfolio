import React from 'react';
import CodePenHandler from './CodePenHandler';
class Conversation extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      userInputText:''
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    // this._updateUserInput = this._updateUserInput.bind(this);
  }
  _handleSubmit(e){
    e.preventDefault();
    let input = {
      userName: this.refs.userName.value,
      textInput: this.refs.userTextInput.value,
      commentOn: this.information.id
    }
    this.refs.userName.value ='';
    this.refs.textInput.value ='';
  this.props.sendInput(input);
  }
  render(){
    return <div>
      {/*<iframe width="100%" height='253px' scrolling="no" src='//codepen.io/BSchauerte/embed/preview/kXJGWw/?height=265&theme-id=light&default-tab=result&embed-version=2' frameBorder="no" allowTransparency="true" allowFullScreen="true" style={{height: "100%", width: "100%"}}>
        <a href='https://codepen.io/BSchauerte/pen/kXJGWw/'>See this pen</a> by (<a href='http://codepen.io/BSchauerte'>@BSchauerte</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>*/}
      <CodePenHandler style={{height:"265px", width: "265px"}} userPen='http://codepen.io/BSchauerte' penHref='https://codepen.io/BSchauerte/pen/kXJGWw/' iframeSrc='//codepen.io/BSchauerte/embed/preview/kXJGWw/?height=265&theme-id=light&default-tab=result&embed-version=2' />
      <form onSubmit={this._handleSubmit}>
        <input type ="text" ref="userName" placeholder="What do we call you?"/>
        <input type = "text" ref ="userTextInput" placeholder="Say something" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  }
}

export default Conversation;
