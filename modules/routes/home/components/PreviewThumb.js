import classNames from 'classnames';
import React from 'react';



class PreviewThumb extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isHovering: false,
      isClicked: this.props.isBig,
      imageArray:null,
      isLoaded:false
    }
    this._mouseEntered = this._mouseEntered.bind(this);
    this._mouseLeft = this._mouseLeft.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleImages = this._handleImages.bind(this);
    this.handleStringForUrlArray = this.handleStringForUrlArray.bind(this);
    this._buttonStyle = this._buttonStyle.bind(this);
    this._handleSummary = this._handleSummary.bind(this);
    this._setSize = this._setSize.bind(this);
    this._classNameAddition = this._classNameAddition.bind(this);
    this.renderPreview = this.renderPreview.bind(this);

  }
  _setSize(){
    let sizeOb = {
      minHeight: this.props.height/2,
      minwidth: this.props.width/3
    }
    return sizeOb;
  }
  _buttonStyle(isInverted, type){
    let color = this.props._colorHandling(type);

    let style = {
      backgroundColor: color,
      border: "1px solid "+ '#ffffff',
      color: '#ffffff',
      textAlign: "center",
      fontFamily: 'Roboto',
      boxShadow: "0 0 0 2px "+ color,
      borderRadius: '2px',
      letterSpacing: '.4em',
      textShadow: '1px 1px 3px',
      cursor: 'pointer',
      transition: "background-color 250ms ease-in-out",
      alignSelf:'center',
      width: '60%',
      marginTop: "2%"

    }

    let invStyle = {
      width: '60%',
      backgroundColor:'#ffffff',
      border: "1px solid "+ color,
      textAlign: "center",
      fontFamily: 'Roboto',
      color:color,
      boxShadow: "0 0 0 2px #ffffff",
      borderRadius: '2px',
      letterSpacing: '.4em',
      textShadow: '1px 1px 3px',
      cursor: 'pointer',
      transition: "background-color 250ms ease-in-out",
      alignSelf:'center',
      marginTop: "2%"

    }
    return isInverted? invStyle: style;
  }

  handleStringForUrlArray(string){
    return Array.isArray(string)? string: string.split(', ')


  }

  _handleClick(x){
    this.props.handleScroll();
    let title =this.props.displayInfo.title;
    this.props.setActiveItem(title);
    this.props.closeSide();
    let current = this.state.isClicked;
    this.setState({
      isClicked: !current,
      isHovering: false
    })

  }

  _mouseEntered(event){

    event.preventDefault();
    this.setState({isHovering: true});
  }

  _mouseLeft(event){

    event.preventDefault();
    this.setState({isHovering: false});
  }
  _handleImages(imageUrl){

    return (<img
      src={imageUrl}
      height={this.props.windowHeight*.2}
      width='auto'/>);


  }
  _handleSummary(){

    let list = this.props.displayInfo.main.map((item, index)=>{
      if(item.subheader){
        return <li key ={Math.random()}>{item.subheader}</li>
      }
    })

    return list;
  }

  _classNameAddition(addition){
    let classesSmash = classNames(addition, {
      hereHere: true,
      goGone: this.props.isActive != (this.props.displayInfo.title || null)

    })
    return classesSmash;
  }
  componentDidMount(){
    this.setState({isLoaded:true})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isClicked: nextProps.isBig
    });
  }


  renderPreview(){

        let mainContainerStyle = classNames({
          previewThumbContainer: true,
          fadeOut:  !this.state.isLoaded,
          fadeIn:  this.state.isLoaded,

        })


          let imageStyle = this._handleImages(
            this.handleStringForUrlArray(this.props.displayInfo.previewContents.imageArrayPreview));
          let listSummary = this._handleSummary();

          return (<div
                  onMouseEnter={this._mouseEntered}
                  onMouseLeave ={this._mouseLeft}
                  className={mainContainerStyle}
                  style={{minHeight:this.props.windowHeight*.48}} >

                  <div className= {this._classNameAddition("seperator")}>
                        {!this.state.isHovering?<div className='previewImage'>
                          {imageStyle}
                         </div>: null}

                    <div className={this._classNameAddition("previewTextContainer")}>
                      <h2>
                        {this.props.displayInfo.previewContents.previewTitle}
                      </h2>
                      <h4><em>{this.props.displayInfo.previewContents.previewHeader}</em></h4>

                      {this.state.isHovering?<ul  className='previewThumbList'>
                        <h4>Contents:</h4>
                        {listSummary}
                      </ul>: null}


                    {this.state.isHovering?<div className="previewFooter">
                      <h3>{this.props.displayInfo.previewContents.previewFooter}</h3>
                    </div>:null}

                  </div>



                  </div>
                      <div className={this._classNameAddition("previewThumbBtn")}
                        onMouseEnter={this._mouseEntered}
                        onClick={this._handleClick}
                        style ={
                          this.state.isHovering? this._buttonStyle(true, this.props.displayInfo.type):
                        this._buttonStyle(false, this.props.displayInfo.type)}>
                        VIEW THIS {this.props.displayInfo.type.toUpperCase()}
                      </div>
                    </div>)
  }


  render(){
    return(
      <div>
        {this.state.isClicked? this.props.children: this.renderPreview()}
      </div>
    )
  }
}

export default PreviewThumb;
