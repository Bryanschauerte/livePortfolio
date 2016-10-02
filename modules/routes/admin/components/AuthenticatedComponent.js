import React from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    constructor() {
      super()
      this.state = {
        userLoggedIn:false,
        jwt:null,
        loginTries:0,
        user:null
      }
    }

    _getLoginState() {
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.user,
        jwt: LoginStore.jwt
      };
    }
    getJwtInfo(savedJwt){
      let savedJwt = localStorage.getItem('jwt');
      let username = savedJwt.username;
      let password = savedJwt.password;
      let _id = savedJwt._id;

    }

    componentDidMount() {
      var savedJwt = localStorage.getItem('jwt');

      if (savedJwt) {
        getJwtInfo(savedJwt)
        // localStorage.setItem('jwt', jwt);
      }
      if()
    }
    
    login(e){
      e.preventDefault();
      let jwt = this.state.jwt;
      let sendingData= this.props.sendData;
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

    render() {
      return (
      <ComposedComponent
        {...this.props}
        user={this.state.user}
        jwt={this.state.jwt}
        userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};
