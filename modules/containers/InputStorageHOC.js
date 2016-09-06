import React from 'react';

const inputStorageHOC= (WrappedComponent) => {
    return class InputStorage extends React.Component{
            constructor(props){
              super(props);
              this.state={

              }
              this._handleAddToStore= this._handleAddToStore.bind(this);
              this._handleSubmitToStore= this._handleSubmitToStore.bind(this);
              this._getState = this._getState.bind(this);
            }


            _getState(){
              return this.state;
            }

            _handleSubmitToStore(dataObj){
              let feilds = dataObj.fields;
              let inputObjKeys = Object.keys(feilds);
              inputObjKeys.map(key=>{
                let data = {
                  value:feilds[key].value,
                  name: key
                }
                this._handleAddToStore(data);
              })

            }

            _handleAddToStore(pieceObj){

              let currentState = this.state;
                currentState[pieceObj.name]={
                  value: pieceObj.value
              }

              this.setState(currentState)
              console.log("state", this.state)
            }

            render() {

              const props = Object.assign({}, this.props, {
                _handleSubmitToStore: this._handleSubmitToStore.bind(this),
                _getState: this._getState.bind(this)
              })

              return (
                <div>
                  <WrappedComponent {...props}/>
                </div>
              )
            }

          }
        }

export default inputStorageHOC;
