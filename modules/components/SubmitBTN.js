import React from 'react';


 class SubmitBTN extends React.Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }
  _handleClick(e){
    e.preventDefault();

    this.props.submit()
  }

  render(){
    let sending = {backgroundColor:'green'}
    let normal = {backgroundColor:'blue'}

    let checkState= this.props.checkState()
    return(
      <div style={checkState.makingRequest? sending: normal}>
        <button
          style={checkState.makingRequest? sending: normal}
          disabled={this.props.isDisabled} onClick={this._handleClick}>
          {this.props.label}
        </button>
      </div>
    )
  }
}


export default SubmitBTN;
