import React from 'react';
import axios from 'axios';
import classNames from 'classnames';


class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      jwt: null,
      loginStatus:null
    };
    this.checkLocalStorage = this.checkLocalStorage.bind(this);
    this.loginUserFailure = this.loginUserFailure.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logout = this.logout.bind(this);
    this._handleLoginChange = this._handleLoginChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);

  }
  componentDidMount(){

      this.checkLocalStorage();

  }
  _handleLoginChange(e){

    this.setState({
      username: e.target.value
    })

  }
  _handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })

  }
  checkLocalStorage(){
    let jwt = localStorage.getItem('token');
    jwt = JSON.parse(jwt);
    let tempState = this.state;

    if(jwt){
      let adminStatus = jwt.admin? 'Admin': 'Guest'
      tempState.jwt = jwt;
      tempState.loginStatus = adminStatus;
      this.setState({tempState})
    }

  }

    loginUserFailure() {
      localStorage.removeItem('token');
      this.setState({
        username: '',
        password: '',
        jwt: null,
        loginStatus:null
      })

    }

    logout(e) {
      e.preventDefault();
      localStorage.removeItem('token');
      this.setState({
        username: '',
        password: '',
        jwt: null,
        loginStatus:null
      })
    }

    loginUser(e) {
      e.preventDefault();
      const self = this;
      axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }).then( (res, err)=> {
                console.log(res, "res client")
                let token = JSON.stringify(res.data.token);
                localStorage.setItem('token', token);
                let adminStatus = res.data.admin? 'Admin': 'Guest'
                self.setState({
                  jwt:res.data,
                  loginStatus: adminStatus
                })
            })
                .catch(function (err) {
                  self.setState({
                    loginStatus:'wrong'
                  })
                  self.loginUserFailure();
                  console.log(err, "there was an error ")
                })



    }

    render () {

      let loginFeildsClasses= classNames({
        'loginBit': true,
        'loginHide': this.state.jwt
      })

      let inputClasses= classNames({
        'incorrectInput': this.state.loginStatus=='wrong'
      })


      return (<div className="LoginContainer">
          {this.state.jwt?<h3>Welcome {this.state.loginStatus}!</h3>:
          <h3>Login to submit to database</h3>}
          <form role='form'>
          <div className={loginFeildsClasses}>
            <label>Username</label>
              <input type='text'
                className={inputClasses}
                className='loginInput'
                value={this.state.username}
                onChange= {this._handleLoginChange}
                placeholder='Username'
                 />
          </div>
          <div className={loginFeildsClasses}>
              <label>Password</label>
              <input
                className={inputClasses}
                onChange={this._handlePasswordChange}
                value={this.state.password}
                type='password'
                placeholder='Password' />
            </div>
            <div className="loginBtns">
              <button className={this.state.jwt?'loginHide':null} onClick={this.loginUser}>Submit</button>
              <button onClick={this.logout}>Logout</button>
            </div>
        </form>
      </div>);
  }


}
export default Login;
