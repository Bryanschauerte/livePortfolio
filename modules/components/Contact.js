import React from 'react';
import './Contact.css'
import FormCreator from './FormCreator';
import inputHOC from './inputWrapperHOC';
import inputStorageHOC from './InputStorageHOC';
import Creation from './Creation'



class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      feilds:[{
        title: [{name:"Title", type: "string"}],
        header:[{name:"Header", type: "string"}],
        main: [
          {
            link:{name:"link", type:"string"},
            linkSource:{name:"link", type:"string"},
            content:[{name:"link", type:"string"}],
            style:{name:'style', type:"string"}
          }
        ],
        footer:{name:"Footer", type: "string"}
      }
    ],
    mode: "adding"


    }
    this._changeMode = this._changeMode.bind(this);
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

  }

  render(){
    console.log('admin hit, these props', this.props);

    return(<div>
      <div>
        <h1>Admin</h1>
      </div>

      <div>
        <h3>Header WEEEEE</h3>
        <Creation />
      </div>

      <div>

      </div>
      </div>
    )
  }

}

export default Contact;
