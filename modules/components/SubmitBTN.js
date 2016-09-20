import React from 'react';


 class SubmitBTN extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      btnDisabled: false,
      sendingData: false,
      dataBack: false
    }
    this._handleClick = this._handleClick.bind(this);
    this._calculateStyle = this._calculateStyle.bind(this);
  }
  _calculateStyle(){
    let style;
    if(this.state.btnDisabled){
      style = {backgroundColor:'grey'}
    }
    if(this.state.sendingData){
      style = {backgroundColor:'blue'}
    }
    if(this.state.dataBack){
      style = {backgroundColor:'green'}
    }
    return style;
  }
  _handleClick(e){
    e.preventDefault();

    this.props.submit()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      btnDisabled: nextProps.btnState.makingRequest,
      sendingData: nextProps.btnState.makingRequest,
      dataBack: nextProps.btnState.result
    })

}
  render(){

    let requestStatus = this.props.btnState.makingRequest
    let isDisabled =this.state.btnDisabled
    return(
      <div >
        <button
          style={this._calculateStyle()}
          disabled={isDisabled} onClick={this._handleClick}>
          {this.props.label}
        </button>
      </div>
    )
  }
}


export default SubmitBTN;
