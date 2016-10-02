dispatch(signUpUser(values))
 .then((response) => {
 let data = response.payload.data;
 //if any one of these exist, then there is a field error
 if(response.payload.status != 200) {
   //let other components know
   dispatch(signUpUserFailure(response.payload));
   reject(data); //this is for redux-form itself
 } else {
   //store JWT Token to browser session storage
   //If you use localStorage instead of sessionStorage, then this w/
   //persisted across tabs and new windows.
   //sessionStorage = persisted only in current tab

  sessionStorage.setItem(‘jwtToken’, response.payload.data.token);

  //let other components know that we got user and things are fine
  dispatch(signUpUserSuccess(response.payload));
  resolve();//this is for redux-form itself
 }
});



const mapDispatchToProps = (dispatch) => {
 return {
  loadUserFromToken: () => {
   let token = sessionStorage.getItem(‘jwtToken’);
   if(!token || token === ‘’) {//if there is no token, dont bother
    return;
   }
  //fetch user from token (if server deems it’s valid token)
  dispatch(meFromToken(token))
  .then((response) => {
   if (!response.error) {
    //store token
    sessionStorage.setItem(‘jwtToken’, response.payload.data.token);
    dispatch(meFromTokenSuccess(response.payload))
   } else {
    //remove token from storage
    sessionStorage.removeItem(‘jwtToken’);
    dispatch(meFromTokenFailure(response.payload));
   }
  });
 },
 resetMe: () =>{ // logout
 sessionStorage.removeItem(‘jwtToken’); //remove token from storage
 dispatch(resetToken());
 }
 }
}
