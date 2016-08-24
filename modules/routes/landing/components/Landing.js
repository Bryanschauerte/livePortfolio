import React from 'react'
import {Link} from 'react-router';
import SvgGenerator from '../../../components/SvgGenerator'


class Landing extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.context, "context")
    console.log(this.props, "props")

    return(
      <div><h1>Landing</h1>
        <h2><Link to='home'>go home</Link></h2>
        <div><SvgGenerator/></div>
        </div>
    )
  }
}






export default Landing;
