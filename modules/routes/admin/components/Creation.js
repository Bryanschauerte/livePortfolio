import React from 'react';

import SubmittingHOC from '../../../components/SubmittingHOC';
import EmptyInput from '../../../components/EmptyInput';
import EmptyDisplay from '../../../components/EmptyDisplay';
import BtnHandler from '../../../components/BtnHandler';
import SubmitBTN from '../../../components/SubmitBTN';

class Creation extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      mainShowing: 0,
      feilds: this.props.feilds,
      editing: false

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
    this._handlePreviewInputDataChange = this._handlePreviewInputDataChange.bind(this);

  }

  _handleKeydown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();

    }
  }
  componentDidMount(){
    this.setState({feilds: this.props.feilds})
    window.addEventListener('keydown', this._handleKeydown);

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps, "nextProps")
    this.setState({
    feilds: nextProps.feilds
  });
  }
  componentWillUnmount(){
    window.addEventListener('keydown', this._handleKeydown)
  }

  _changeMainIndex(indexWish){

    let numOfItems = this.state.feilds.contentItems.main.length;
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
      currentStateFeilds.contentItems.main.slice(index, 1);

      if(this.state.mainShowing === index){
        this.setState({mainShowing: index -=1, feilds:currentStateFeilds})
      }else {
        this.setState({feilds: currentStateFeilds})
      }

  }

  _handleInputDataChange(dataObj){


    let currentStateFeilds = this.state.feilds;

    dataObj.indexNum === 'NA'? currentStateFeilds.contentItems[dataObj.name] = dataObj.value:
      currentStateFeilds.contentItems.main[dataObj.indexNum][dataObj.name] = dataObj.value;

    this.setState({feilds: currentStateFeilds});

  }
  _handlePreviewInputDataChange(dataObj){
console.log(dataObj, "PREVIEW HIT")

    let currentStateFeilds = this.state.feilds;

    currentStateFeilds.contentItems.previewContents[dataObj.name] = dataObj.value;


    this.setState({feilds: currentStateFeilds});

  }


  grabData(dataIn){


      this._handleInputDataChange(dataIn);

  }
  _handleButton(e,){
    e.preventDefault();


  }
  _handleSubmit(e){
    e.preventDefault();

  }

  _addRemoveMainGroup(isAdd){

    let index = this.state.feilds.contentItems.main.length
    const plainMainContent= {
                subHeader:'',
                link:'',
                linkSource:'',
                content:'',
                style:'',
                containsCodePen:false,
                containsOther: ''
              };

    let currentStateFeilds = this.state.feilds;

    if(isAdd === true){
      currentStateFeilds.contentItems.main.push(plainMainContent);
      this.setState({
        feilds: currentStateFeilds,
        mainShowing: this.state.mainShowing += 1
      });

    }else{
      if(index >0){
        this._removeIndex(index);
      }
      if(index <= 0){
        currentStateFeilds.contentItems.main[0]= plainMainContent
         this.setState({feilds: currentStateFeilds})
      }
    }

  }
  _renderMainInput(){

    let SubBTN = SubmittingHOC(SubmitBTN)
    let Showing = this.state.mainShowing;
    let totalSections = this.state.feilds.contentItems.main.length;

    return this.state.feilds.contentItems.main.map( (item,index)=>{
       if(Showing === index){
         return(<div className="creationContainer" key={index}>
           <div className="creationTitle">
              <h2>Main Contents</h2>
               <p>Current Index: {index}</p>
            </div>
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

             <SubBTN label="Submit" sendData={this.state.feilds}/>

           </div>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             stateValue={this.state.feilds.contentItems.main[index]['subheader']}
             indexNum={index}
             name="subheader"
             label="Sub-Header"/>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             stateValue={this.state.feilds.contentItems.main[index]['contents']}
             indexNum={index}
             name="contents"
             label="Contents"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              stateValue={this.state.feilds.contentItems.main[index]['link']}
              indexNum={index}
              name="link"
              label="Link"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.contentItems.main[index]['linkSource']}
              name= "linkSource"
              label="Link Source"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.contentItems.main[index]['style']}
              name="style"
              label="Style"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.contentItems.main[index]['containsCodePen']}
              name="containsCodePen"
              label="Contains CodePen"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.contentItems.main[index]['containsOther']}
              name="Contains Other"
              label="containsOther"/>

        </div>)} } )
  }


  render(){
console.log(this.props, "props")
    let feildValues = this.state.feilds.contentItems;
console.log(this.state, "creation state")
    return (  <div className="creationContainer">
          <h1>Creation</h1>


              <EmptyInput
                _handleInputDataChangePass={this.grabData}
                stateValue={feildValues.title}
                name="title"
                label="Title"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.header}
                 name="header"
                 label="Header"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.type}
                 name="type"
                 label="Type"/>


                {this._renderMainInput()}

              <EmptyInput
                _handleInputDataChangePass={this.grabData}
                stateValue={feildValues.footer}
                name="footer"
                label="Footer"/>

                <h1>Preview</h1>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  stateValue={feildValues.previewContents.previewTitle}
                  name="PreviewTitle"
                  isPreview ="true"
                  label="Preview Title"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  stateValue={feildValues.previewContents.previewHeader}
                  name="previewHeader"
                  isPreview ="true"
                  label="Preview Header"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  stateValue={feildValues.previewContents.previewFooter}
                  name="previewFooter"
                  isPreview ="true"
                  label="Preview Footer"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  isPreview ="true"
                  stateValue={feildValues.previewContents.previewExtra}
                  name="previewExtra"
                  label="Preview Extra"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  isPreview ="true"
                  stateValue={feildValues.previewContents.imageArrayPreview}
                  name="imageArrayPreview"
                  label="Image Array Preview"/>


            </div>);
  }
}
Creation.defaultProps={
  startingRefNum:0
}
export default Creation;
