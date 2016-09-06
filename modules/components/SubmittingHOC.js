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
            sendingData.beenSaved = true;

            let currentState = this.state;
            if(currentState.hasErrorSending){
              //reset time
              return this.clearSendData();
            }
            currentState.makingRequest = true;
            currentState.result = false;
            this.setState({currentState})
            let self = this;
            axios.post('/maincontents', sendingData)
              .then(function (res) {
                    console.log(res, "res client")
                    currentState.makingRequest = true;
                    currentState.result = true;

                    self.setState({currentState})
                  })
                      .catch(function (err) {
                        sendingData.beenSaved = false;
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


// submitAction(event) {
//       event.preventDefault()
//       this.props.router.push({
//         pathname: '/page',
//         query: {
//           qsparam: this.state.value
//         }
//       })
//     },
