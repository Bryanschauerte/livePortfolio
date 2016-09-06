import React from 'react';


 class BtnHandler extends React.Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this)
  }
  _handleClick(e){
    e.preventDefault();

    this.props.clickAction(this.props.callBackProp)
  }

  render(){
    let hidden = {display:'none'}

    return(
      <div style={this.props.ishidden? hidden: null}>
        <button disabled={this.props.isDisabled} onClick={this._handleClick}>
          {this.props.label}
        </button>
      </div>
    )
  }
}


export default BtnHandler;
