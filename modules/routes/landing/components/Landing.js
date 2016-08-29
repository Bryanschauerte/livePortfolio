import React from 'react'
import {Link} from 'react-router';
import SvgGenerator from '../../../components/SvgGenerator'
// require.ensure([], require => cb(require('./Landing.scss').default));


class Landing extends React.Component{
  constructor(props){
    super(props);
    this._handleClick= this._handleClick.bind(this);


  }

  _handleClick(e){
    console.log('ding')
  }
  render(){


    return(
      <div className="testing"><h1>Landing</h1>
        <h2><Link to='home'>go home</Link></h2>
        <div onClick={this._handleClick}>
          <SvgGenerator windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/></div>
        </div>
    )
  }
}






export default Landing;
