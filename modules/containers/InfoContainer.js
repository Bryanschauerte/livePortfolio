import React from 'react';
import {colorscheme, colors} from '../StyleEffects/_colors';
import classNames from 'classnames';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import TextBoxPreview from '../components/TextBoxPreview';
import LargeSingle from './LargeSingle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import ReactCSSTransitionGroup from'react-addons-css-transition-group';

class InfoBit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isHovering: false,
      isClicked: false,
       isLoaded: false
     };
    this.mouseEntered = this.mouseEntered.bind(this);
    this.mouseLeft = this.mouseLeft.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleStyle = this._handleStyle.bind(this);
    this._handleText = this._handleText.bind(this);


  }
  _handleClick(){
    let current = this.state.isClicked;
    this.setState({
      isClicked: !current
    })
  }


  _handleStyle(type){
    let colorObj ={
      blog:"#B8A197",
      demo:"#7FC461",
      project:"#606285"
    }

    let {shape, information} = this.props;
    let biggerBoxH = shape.height;
    let biggerBoxW = shape.width * .6;
    let smallerBoxH = shape.height * .7
    let smallerBoxw = shape.width * .4
    let float = 'left';

//     -webkit-box-shadow: 3px 4px 5px 0px rgba(1,184,38,1);
// -moz-box-shadow: 3px 4px 5px 0px rgba(1,184,38,1);
// box-shadow: 3px 4px 5px 0px rgba(1,184,38,1);

    let boxesStyle = {
      boxesContainer:{

        height:shape.height,
        width: shape.width
      },


      big: { border:"3px solid "+ colorObj[type], height:biggerBoxH, width: biggerBoxW}
    }
    return boxesStyle;
    // let type = this.props.information.typeOfContent;
  }
  mouseEntered(event){
    event.preventDefault();
    this.setState({isHovering: true});
  }
  mouseLeft(event){
    event.preventDefault();
    this.setState({isHovering: false});
  }

componentDidMount(){
  //will be using this for ajax calls for smooth picture rendering
  this.setState({isLoaded: true});
}

_handleText(startText, hoverText){
  const convert = (item) => {
    let temp=[];
    item.map(item=>temp.push(<li key ={tokgen.generate()}>{item}</li>))
  return temp;
}
  const checker = (item)=>  typeof(item)== 'string'? item : convert(item);

  return this.state.isHovering? checker(hoverText): checker(startText);
}
  render(){

    let {information, shape} = this.props;



    let baseClass  = classNames({
      'infoBase': true,
      'clickedClass': this.state.isClicked
    });


    let colorObj ={
      blog:"#B8A197",
      demo:"#7FC461",
      project:"#606285"
    }

    let iCContentClass  = {
      outer: classNames({
      'icContentsBaseClass': true
    }),
    type: classNames({
    'icContentsTypeClass': true
  }),
  typeColor: colorObj[information.type],
    picture: classNames({
    'ICInfoPic': true,
    'ICInfoPicHovering': this.state.isHovering
    }),
    text: classNames({
    'ICInfoOverlay': this.state.isHovering
    })
  };



    let boxesDim = this._handleStyle(information.type);



    return (
      <div>
        <div
          onMouseLeave={this._handleClick}>
          {this.state.isClicked?
              <LargeSingle
            information = {information}
            unClick={this._handleClick}
            screenSize={this.props.screenSize}/>

            : null}

      </div>

    <div style ={boxesDim.boxesContainer}
      className= {baseClass}
      onMouseEnter={this.mouseEntered}
      onMouseLeave={this.mouseLeft}
      onClick={this._handleClick}>

          <TextBoxPreview
            picDim={{height:"100%", width:"100%"}}
            picturesArray={information.previewPic}
            classObject={iCContentClass}
            title={this._handleText('', information.title)}
            shortTitle={this._handleText('', information.shortTitle)}
            type = {this._handleText('', information.type)}
            techStack ={this._handleText('', information.techStack)} />
  </div>
</div>)
  }
}

export default InfoBit;
