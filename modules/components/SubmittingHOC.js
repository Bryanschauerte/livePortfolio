import React from 'react';
import axios from 'axios'


function SubmittingHOC(WrappedComponent) {

return class SubmittingContainer extends React.Component{
          constructor(props){
            super(props);
            this.state={
              makingRequest: false,
              result: false,
              hasErrorSending: false
            }
          }

          submit(){

            let sendingData= this.props.sendData;
            let typeOfReq = sendingData.contentItems.beenSaved? 'put': 'post';
            let currentState = this.state;
            let self = this;
console.log(typeOfReq, "typeOfReq");
            if( sendingData.contentItems.beenSaved == false ){
              sendingData.contentItems.beenSaved = true;
            }

            if( currentState.hasErrorSending ){
              return this.clearSendData();
            }

            currentState.makingRequest = true;
            currentState.result = false;
            this.setState({currentState})
console.log(sendingData, "sendingData");
            axios[typeOfReq]('/maincontents', sendingData)
              .then( (res)=> {
                    console.log(res, "res client")
                    currentState.makingRequest = true;
                    currentState.result = true;

                    self.setState({
                      currentState
                    })
                  })
                      .catch(function (err) {
                        sendingData.contentItems.beenSaved = false;
                        currentState.makingRequest = false;
                        currentState.result = false;
                        currentState.hasErrorSending = true;
                        self.setState({currentState})
                        console.log(err, "there was an error ")
                      })
          }

          clearSendData(){
            this.setState({
              makingRequest: false,
              result: false,
              hasErrorSending:false
            })
          }
          checkState(){
            console.log(this.state);
            return this.state;
          }

          render(){

            const props = Object.assign({}, this.props, {

              checkState: this.checkState.bind(this),
              submit: this.submit.bind(this),
              clearSendData: this.clearSendData.bind(this)


            })

            return(
              <div>
                <WrappedComponent {...props} />
              </div>
            )
          }
        }
}
export default SubmittingHOC;
