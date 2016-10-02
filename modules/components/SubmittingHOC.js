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
            let bearer = localStorage.getItem('token');
            bearer = JSON.parse(bearer).token;
            const headers = {

            'Authorization': 'Bearer ' + bearer
            };
            let sendingData= this.props.sendData;
            let typeOfReq = sendingData.contentItems.beenSaved? 'put': 'post';
            let currentState = this.state;
            let self = this;

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
            axios[typeOfReq]('/maincontents', sendingData, {headers})
              .then( (res)=> {
                    console.log(res, "res client")


                    self.setState({
                      makingRequest:false,
                      result: true
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


          render(){

            const props = Object.assign({}, this.props, {
              submit: this.submit.bind(this),
              clearSendData: this.clearSendData.bind(this),
              btnState: this.state



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
