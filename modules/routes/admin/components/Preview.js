import React from 'react';
import TokenGenerator from 'uuid-token-generator';
let tokgen = new TokenGenerator(); //for generating keys, tokgen.generate()
// import MainView from './MainView'
import classNames from 'classnames';
// import InfoBit from './InfoContainer';
// import LargeSingle from './LargeSingle'
import HoverHOC from './HoverHOC';
// import PreviewThumb from './PreviewThumb'
// const Preview = (props)=>{
//
// }
class Preview extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoaded: false,
      showLarge: false,
      activeItem: null,
      hoveringItem:null

    };
    this._handleSize = this._handleSize.bind(this);
    this._handleItemRendering = this._handleItemRendering.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);

  }
  _handleMouseEnter(target){

    this.setState({hoveringItem: target});
  }

  _handleMouseLeave(){

    this.setState({hoveringItem: null});
  }

  _handleClick(target){
    let currentState = this.state.activeItem;
    this.setState({
      activeItem: target
    })
    this.props.getItemTarget(target)

  }
  _handleSize(){

    let height = Math.floor( this.props.windowHeight );
    let width = Math.floor( this.props.windowWidth );
    let sendingW = width/3;
    let sendingH = sendingW * .5;
    let returnSize = {height: sendingH, width:sendingW};
    return returnSize;

  }



  _handleItemRendering(info){

      const thumbDimensions = this._handleSize();
      let infostuff = info.map(item =>{


        let enter =this._handleMouseEnter.bind(null, item.contentItems.title)
        return (

                <li
                  onClick={this._handleClick.bind(null,item)}
                  onMouseEnter={enter}
                  onMouseLeave={this._handleMouseLeave}
                  key ={tokgen.generate()}

                  >
                  {this.state.hoveringItem != item.contentItems.title? <p className="previewLIHighlight">
                    {item.contentItems.title}: {item.contentItems.header} type: {item.contentItems.type}</p>:
                <p className="previewLI">{item.contentItems.title}: EDIT THIS</p>}

                </li>

          )

          }
        )
          return infostuff;

  }
componentDidMount(){
  this.setState({
    isLoaded: true
  })
}

  render(){

    let contents = this.props.infoArray;


    let items = this._handleItemRendering(this.props.infoArray);

    return(<div className='previewListContainer'>
<h1 className="previewTitle">Select contents to edit or create new</h1>
              <ul>
                {items}
              </ul>
          </div>)
  }
}
export default Preview;
