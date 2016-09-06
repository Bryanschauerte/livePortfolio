import React from 'react'
import Creation from './Creation';
import axios from 'axios';


class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    mode: "adding",
    dataBaseContents: []




    }
    this._changeMode = this._changeMode.bind(this);
    this._requestAllContents = this._requestAllContents.bind(this);
  }



  _requestAllContents(){

      axios.get('/maincontents')
          .then( (response)=> {
              console.log(response, "db response");
              let dbReturn = [];

            })
            .catch( (error) => {
              console.log(error);
            });
    }


  _changeMode(){
   let currentState = this.state;

   if(currentState.mode == 'adding'){
     currentState.mode = "reviewing";

   }else if (currentState.mode == 'reviewing') {

     currentState.mode = 'adding';
   }

   this.setState({currentState})
  }

  componentDidMount(){
    // this._requestAllContents()
    // ask to log in and if not right, send back to home
  }

  render(){


    return(<div className="adminContainer">
        <h1>Admin</h1>

      <div className="adminCreationContainer">
        <h3>Header</h3>
        <Creation />
      </div>
      <div>
        
      </div>

      <div>

      </div>
      </div>
    )
  }

}

export default Admin;
