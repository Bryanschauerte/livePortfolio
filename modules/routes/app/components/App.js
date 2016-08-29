import React from 'react'


// container for the / route
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      windowWidth: null,
      windowHeight: null
    }
    this._handleResize = this._handleResize.bind(this);
  }
  _handleResize(e){
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
       })
  }
  componentWillMount(){
    // this.setState({
    //   calculatedHeight: this.state.windowHeight,
    //   calculatedWidth: this.state.windowWidth
    // })
  }
  componentDidMount(){
    this.setState({loaded:true});
    window.addEventListener('resize', this._handleResize);
    this._handleResize()

  }
  componentWillUnmount(){
    window.removeEventListener('resize', this._handleResize)
  }
  render(){
    let { children} = this.props;


    let windowWidth=this.state.windowWidth;
    let windowHeight = this.state.windowHeight;
    return(<div className="appding">

    {React.cloneElement(children, {windowWidth: windowWidth, windowHeight: windowHeight })}
  </div>)
  }

}


export default App
