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

      <form onSubmit={this._handleSubmit}>
        <input type ="text" ref="userName" placeholder="What do we call you?"/>
        <input type = "text" ref ="userTextInput" placeholder="Say something" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  }
}

export default Conversation;
