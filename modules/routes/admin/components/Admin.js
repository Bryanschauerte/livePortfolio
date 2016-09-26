import React from 'react'
import Creation from './Creation';
import axios from 'axios';
import Preview from './Preview'
import classNames from 'classnames';


class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    mode: "adding",
    dataBaseContents: [],
    selected: null,
    isLoaded:false
    }

    this._changeMode = this._changeMode.bind(this);
    this._requestAllContents = this._requestAllContents.bind(this);
    this._handleSelectItem = this._handleSelectItem.bind(this);
    this._handleFeildRendering = this._handleFeildRendering.bind(this);

  }

  _handleFeildRendering(hasSelected){
    const emptyData = {
      title: '',
      header:'',
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
          style:'',
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
              console.log(response, "db response");
              let dbReturn = response.data
              this.setState({
                dataBaseContents:dbReturn,
                isLoaded: true
              })
            })
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
              <div className = "adminControl">
                <ul>
                  <li
                    className='adminNavBtns'>
                    Make a content Inactive</li>
                  <li href="/home"
                    className='adminNavBtns'>Home</li>
                  <li href="/"
                    className='adminNavBtns'>Start</li>

                </ul>

              </div>
              <div className="adminSections">

                <div className="adminCreationContainer">
                  <div className= "adminCreationInnerContainer">
                    {this.state.isLoaded? <Creation reload={this._requestAllContents} feilds = {itemToEdit}/>: null}
                  </div>
                </div>

                <div className="adminPreviewContainer">
                  {this.state.isLoaded? <Preview
                    getItemTarget={this._handleSelectItem}
                    showItems="true"
                    infoArray={contents}/>: null}
                </div>
              </div>
      </div>
    )
  }

}

export default Admin;
