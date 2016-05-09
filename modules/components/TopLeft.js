import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';


const TopLeft = React.createClass({

  render(){
    return(
      <div style={this.props.styles.base}>
        <div  style={this.props.styles.titleCont}>
          <h1 style={this.props.styles.titleText}>Bryan Schauerte</h1>
        </div>
        <div  style={this.props.styles.innerCon}>
        <div style={this.props.styles.img}>

            <div style ={this.props.styles.innerText}>

                <h3>A MEAN/MERN Front-end Developer</h3>
                <br/>
                <p>This site was written in ReactJS,
                  rendered and served from a Node server.</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
});


export const TopLeftContainer = (Radium(TopLeft));
