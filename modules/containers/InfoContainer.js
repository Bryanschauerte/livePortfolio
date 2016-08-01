import React from 'react';
import {colorscheme, colors} from '../StyleEffects/_colors';
import classNames from 'classnames';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator();
import TextBoxPreview from '../components/TextBoxPreview';
import LargeSingle from './LargeSingle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



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


  _handleStyle(){
    let {shape, information} = this.props;
    let boxesStyle = {
      boxesContainer:{

        height:shape.height,
        width: shape.width
      }
    }
    return boxesStyle;
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




    let boxesDim = this._handleStyle();

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
      className= 'infoBase'
      onMouseEnter={this.mouseEntered}
      onMouseLeave={this.mouseLeft}
      onClick={this._handleClick}>

          <TextBoxPreview
            isHovering= {this.state.isHovering}
            dimensions={boxesDim.boxesContainer}
            picturesArray={information.gifPic}
            title={this._handleText('', information.title)}
            shortTitle={this._handleText('', information.shortTitle)}
            type = {this._handleText('', information.type)}
            techStack ={this._handleText('', information.techStack)} />
  </div>
</div>)
  }
}

export default InfoBit;
