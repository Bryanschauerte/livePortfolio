import React from 'react';

// import FormCreator from '../../../containers/FormCreator';
// import inputHOC from '../../../containers/inputWrapperHOC';
// import inputStorageHOC from '../../../containers/InputStorageHOC';
// import EmptyInput from '../../../components/EmptyInput';

import SubmittingHOC from './SubmittingHOC';
import EmptyInput from './EmptyInput';
import EmptyDisplay from './EmptyDisplay';
import BtnHandler from './BtnHandler';
import SubmitBTN from './SubmitBTN';

class Creation extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      mainShowing: 0,
      feilds:{
        title: '',
        header:'',
        main: [
          {
            subHeader:'',
            link:'',
            linkSource:'',
            content:'',
            style:''
          }
        ],
        footer:''
      }

    }
    this._addRemoveMainGroup = this._addRemoveMainGroup.bind(this)
    this._handleSubmit= this._handleSubmit.bind(this);
    this.grabData= this.grabData.bind(this);
    this._renderMainInput = this._renderMainInput.bind(this);
    this._handleInputDataChange = this._handleInputDataChange.bind(this);
    this._changeMainIndex = this._changeMainIndex.bind(this);
    this._removeIndex = this._removeIndex.bind(this);
    this._handleButton= this._handleButton.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
  }

  _handleKeydown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();

    }
  }
  componentDidMount(){
    window.addEventListener('keydown', this._handleKeydown);
  }
  componentWillUnmount(){
    window.addEventListener('keydown', this._handleKeydown)
  }

  _changeMainIndex(indexWish){

    let numOfItems = this.state.feilds.main.length;
    if(indexWish < numOfItems && indexWish >=0 ){
      return this.setState({
        mainShowing: indexWish
      })
    }
    return this.setState({
      mainShowing: 0
    })

  }

  _removeIndex(index){
      let currentStateFeilds= this.state.feilds;
      currentStateFeilds.main.slice(index, 1);

      if(this.state.mainShowing === index){
        this.setState({mainShowing: index -=1, feilds:currentStateFeilds})
      }else {
        this.setState({feilds: currentStateFeilds})
      }

  }

  _handleInputDataChange(dataObj){
console.log("handle input hit",dataObj );
    let currentStateFeilds = this.state.feilds;
    dataObj.indexNum === 'NA'? currentStateFeilds[dataObj.name] = dataObj.value:
      currentStateFeilds.main[dataObj.indexNum][dataObj.name] = dataObj.value;
    this.setState({feilds: currentStateFeilds});
  }


  grabData(dataIn){
      console.log(dataIn, "grab dataon cnota");
      this._handleInputDataChange(dataIn)
  }
  _handleButton(e,){
    e.preventDefault();
    console.log(e,'ding');

  }
  _handleSubmit(e){
    e.preventDefault();
  }

  _addRemoveMainGroup(isAdd){
console.log(isAdd, "isadd")
    let index = this.state.feilds.main.length
    const plainMainContent= {
                subHeader:'',
                link:'',
                linkSource:'',
                content:'',
                style:''
              };

    let currentStateFeilds = this.state.feilds;

    if(isAdd === true){
      currentStateFeilds.main.push(plainMainContent);
      this.setState({
        feilds: currentStateFeilds,
        mainShowing: this.state.mainShowing += 1
      });

    }else{
      if(index >0){
        this._removeIndex(index);
      }
      if(index <= 0){
        currentStateFeilds.main[0]= plainMainContent
         this.setState({feilds: currentStateFeilds})
      }
    }

  }
  _renderMainInput(){
 let SubBTN = SubmittingHOC(SubmitBTN)
 console.log(SubBTN, "subBTN")



    let Showing = this.state.mainShowing;
    let totalSections = this.state.feilds.main.length;
    console.log(Showing, "shwoing")
    return this.state.feilds.main.map( (item,index)=>{
       if(Showing === index){
         return(<div className="creationContainer" key={index}>
           <h2>Current Index: {index}</h2>
           <div className='inputControlContainer'>
             <BtnHandler
               clickAction={this._addRemoveMainGroup}
               callBackProp= {true}
               label="Add New Main Content Section"/>

             <BtnHandler

               clickAction={this._changeMainIndex}
               callBackProp= {index-1}
               label="Look at previous section"/>

             <BtnHandler

               clickAction={this._changeMainIndex}
               callBackProp= {index+1}
               label="Look at next section"/>

             <SubBTN label="Submit" stateFeilds={this.state.feilds}/>

           </div>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             stateValue={this.state.feilds.main[index]['subheader']}
             indexNum={index}
             name="subheader"
             label="Sub-Header"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              stateValue={this.state.feilds.main[index]['link']}
              indexNum={index}
              name="link"
              label="Link"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.main[index]['linkSource']}
              name= "linkSource"
              label="Link Source"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.main[index]['style']}
              name="style"
              label="Style"/>

        </div>)} } )
  }


  render(){
    let mainContentInput = this._renderMainInput();

    return (  <div className="creationContainer">
          <h1>Creation</h1>


              <EmptyInput
                _handleInputDataChangePass={this.grabData}
                stateValue={this.state.feilds.title}
                name="title"
                label="Title"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={this.state.feilds.header}
                 name="header"
                 label="Header"/>

               <h1>Main</h1>
                {mainContentInput}

              <EmptyInput
                _handleInputDataChangePass={this.grabData}
                stateValue={this.state.feilds.footer}
                name="footer"
                label="Footer"/>

            <h1>Presentation</h1>
              <EmptyDisplay text={this.state.feilds.title}/>
            </div>);
  }
}
Creation.defaultProps={
  startingRefNum:0
}
export default Creation;

// ref={(ref) => this.myTextInput = ref}
