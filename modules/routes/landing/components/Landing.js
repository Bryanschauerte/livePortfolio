import React from 'react'
import {Link} from 'react-router';
// import SvgGenerator from '../../../components/SvgGenerator';
import LandingInfo from './LandingInfo';
// require.ensure([], require => cb(require('./Landing.scss').default));


class Landing extends React.Component{
  constructor(props){
    super(props);

  }


  render(){

    return(
      <div className="landingContainer">
        <Link to='home'>
          <LandingInfo classDefault ={false}/>
          {/* <SvgGenerator windowHeight={this.props.windowHeight} windowWidth={this.props.windowWidth}/> */}
          </Link>
      </div>
    )
  }
}






export default Landing;
