import React from 'react'
import Creation from './Creation';
import Header from '../components/Header'
import axios from 'axios';
import MainView from './MainView';
import Sidecontainer from './Sidecontainer';
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
            loaded: false,
            dataBaseContents: null,
            filteredOut:[],
            typesAvaliable:[],
            showItems:true,
            displaySideContainer: true,
            initialScroll:false
    }

    this._requestAllContents = this._requestAllContents.bind(this);
    this._constructTypeList = this._constructTypeList.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this._handleShowInfoContainer = this._handleShowInfoContainer.bind(this);

  }

  _handleShowInfoContainer(){
    console.log("ding");
    let containerState = this.state.displaySideContainer;
    this.setState({
      displaySideContainer: !containerState
    })
  }


      _handleScroll(e){
        console.log(window.scrollY, "window.scrollY " );

        if(!this.state.initialScroll){
          this.setState({
            initialScroll: true,
          displaySideContainer: false})
        }

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

        type = type.toLowerCase()
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


  render(){
    let contents = this.state.dataBaseContents;
    let filteredOut = this.state.filteredOut;

    let listItems = this.state.typesAvaliable;
console.log(this.state, "state")

    return(<div
      onScroll={this._handleScroll}
      className="homeContainer">
          <Header
            classDefault = {this.state.loaded}
            listItems={listItems}
            filteringPassBack={this._handleFilter}
            filteredOut={filteredOut}
            handleClose={this._handleShowInfoContainer} />


      <div classDefault={this.state.loaded} className="homeMainContainer">
        <MainView
          dataBaseContents= {this.state.dataBaseContents}
          loaded={this.state.loaded}
          filteredOut={this.state.filteredOut}
          typesAvaliable={this.state.typesAvaliable}
          showItems={this.state.showItems}
          {...this.props}/>

      </div>

  <Sidecontainer
    {...this.props}
    isActive={this.state.displaySideContainer}
    handleClose={this._handleShowInfoContainer}/>

      </div>
    )
  }

}

export default Home;
