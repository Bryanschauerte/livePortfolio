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
            fullHeader: true,
            scrollInitLoc:null
    }

    this._requestAllContents = this._requestAllContents.bind(this);
    this._constructTypeList = this._constructTypeList.bind(this);
    this._handleFilter = this._handleFilter.bind(this);
    this._handleScroll = this._handleScroll.bind(this);

  }
  _handleScroll(e){
console.log(window.scrollY, "window.scrollY " );
    const delayedChange= ()=> { window.setTimeout(
      this.state.fullHeader? ()=>{
        this.setState({fullHeader: false})
        }:
        ()=>{
          this.setState({fullHeader: true})
        }, 500).bind(this);
    }

    window.scrollY == this.state.scrollInitLoc? delayedChange(): null;

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
      let yPosition = window.scrollY;
      this.setState({scrollInitLoc: yPosition})

      window.addEventListener('scroll', this._handleScroll);
    }
    componentWillUnmount(){
      window.removeEventListener('scroll', this._handleScroll)
    }

  render(){
    let contents = this.state.dataBaseContents;
    let filteredOut = this.state.filteredOut;

    let listItems = this.state.typesAvaliable;
console.log(this.state, "state")

    return(<div className="homeContainer">
          <Header
            fullHeader = {this.props.fullHeader}
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
<div>
  <Sidecontainer
    {...this.props}
    isActive={}
    content={}
    sizes={}
    handleClose={}/>
</div>
      </div>
    )
  }

}

export default Home;
