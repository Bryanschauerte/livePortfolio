import React from 'react'
import Creation from './Creation';
import axios from 'axios';
import Preview from './Preview'
import classNames from 'classnames';
import Login from './Login';

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    mode: "adding",
    dataBaseContents: [],
    selected: null,
    isLoaded:false,
    token:null
    }

    this._changeMode = this._changeMode.bind(this);
    this._requestAllContents = this._requestAllContents.bind(this);
    this._handleSelectItem = this._handleSelectItem.bind(this);
    this._handleFeildRendering = this._handleFeildRendering.bind(this);
    this.checkTokenStatus = this.checkTokenStatus.bind(this);

  }

  _handleFeildRendering(hasSelected){
    const emptyData = {
      title: '',
      footer:'',
      techStack:'',
      link:'',
      type:'',
      beenSaved:false,
      main: [
        {
          subheader:'',
          links:'',
          contents:'',
          linksPresent:'',
          containsCodePen:false,
          containsMedia: '',
          mediaTitle:'',
          problem:'',
          solution:'',
          conclusion:''
        }
      ],

      previewContents:{
        previewTitle:'',
        previewHeader: '',
        previewFooter:'',
        previewExtra: '',
        imageArrayPreview:''
    }

    }
      return hasSelected ? this.state.selected: {contentItems: emptyData};
  }
  _handleSelectItem(previewItem){

    this.setState({
      selected:previewItem,

    })
  }
  _requestAllContents(){

      axios.get('/maincontents')
          .then( (response)=> {

              let dbReturn = response.data
              this.setState({
                dataBaseContents:dbReturn,
                isLoaded: true
              })
              
            })
    }

  checkTokenStatus(){
    let tempState = this.state;
    let token = sessionStorage.getItem('jwtToken');
    if(token){
      tempState.token = token;
    }
    this.setState(tempState);

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
    this.checkTokenStatus()
    this._requestAllContents()
    // ask to log in and if not right, send back to home
  }

  render(){

    let contents = this.state.dataBaseContents;
    let adminIndex = 0;
    let itemToEdit = this._handleFeildRendering(this.state.selected)

    let navBtnsClasses= classNames({
      'adminNavBtns': true,
      // 'adminNavBtnsSelected': false
    })

    return(<div className="adminContainer">

              <div className="adminSections">

                <div className="adminCreationContainer">
                  <div className= "adminCreationInnerContainer">
                    {this.state.isLoaded? <Creation reload={this._requestAllContents} feilds = {itemToEdit}/>: null}
                  </div>
                </div>

                <div className="adminPreviewContainer">
                  <div><Login/></div>
                  {this.state.isLoaded? <Preview
                    getItemTarget={this._handleSelectItem}
                    showItems="true"
                    infoArray={contents}/>: null}
                </div>
                <div>

                </div>
              </div>
      </div>
    )
  }

}

export default Admin;
