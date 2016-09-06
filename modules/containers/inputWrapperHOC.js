import React from 'react';

const inputHOC= (WrappedComponent, props) => {

  return class PP extends React.Component {
            constructor(props) {
              super(props)
              this.state = {
                fields: {}
               }
            }
            getState(){
              let state = this.state;
              return state;
            }
            getField(fieldName) {
              if (!this.state.fields[fieldName]) {
                this.state.fields[fieldName] = {
                  value: '',

                  onChange: event => {
                    this.state.fields[fieldName].value = event.target.value
                    this.forceUpdate()
                  },

                }
              }

              return {
                value: this.state.fields[fieldName].value,
                onChange: this.state.fields[fieldName].onChange,
              }
            }

            render() {
              console.log(this.props, "inputw props")
              const props = Object.assign({}, this.props, {
                fields: this.getField.bind(this),
                getState: this.getState.bind(this)
              })

              return (
                <div>
                  <WrappedComponent {...props}/>
                </div>
              )
            }
            }
          }

          export default inputHOC;
