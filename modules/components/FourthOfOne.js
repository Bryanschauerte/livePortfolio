import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';


const Fourth = React.createClass({

  render(){
    return(
      <div style={this.props.styles.base}>
        <div  style={this.props.styles.innerCon}>
          <h2 style={this.props.styles.titleText}>
            {this.props.activeView}

          </h2>

            <div style ={this.props.styles.innerText}>
              <br/>
                <h3>Choose a selection to read up on!</h3>

                <p> (or Click the tea for a new section)</p>
                <br/>
                <div style={this.props.styles.btnHolder}>
                  <button>test</button><button>test</button><button>test</button>
                </div>

            </div>

        </div>
      </div>
    );
  }
});


export const FourthOfOne = (Radium(Fourth));
