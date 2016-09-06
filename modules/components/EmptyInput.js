import React from 'react';

   class EmptyInput extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                name: this.props.name,
                value:this.props.stateValue,
                indexNum: this.props.indexNum
               }
              this._handleChange = this._handleChange.bind(this);
              this._handlePassBack = this._handlePassBack.bind(this);
              this._getStateValue = this._getStateValue.bind(this);
            }

            _handleChange(e){
              this.setState({
                value: e.target.value
              })
            }

            _handlePassBack(){
              this.props._handleInputDataChangePass(this.state)
            }
            _getStateValue(){
              let value = this.state.value;
              return value;
            }



            render() {
              let value = this.state.value;
              return (<div className='emptyInputContainer'>

                  <label>{this.props.label}</label>
                  <textarea


                    onBlur={this._handlePassBack}
                    type="text"
                    value={this.state.value}
                    onChange={this._handleChange}
                    />
                </div>
              )
              }
            }
        EmptyInput.defaultProps={
          indexNum: 'NA'
        }

          export default EmptyInput;
