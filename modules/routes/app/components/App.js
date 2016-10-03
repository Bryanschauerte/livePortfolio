
import React from 'react';
import SvgGenerator from './SvgGenerator';

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


      componentDidMount(){


        window.addEventListener('resize', this._handleResize);
        this._handleResize()

      }
      componentWillUnmount(){
        window.removeEventListener('resize', this._handleResize)
      }


      render(){
        let { children} = this.props;
        let currentLocation = this.props.location.pathname
        let windowWidth=this.state.windowWidth;
        let windowHeight = this.state.windowHeight;




        return(<div className="appding">


        {React.cloneElement(children, {
          windowWidth: windowWidth,
          windowHeight: windowHeight
        })}
          <SvgGenerator windowHeight={windowHeight} showBackgAni={currentLocation =='/'} windowWidth={windowWidth}/>
      </div>)
      }

    }


export default App
