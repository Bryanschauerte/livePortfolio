import React from 'react';
import classNames from 'classnames';

   class EmptyInput extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                name: this.props.name,
                value:this.props.stateValue,
                indexNum: this.props.indexNum,
                isHovering:false,
                smallable: this.props.smallable,
                focused: false
               }
              this._handleChange = this._handleChange.bind(this);
              this._handlePassBack = this._handlePassBack.bind(this);
              this._getStateValue = this._getStateValue.bind(this);
              this._handleMouseEnter = this._handleMouseEnter.bind(this);
              this._handleMouseLeave = this._handleMouseLeave.bind(this);
              this._handlefocus= this._handlefocus.bind(this);
              this._handleBlur = this._handleBlur.bind(this);
            }
            _handleBlur(event){
              console.log(this.state, "state")
              event.preventDefault();
              if(this.props.isPreview){
                this.props._handleInputDataChangePass(this.state, true);
              }
              this.props._handleInputDataChangePass(this.state);
              this.setState({focused: false});
            }
            _handlefocus(event){
              console.log(this.state, "state")
              event.preventDefault();
              this.setState({focused: true});
            }
            _handleMouseLeave(event){
              event.preventDefault();
              this.setState({isHovering: false});
            }
            _handleMouseEnter(event){
              event.preventDefault();
              this.setState({isHovering: true});
            }
            _handleChange(e){
              this.setState({
                value: e.target.value
              })
            }

            _handlePassBack(){
              if(this.props.isPreview){
                this.props._handleInputDataChangePass(this.state, true)
              }
              this.props._handleInputDataChangePass(this.state)

            }
            _getStateValue(){
              let value = this.state.value;
              return value;
            }



            render() {
              let emptyInputClasses= classNames({
                'emptyInputDefault': this.props.smallable,
                'emptyInputShowtime': (this.state.isHovering || this.state.focused) || !this.props.smallable
              })
              let emptyTextAreaClasses= classNames({
                'emptyTextAreaDefault': this.props.smallable,
                'emptyTextAreaShowtime': (this.state.isHovering || this.state.focused) || !this.props.smallable
              })

              return (<div
                onMouseEnter={this._handleMouseEnter}
                onMouseLeave={this._handleMouseLeave}
                className='emptyInputContainer'>

                  <label>{this.props.label}</label>
                  {this.props.isTextArea? <textarea
                    className={emptyTextAreaClasses}
                    type="text"
                    value={this.state.value || this.props.stateValue}
                    onChange={this._handleChange}
                    />:
                  <input
                      className={emptyInputClasses}
                      onBlur={this._handleBlur}
                      onFocus={this._handlefocus}
                      type="text"
                      value={this.state.value || this.props.stateValue}
                      onChange={this._handleChange}
                      />}
                </div>
              )
              }
            }
        EmptyInput.defaultProps={
          indexNum: 'NA',
          showfeilds: false,
          isTextArea: true,
          smallable: true
        }

          export default EmptyInput;
