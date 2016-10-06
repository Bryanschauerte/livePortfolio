import React from 'react'

import Header from './Header'
import axios from 'axios';
import MainView from './MainView';
import SideContainer from './SideContainer';

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
    this._handleRowSectionsData = this._handleRowSectionsData.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this._handleCloseSide = this._handleCloseSide.bind(this);
  }

    _handleShowInfoContainer(){

      let containerState = this.state.displaySideContainer;
      this.setState({
        displaySideContainer: !containerState
      })
    }
    _handleCloseSide(){
      this.setState({
        displaySideContainer:false
      })
    }

      _handleScroll(e){

        if( !this.state.initialScroll ){

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
    _handleRowSectionsData(arr){


      const filteringOut = (infoBit) => {

        return this.state.filteredOut.indexOf(
          infoBit.contentItems.type.toLowerCase()) == -1? true: false;
        }
      let filtered = arr.filter(filteringOut);

      let numRows = Math.ceil(filtered.length/2);
      let rows = [];
      for(let x = 0; x < numRows; x++){
        let start = x*2;
        let end = start + 2;
        rows.push(filtered.slice(start, end));
      }

      return rows;
    }

    renderRows(){
      let data = this._handleRowSectionsData(this.state.dataBaseContents);
      let rows = data.map((item, index)=>{
        return(
          <MainView
            closeSide={this._handleCloseSide}
            dataBaseContents= {item}
            loaded={this.state.loaded}
            typesAvaliable={this.state.typesAvaliable}
            showItems={this.state.showItems}
            {...this.props}/>)
      })

      return rows;

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
            filteredOut={filteredOut}
            sideActive={this.state.displaySideContainer}
            handleClose={this._handleShowInfoContainer} />


      <div classDefault={this.state.loaded} className="homeMainContainer">
        {this.state.loaded? this.renderRows(): null}

      </div>

      <SideContainer
        {...this.props}
        isActive={this.state.displaySideContainer}
        handleClose={this._handleShowInfoContainer}/>

      </div>
    )
  }

}

export default Home;
