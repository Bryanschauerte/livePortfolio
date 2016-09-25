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
this._handleMouseEnter= this._handleMouseEnter.bind(this);
this._handleMouseLeave = this._handleMouseLeave.bind(this);
this._handlefocus = this._handlefocus.bind(this);
this._handleBlur = this._handleBlur.bind(this);

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

    this.setState({
    feilds: nextProps.feilds
  });
  }
  componentWillUnmount(){
    window.addEventListener('keydown', this._handleKeydown)
  }
  _handleBlur(event){

    event.preventDefault();
    if(this.props.isPreview){
      this.props._handleInputDataChangePass(this.state, true);
    }
    this.props._handleInputDataChangePass(this.state);
    this.setState({focused: false});
  }
  _handlefocus(event){

    event.preventDefault();
    this.setState({focused: true});
  }
  _handleMouseLeave(event){
    event.preventDefault();
    this.setState({isHovering: false});
  }
  _handleMouseEnter(event){
    event.preventDefault();
    this.setState({isHovering: true});
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
                subheader:'',
                links:'',
                contents:'',
                style:'',
                containsCodePen: false,
                containsMedia: '',
                mediaTitle:'',
                problem:'',
                solution:'',
                conclusion:'',
                gistId: false
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



           </div>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             stateValue={this.state.feilds.contentItems.main[index]['subheader']}
             indexNum={index}
             name="subheader"
             isTextArea ={false}
             smallable={false}
             label="Sub-Header"/>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             indexNum={index}
             stateValue={this.state.feilds.contentItems.main[index]['problem']}
             name="problem"
             label="Problem"/>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             indexNum={index}
             stateValue={this.state.feilds.contentItems.main[index]['solution']}
             name="solution"
             label="Solution"/>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             stateValue={this.state.feilds.contentItems.main[index]['contents']}
             indexNum={index}
             name="contents"
             label="Contents"/>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             indexNum={index}
             smallable={false}
             isTextArea ={false}
             stateValue={this.state.feilds.contentItems.main[index]['linkSource']}
             name="linkSource"
             label="LinkSource"/>

           <EmptyInput
             _handleInputDataChangePass={this.grabData}
             indexNum={index}
             stateValue={this.state.feilds.contentItems.main[index]['conclusion']}
             name= "conclusion"
             label="Conclusion"/>


            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.contentItems.main[index]['style']}
              name="style"
              label="Style"/>

            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              isTextArea ={false}
              smallable={false}
              stateValue={this.state.feilds.contentItems.main[index]['containsCodePen']}
              name="containsCodePen"
              label="Contains CodePen; false or iframeUrl then CodePenUrl"/>

              <EmptyInput
                _handleInputDataChangePass={this.grabData}
                indexNum={index}
                isTextArea ={false}
                smallable={false}
                stateValue={this.state.feilds.contentItems.main[index]['gistId']}
                name="gistId"
                label="If it contains a gist, put the id here otherwise false"/>


            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              isTextArea ={false}
              smallable={false}
              stateValue={this.state.feilds.contentItems.main[index]['containsMedia']}
              name="containsMedia"
              label="Contains 'images' or 'video': use 'images' or 'video'"
              />
            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              stateValue={this.state.feilds.contentItems.main[index]['links']}
              name="links"
              smallable={false}
              isTextArea ={false}
              label="Links to images Or video, put the url(s)"/>


            <EmptyInput
              _handleInputDataChangePass={this.grabData}
              indexNum={index}
              isTextArea ={false}
              smallable={false}
              stateValue={this.state.feilds.contentItems.main[index]['mediaTitle']}
              name="Title for Video or Images"
              label="mediaTitle"
              />

        </div>)} } )
  }


  render(){

    let feildValues = this.state.feilds.contentItems;
    let SubBTN = SubmittingHOC(SubmitBTN);

    return (  <div className="creationContainer">
          <h1>Creation</h1>
<SubBTN label="Submit" sendData={this.state.feilds}/>
<div className = "topCreationContainer">
        <div className="mainInfoInputContainer">
          <h3>Main</h3>
              <EmptyInput
                _handleInputDataChangePass={this.grabData}
                stateValue={feildValues.title}
                name="title"
                smallable={false}
                isTextArea ={false}
                label="Title"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.header}
                 name="header"
                 smallable={false}
                 isTextArea ={false}
                 label="Header"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.link}
                 name="link"
                 smallable={false}
                 isTextArea ={false}
                 label="Link to follow"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.footer}
                 name="footer"
                 smallable={false}
                 isTextArea ={false}
                 label="Footer"/>
               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.techStack}
                 name="techStack"
                 smallable={false}
                 isTextArea ={false}
                 label="Tech Stack"/>

               <EmptyInput
                 _handleInputDataChangePass={this.grabData}
                 stateValue={feildValues.type}
                 name="type"
                 smallable={false}
                 isTextArea ={false}
                 label="Type"/>
             </div>


                <div className="previewInputContainer">
                <h3>Preview</h3>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  stateValue={feildValues.previewContents.previewTitle}
                  name="previewTitle"
                  isPreview ="true"
                  smallable={false}
                  isTextArea ={false}
                  label="Preview Title"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  stateValue={feildValues.previewContents.previewHeader}
                  name="previewHeader"
                  isPreview ="true"
                  smallable={false}
                  isTextArea ={false}
                  label="Preview Header"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  stateValue={feildValues.previewContents.previewFooter}
                  name="previewFooter"
                  isPreview ="true"
                  smallable={false}
                  isTextArea ={false}
                  label="Preview Footer"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  isPreview ="true"
                  stateValue={feildValues.previewContents.previewExtra}
                  name="previewExtra"
                  isTextArea ={false}
                  smallable={false}
                  label="Preview Extra"/>
                <EmptyInput
                  _handleInputDataChangePass={this._handlePreviewInputDataChange}
                  isPreview ="true"
                  smallable={false}
                  stateValue={feildValues.previewContents.imageArrayPreview}
                  name="imageArrayPreview"
                  label="Image Array Preview"/>
                </div>
              </div>
                <div className="contentContainer">
                 {this._renderMainInput()}
                 </div>
            </div>);
  }
}
Creation.defaultProps={
  startingRefNum:0
}
export default Creation;
