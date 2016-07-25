import React from 'react';

import {_Introduction} from '../StyleEffects/_Introduction';

class Introduction extends React.Component{

  render(){



    return (
      <div style ={_Introduction.base}>
        <div style={_Introduction.title}>
          <h1 style={_Introduction.centering}>Bryan Schauerte</h1>
          <h2 style={_Introduction.centering}>( Shower-tea )</h2>
        </div>

        <div style={_Introduction.content}>
          <div style ={_Introduction.head}>
            <h3>A sandbox for my test application, components and processes</h3>
          </div>
          <p>Welcome! Take a look and feel free to leave any feedback. This site is
          arranged by bite-size components, full finished applications,
           my rantings- blog style and information about me.</p>
        </div>
      </div>
    )
  }
}

export default Introduction;
