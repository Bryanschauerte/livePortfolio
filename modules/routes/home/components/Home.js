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
            typesAvaliable:[]

    }

    this._requestAllContents = this._requestAllContents.bind(this);
    this._constructTypeList = this._constructTypeList.bind(this);
    this._handleFilter = this._handleFilter.bind(this);

  }
      _constructTypeList(contents){

        let tempTypes = this.state.typesAvaliable;

        contents.map((item)=>{
          console.log(item, "const item home")
          if(item.contentItems.type &&
            tempTypes.indexOf(item.contentItems.type)== -1){

             tempTypes.push(item.contentItems.type)
          }
        })

        this.setState({
          typesAvaliable:tempTypes
        })


      }
      _handleFilter(type){
        console.log(type, "type from home filter")
        let currentFilter = this.state.filteredOut;
        currentFilter.indexOf(type) == -1? currentFilter.push(type):
          currentFilter.splice(currentFilter.indexOf(type), 1);
        this.setState({
          filteredOut: currentFilter
        })

      }

      _requestAllContents(){
        axios.get('/maincontents')
            .then( (response)=> {
                console.log(response, "db response");
                let contents = response.data;
                this._constructTypeList(contents)
                this.setState({
                  dataBaseContents: contents,
                  loaded: true
                })

              })

            }

    componentWillMount(){
      this._requestAllContents();

    }
    componentDidMount(){

    }

  render(){
    let contents = this.state.dataBaseContents;
    let filteredOut = this.state.filteredOut;

    let listItems = this.state.typesAvaliable;

    console.log(this.state, "state of home");
    console.log(this.props, "PROps home")

    return(<div className="homeContainer">
          <Header
            classDefault = {this.state.loaded}
            listItems={listItems}
            filteringPassBack={this._handleFilter}
            filteredOut={filteredOut} />


      <div classDefault={this.state.loaded} className="homeMainContainer">
        {/* <MainView
          dataBaseContents= {this.state.dataBaseContents}
          {...this.props}/> */}

      </div>

      </div>
    )
  }

}

export default Home;
