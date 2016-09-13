import React from 'react'
import Creation from './Creation';
import Header from '../components/Header'
import axios from 'axios';
import MainView from './MainView';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
            loaded: false,
            dataBaseContents: null,
            filteredOut:[],
            typesAvaliable:[],
            showItems:true
    }

    this._requestAllContents = this._requestAllContents.bind(this);
    this._constructTypeList = this._constructTypeList.bind(this);
    this._handleFilter = this._handleFilter.bind(this);

  }
      _constructTypeList(contents){

        let tempTypes = this.state.typesAvaliable;

        contents.map((item)=>{

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


    return(<div className="homeContainer">
          <Header
            classDefault = {this.state.loaded}
            listItems={listItems}
            filteringPassBack={this._handleFilter}
            filteredOut={filteredOut} />


      <div classDefault={this.state.loaded} className="homeMainContainer">
        <MainView
          dataBaseContents= {this.state.dataBaseContents}
          loaded={this.state.loaded}
          filteredOut={this.state.filteredOut}
          typesAvaliable={this.state.typesAvaliable}
          showItems={this.state.showItems}
          {...this.props}/>

      </div>

      </div>
    )
  }

}

export default Home;
