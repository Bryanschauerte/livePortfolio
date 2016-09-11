import React from 'react'
import Creation from './Creation';
import Header from '../components/Header'
import axios from 'axios';
import MainView from './MainView';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
            contents: null,
            loaded: false,
            dataBaseContents: null,
            filteredOut:[],
            typesAvaliable:null

    }

    this._requestAllContents = this._requestAllContents.bind(this);
    this._formatTypes = this._formatTypes.bind(this);


  }

      _requestAllContents(){
        axios.get('/maincontents')
            .then( (response)=> {
                console.log(response, "db response");
                let contents = response.data;
                let formattedObs = this._formatTypes(contents);
                let list = Object.keys(formattedObs)
                console.log(formattedObs, "formattedObs")
                console.log(list, "formattedObs")
                this.setState({
                  dataBaseContents: contents,
                  loaded: true,
                  formattedObs: formattedObs,
                  contentTypes: list

                })

              })
              // .catch( (error) => {
              //   console.log(error);
              // });
            }

    componentWillMount(){
      this._requestAllContents();

    }



    _formatTypes(data){
      let typesList={};

        data.map(item=>{

          if(typesList[item.type]){
            typesList[item.type].push(item);
          }
          if(!typesList[item.type]){
            typesList[item.type] = [];
            typesList[item.type].push(item);
          }
        })
        return typesList;

    }



  render(){
    let contents = this.state.dataBaseContents;
    let list = this.state.contentTypes;
    console.log(this.state, "state of home");
    console.log(this.props, "PROps home")


    return(<div className="homeContainer">
          <Header
            classDefault = {this.state.loaded}
            listItems={list} />


      <div classDefault={this.state.loaded} className="homeMainContainer">
        <MainView
          dataBaseContents= {this.state.dataBaseContents}
          {...this.props}/>

      </div>

      </div>
    )
  }

}

export default Home;
