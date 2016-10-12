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
            displaySideContainer: false,
            initialScroll:false,
            activeItem:null
    }

    this._requestAllContents = this._requestAllContents.bind(this);
    this._constructTypeList = this._constructTypeList.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this._handleShowInfoContainer = this._handleShowInfoContainer.bind(this);
    this.showThisItem = this.showThisItem.bind(this);
    this.renderContents = this.renderContents.bind(this);
    this._handleCloseSide = this._handleCloseSide.bind(this);
    this._handleUpdateActiveItem = this._handleUpdateActiveItem.bind(this);
    this.filterByActiveId = this.filterByActiveId.bind(this);

  }

    _handleShowInfoContainer(){

      let containerState = this.state.displaySideContainer;
      this.setState({
        displaySideContainer: !containerState
      })
    }

    _handleUpdateActiveItem(id){

      this.state.activeItem? this.setState({activeItem: null}):
        this.setState({activeItem: id})
    }

    _handleCloseSide(){
      this.setState({
        displaySideContainer:false
      })
    }


    _handleScroll(){
      var target = document.getElementById("homeMain");
      target.scrollTop = 0;
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

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    filterByActiveId(item){
      return item._id === this.state.activeItem
    }

    showThisItem(item){
        return this.state.filteredOut.indexOf(
          item.contentItems.type.toLowerCase()) == -1? true: false;
    }

    renderContents(){
          let contents = this.state.dataBaseContents.filter(this.showThisItem);
          if(this.state.activeItem !=null){
            contents = contents.filter(this.filterByActiveId);
          }
          let toShow = contents.map(item =>{

            const boundActiveItemUpdate = () => this._handleUpdateActiveItem(item._id);
            return (
              <MainView
                handleScroll = {this._handleScroll}
                closeSide={this._handleCloseSide}
                itemToDisplay= {item}
                loaded={this.state.loaded}
                typesAvaliable={this.state.typesAvaliable}
                updateActiveItem ={boundActiveItemUpdate}
                isBig={this.state.activeItem !=null }
                {...this.props}/>)
          })
          return toShow;
    }

  render(){

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


          <div id ="homeMain" classDefault={this.state.loaded} className="homeMainContainer">
        {this.state.loaded? this.renderContents(): null}

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
