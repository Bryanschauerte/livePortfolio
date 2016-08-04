import React from 'react';
import classNames from 'classnames';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator(); //for generating keys, tokgen.generate()
//soon to be replaced and made to connect to DB
import {content, headerFilterArray} from '../../PsuedoData';

import MainContainer from './MainContainer';
import SideContainer from './SideContainer';
import Header from '../components/Header';


class Base extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      currentView: 'landing',
      calculatedHeight: null,
      calculatedWidth: null,
      sideContainerActive: false,
      loaded: false,
      filteringOut:[],
      bounce:true
    };

    this._handleResize = this._handleResize.bind(this);
    this._generateSizes = this._generateSizes.bind(this);
    this._handleViewChange = this._handleViewChange.bind(this);
    this._handleSideButton = this._handleSideButton.bind(this);
    this._editFilterOutType = this._editFilterOutType.bind(this);


  }

  _generateSizes(){

    let screenH = this.state.windowHeight;
    let screenW = this.state.windowWidth;
    let ratio = screenH/screenW;

    let sizes = {

      fullscreen:{
        height: screenH,
        width: screenW
      },
      none:{
        height:0,
        width: 0
      },
      mainView:{
        height: screenH,
        width: screenW,
        ratio:ratio,
      },

      sideContainer: {
        height: screenH,
        width: screenW * .40
      }
    }
    return sizes;
  }

  _handleViewChange(view){

    this.setState({
      currentView: view
    })
  }

  _handleSideButton(e){
    let current = this.state.sideContainerActive
    this.setState({sideContainerActive: !current})
  }

  _handleResize(e){
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
       })
  }

  _editFilterOutType(typeEdit){
    let current = this.state.filteringOut;

    if(current.indexOf(typeEdit) == -1){
      current.push(typeEdit);
    }else{
      current = current.filter((item)=> {
        if(item != typeEdit){
          return item;}
        })
    }
    this.setState({filteringOut: current});
  }

  componentWillMount(){
    this.setState({
      calculatedHeight: this.state.windowHeight,
      calculatedWidth: this.state.windowWidth
    })
  }
  componentDidMount(){
    this.setState({loaded:true});
    window.addEventListener('resize', this._handleResize);

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this._handleResize)
  }

render(){



  let activateMainTrans = this.state.currentView == "home";
  let sizes = this._generateSizes();

  let sideClass = classNames({
    'disabledSide': !this.state.sideContainerActive,
    'activeSideContainer': this.state.sideContainerActive
  })

    let sideButtonClasses= classNames({
      'hiddenSideButton': !this.state.sideContainerActive,
      'activeSideButton': activateMainTrans && !this.state.sideContainerActive
    })

  return (
    <div style={sizes.fullscreen}>
      <Header
        sideActive={this.state.sideContainerActive}
        activateInfo={this._handleSideButton}
        filtering={this.state.filteringOut}
        editFilter = {this._editFilterOutType}
        listItems ={headerFilterArray}
        classDefault={ activateMainTrans }  />

      <SideContainer
        content={content}
        isActive={this.state.sideContainerActive}
        handleClose={this._handleSideButton.bind(this)}
        sizes = {this.state.sideContainerActive? sizes.sideContainer: sizes.none}
        key ={tokgen.generate()}/>


          <MainContainer
              filtering ={this.state.filteringOut}
              contdimen ={sizes.mainView}
              activateTrans={activateMainTrans}
              boundNextView={this._handleViewChange.bind(this)}
              key ={tokgen.generate()}/>
          </div>
        )

      }
    }


export default Base;
