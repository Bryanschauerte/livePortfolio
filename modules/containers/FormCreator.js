import React from 'react';



class FormCreator extends React.Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._makeInput = this._makeInput.bind(this);
    this._renderInputs = this._renderInputs.bind(this);
  }


  _handleClick(e){
    e.preventDefault();
    // this.props._returnData( this.props.getState())
    console.log(this.props.getState(), "getting state")
this.props._handleSubmitToStore(this.props.getState())
  }
  _renderInputs(){
    let props =this.props.labels;
console.log(props, "this.props.labels")
    let inputs = [];
    props.map( (item) =>{
      inputs.push(this._makeInput(item));
    })

    return inputs
  }

  _makeInput(item){

    return(
      <div className='formItemContainer' key={item.name}>
        <label className='formItemContainer'>{item.name}</label>
        <input
          className='formItemInput'
          type={item.type} {...this.props.fields(item.name)}/>
      </div>
    )
  }

  render(){

    let meat = this._renderInputs();
    let submitting = this.props._handleSubmit? this.props._handleSubmit: null;
    return(
      <div className={this.props.formClass}>
        <form onSubmit={submitting}>
            {meat}
            <button type="submit" onClick={this._handleClick}>
              {this.props.btnLabel}
            </button>
        </form>
      </div>
    )
  }
}


FormCreator.PropTypes={
  labels: React.PropTypes.array.isRequired,
  _returnData: React.PropTypes.func,
  _handleSubmit: React.PropTypes.func,
  btnLabel: React.PropTypes.string.isRequired,
  formClass: React.PropTypes.string.isRequired

}
export default FormCreator;


{/* <FormCreatorRender
  formClass="emailFormClass"
  btnLabel="Submit"
  _returnData={this.grabData}
  labels={this.props.formFeilds}
  // submitting={this._handleSubmit}
  /> */}
