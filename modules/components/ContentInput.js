import React from "react";
import Relay from "react-relay";
import CreateInformationMutation from '../../mutations/CreateInformationMutation';


export default class InputContainer extends React.Component{

handleSubmit = (e) => {
  e.preventDefault();
  let input = {
      title: this.refs.title.value,
      header: this.refs.header.value,
      content: this.refs.content.value,
      typeOfContent: this.refs.typeOfContent.value
    };
    this.refs.title.value = "";
    this.refs.header.value = "";
    this.refs.content.value = "";
    this.refs.typeOfContent.value = "";
    this.props.onSave(input, CreateInformationMutation)
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="title"  placeholder="title"/>
        <input type="text" ref="header"  placeholder="header" />
        <input type="text" ref="content"  placeholder="content" />
        <input type="text" ref="typeOfContent"  placeholder="Type Of Content"/>
        <button type="submit">ADD</button>
      </form>
    </div>
    );
  }
}
